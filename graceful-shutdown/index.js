const express = require('express')
const mongoose = require('mongoose')

const app = express()
const state = { 
  isShutdown: false 
};

// 🔌 Connect MongoDB
mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, 
  (err) => {
    if (err) throw err
    console.log('✔️ Mongoose connected!')
  })
// Create model instance
const User = mongoose.model('User', {name: String})

// 🤜 Middlewares
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
// Custom middleware
app.use('/healthz', (req, res) => {
  if (state.isShutdown) {
    res.status(500).send('server is shutdown!');
  } 
  res.status(200).send({alive: true});
});


// 👉 Routes
app.get('/', async (req, res) => {
    res.send('Hello World!')
})
app.post('/users', async (req, res) => {
   try {
    const user = new User({ name: req.body.name });
    await user.save();
    res.send('Success!').status(201);
  } catch (err) {
    res.send(err.message).status(500);
  } 
})


// 🚀 Start server
let server = app.listen(3000, () => {
  console.log('🚀 Start app listening on port: 3000')
})

// ❌Gracful shutdown handler
const gracfulShutdown = () => {
  state.isShutdown = true

  console.log(`\n🛑 ${new Date().toISOString()}: Got SIGINT! ⇒ Graceful shutdown is starting..`)
  server.close(() => {
    console.log('🚫 HTTP server closed!')
    // boolean means [force], see in mongoose doc
    mongoose.connection.close(() => {
      console.log('🚫 MongoDB connection closed!')
      process.exit(0)
    })
  })

  setTimeout(() => {
    console.error('Could not close connections in time, forcefully shutting down')
    process.exit(0)

  }, 10 * 1000)
}

// listten SIGTERM signal e.g dead
process.on('SIGTERM', gracfulShutdown)

// listten SIGNINT signal e.g ctrl+c
process.on('SIGINT', gracfulShutdown)


