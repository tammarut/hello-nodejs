//const result = await doSomethingAsync()
//doSomethingElse()

const axios = require("axios");
const API_ENDPOINT = "https://jsonplaceholder.typicode.com";

// Work on the same action (Promise vs Async-Await)
// Promise style
function fetchDataPromise() {
  axios
    .get(`${API_ENDPOINT}/posts/1`)
    .then(out => out.data)
    .then(json => {
      console.log("My user");
      console.log(json);
      return json;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
}

// Async-Await
async function fetchDataAsync() {
  try {
    const out = await axios.get(`${API_ENDPOINT}/posts/1`);
    const json = out.data;

    console.log(json);

    return json;
  } catch (err) {
    console.log(err.response.status);
    return err;
  }
}

fetchDataAsync();
