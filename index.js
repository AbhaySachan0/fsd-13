// function info(roll, name, college, branch){
//   return `Roll -> ${roll}
//   Name -> ${name}
//   College -> ${college}
//   BRanch -> ${branch}`;
// }

// console.log(info(59, "Abhyuday", "ABES Engineering College", "CSE"));
// console.log(info(72, "Bisht", "ABES Engineering College", "CSE"));
// console.log(info(51, "Maurya", "ABES Engineering College", "CSE"));

// function generateNumber(){
//   return Math.floor(Math.random()*1000);
// }

// const randomNumber = generateNumber();

// function findEvenNumber(){
//   if(randomNumber % 2 == 0){
//     console.log("Even");
//   }
//   else{
//     console.log("Odd")
//   }
// }

// findEvenNumber();
// console.log(randomNumber);

// const sum = (a, b) =>{
//   return a + b
// }
// const result = sum(20, 50);

// IIFE
// (()=>{console.log("Hey..using IIFE")})();

// // Callback Function
// function sum(a, b){
//   return a+b;
// }
//
// function sumWithMsg(clbk, msg){
//   const result = clbk(20, 40);
//   return msg + " " + result;
// }
//
// console.log(sumWithMsg(sum, "Hi...Sum"));
//

//
// function sumsqrt(a, b) {
//   return Math.sqrt(a) + Math.sqrt(b);
// }
//
// function sumofsqrt(msg, clbk) {
//   const result = clbk(25, 100);
//   return msg + " " + result;
// }
//
// console.log(sumofsqrt("Abhay", sumsqrt));
//
//

// ---------Promises----------
const myPromise = new Promise((resolve, reject) => {

  let username = "helloworld";
  let password = "12345";
  if (username == "helloworld" && password == "12345") resolve("Success");
  else reject("Invalid user");
})
//
// myPromise.then((msg) => {
//   console.log(msg);
// }).catch(msg => {
//   console.log(msg);
// }).finally(() => console.log("All resource has been closed"));
//

async function loginHandler() {
  try {
    const loginStatus = await myPromise;
    console.log(loginStatus);
  } catch (e) {
    console.log(e)
  } finally {
    console.log("Closing all resources");
  }
}

loginHandler();
