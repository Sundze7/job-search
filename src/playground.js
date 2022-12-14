//BONUS - ES6

// //1. merging arrays
// const fruits = ["Apple", "Banana", "Lemon"];
// const vegetables = ["Pineapple", "Cucumber"];

// console.log([...fruits, ...vegetables]);

// //2. Objects
// const developer = {
//   salary: 400000,
//   experience: 4.5,
//   techStack: ["vue", "HTML", "CSS"],
//   lookingForWork: true,
//   doubleSalary() {
//     this.salary = this.salary * 2;
//     this.lookingForWork = false;
//   },
// };

// console.log(developer.salary, developer.lookingForWork);

// developer.doubleSalary();

// console.log(developer.salary, developer.lookingForWork);

// // 3. EvenOrOdd Fxn (Exercise on Testing)
// export const evenOrOdd = (number) => {
//   if (number % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// };

// //export const multiply = (num1, num2) => {
// // let total = 0;

// // for (let i = 0; i < num1; i++) {
// //   total += num2;
// // }
// // return total;
// //}

// // Refactoring the code above, we have ..
// export const multiply = (num1, num2) => num1 * num2;

// // 4. map() : array function
// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map((number) => number * number);

// console.log(squares);

// //5. Dynamic Object Properties
// const favFood = "sushi";

// const goodFoods = {
//   [favFood]: true,
// };

// console.log(goodFoods);

// //6.1 SetTimeOut - This function waits for a specified amount of time (given in milliseconds) b4 executing the logic of ur fxn once
// setTimeout(() => {
//   console.log("i will print 2 seconds after the program starts");
// }, 2000);

//6.2 SetInterval - similar to setTimeout but it runs ur fuction repeatedy for a specified interval consecutively consistenly

// //6.3 ClearInterval - stops the execution of the function we pass in it

// const interval = setInterval(() => {
//   console.log("i will print every 2 seconds");
// }, 2000);

// clearInterval(interval);

// //Example
// const interval = setInterval(() => {
//   console.log("i will print every 2 seconds");
// }, 2000);

// setTimeout(() => {
//   clearInterval(interval);
// }, 6000);

// //7 Axios
// const axios = require("axios");

// const url = "http://localhost:3000/jobs";

// // const fetchJobsV1 = () => {
// //   axios.get(url).then((response) => {
// //     console.log(response.data);
// //   });
// // };
// // fetchJobsV1();

// const fetchJobsV2 = async () => {
//   const response = await axios.get(url);
//   console.log(response.data);
// };

// fetchJobsV2();

// //8. SLICE ARRAY METHOD. returns a copied section of an original array based on index spec
// const sushi = [
//   "Tuna",
//   "Salmon",
//   "Yellotail",
//   "Eel",
//   "Shrimp",
//   "Octopus",
//   "Uni",
// ];

// //console.log(sushi.slice())
// //console.log(sushi.slice(4));
// console.log(sushi.slice(2, 4));

// //9. SETS
// // Arrays solve the problems of order
// // Objects exist for association
// // a set is a data structure for uniqueness, ensuring there are no duplicates

// const numbers = new Set();
// numbers.add(5);
// numbers.add(10);
// numbers.add(15);
// numbers.add(10);
// numbers.add(15);

// console.log(numbers);

// //10. Filter Array Method
// // const numbers = [1, 3, 5, 7, 2, 9, 11, 6];
// // console.log(numbers.filter((number) => number > 6));

// const jobs = [
//   { title: "Angular Developer", organization: "Microsoft" },
//   { title: "Programmer", organization: "Google" },
//   { title: "Developer", organization: "Microsoft" },
// ];

// console.log(jobs.filter((job) => job.organization !== "Microsoft"));

//11 VUE ref function - it returns a JS object which is able to deal with reactivity
//the computed fxn allows us to tie the dynamic computation of a value to some kind of other reactive value

const { reactive, computed } = require("vue");
//const { ref } = require("vue")

//a. with numbers
// let a = ref(1);
// let b = ref(2);

// let c = computed(() => a.value + b.value);
// console.log(c.value);

// a.value = 10;
// console.log(c.value);

// b.value = 15;
// console.log(c.value);gs

// //b. with strings
// const name = ref("Boris");

// const title = computed(() => name.value + " the Great");
// console.log(title.value);

// name.value = "Peter";
// console.log(title.value);

// //c. ref fxn with objects
// const person = ref({
//   name: "Mike",
// });

// const title = computed(() => person.value.name + " the Mighty");
// console.log(title.value);

// person.value.name = "Sundze";
// console.log(title.value);

// //d. reactive fxn: this fxn is specifically for objects
// const person = reactive({
//   name: "Mike",
// });

// const title = computed(() => person.name + " the Mighty");
// console.log(title.value);

// person.name = "Sundze";
// console.log(title.value);

// //e. multiple proprties on reactive object
// const person = reactive({
//   firstName: "Mike",
//   lastName: "Meros",
// });

// const title = computed(
//   () => `${person.firstName} ${person.lastName} the Mighty`
// );
// const titleLength = computed(() => title.value.length);
// console.log(title.value);
// console.log(titleLength.value);

// person.firstName = "Sundze";
// console.log(title.value);
// console.log(titleLength.value);

// person.lastName = "Napoleon";
// console.log(title.value);
// console.log(titleLength.value);

//f. Destructuring object with toRef fxn. this fxn receives only reactive objects as arguments
const { toRefs } = require("vue");

const person = reactive({
  firstName: "Mike",
  lastName: "Meros",
});
const { firstName, lastName } = toRefs(person);

const title = computed(() => `${firstName.value} ${lastName.value} the Mighty`);
console.log(title.value);

person.firstName = "Sundze";
console.log(title.value);

person.lastName = "Napoleon";
console.log(title.value);
