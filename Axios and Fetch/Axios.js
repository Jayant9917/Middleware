// Axios is an external Library which is writen by realy smart people to make it easy to send http requests
// Axios is a promise based library
// Axios is a lightweight library



const axios = require("axios");

async function main(){
    // What ever the request i am sending => Get,post,put,delete => i have to write it 
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
    // response.data
    console.log(response.data);   
}
main();


// ANOTHER AXIOS WAY 

// const axios = require("axios");

// axios.get("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => {
//         console.log(response.data);
//     })
//     .catch((error) => {
//         console.error("Error:", error.message);
//     });
