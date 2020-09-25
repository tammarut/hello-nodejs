const EventEmitter = require("events");
const myService = new EventEmitter();

// ———————— Event sender ————————
setTimeout(() => {
  myService.emit("registration", {
      name: "Tar",
      email: "Tar@email.com"
  });
}, 1000)



// ———————— Listener ————————
// Email service
myService.on("registration", userData => {
   console.log(`📤 We send invitation to ${userData.name} (${userData.email})`);
});


// Admin service
myService.on("registration", userData => {
   console.log(`😅 Boss, we have new user! ⇨ "${userData.name}"`);
});
