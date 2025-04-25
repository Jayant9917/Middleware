// If there is certain code base that may throw an error we wrap inside a try / catch
// if we know that there is an error we can use the try catch
// if we don't know that there is an error we can use the try catch

// Spacially useful for jwt.verify => either it give the error or it doesn't

try{
    let a;
    console.log(a.length); // it does not exist => it will throw an error
    console.log("Hello from try statement")
}catch(e){
    console.log("hello from catch statement")
}
console.log("hi there");


// I safeguarded my code either there is an error or not the statement will execute in catch and outside the catch
