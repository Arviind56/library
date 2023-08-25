"use strict";
const book1 = {
  title: "Harry Potter",
  author: "jk rowling",
  yearPubling: 2002,
  readStatus: "yes",
};
const book2 = {
  title: "Harry Potter and the order of Phenix",
  author: "jk rowling",
  yearPubling: 2003,
  readStatus: "no",
};
const book3 = {
  title: "Harry Potter and the goblet of fire",
  author: "Arvind R",
  yearPubling: 2004,
  readStatus: "yes",
};
var libary = [book1, book2, book3];

document.getElementById("submit").addEventListener("click", function () {
//   e.preventDefault();
  var title = document.querySelector("#input1").value;
  var author = document.querySelector("#input2").value;
  var yearPubling = document.querySelector("#input3").value;
  var readStatus = document.querySelector("#input4").value;

  libary.push({
    title: title,
    author: author,
    yearPubling: yearPubling,
    readStatus: readStatus,
  });
  console.log(libary);
});

document.querySelector("#button1").addEventListener("click", function () {
//   e.preventDefault();
  libary.pop();
});
console.log(libary);
document.querySelector("#button2").addEventListener("click", function () {
//   e.preventDefault();
  var title = document.querySelector("#input1").value;
  var author = document.querySelector("#input2").value;
  var yearPubling = document.querySelector("#input3").value;
  var readStatus = document.querySelector("#input4").value;
  libary.unshift({
    title: title,
    author: author,
    yearPubling: yearPubling,
    readStatus: readStatus,
  });
  console.log(libary);
});
document.querySelector("#button3").addEventListener("click", function () {
  // e.preventDefault();
  libary.shift();
  console.log(libary);
});
function gettitles(){
  const getallbooks = libary.map((book) => book.title);
  document.getElementById("author").innerHTML="\n"+getallbooks+"\n";
};

  document.getElementById('titles').addEventListener('click',gettitles);
  // console.log(getallbooks);
  
  function getbooksbyauthor() { const getlib=libary.map((book) => book.author);
    document.getElementById('writer1').innerHTML="\n"+getlib+"\n";}
    document.getElementById('writer2').addEventListener('click',getbooksbyauthor);
// console.log(getbooksbyauthor); 
const totalBooksPublishedYearBefore = function (year) {
  return (
    libary
      // Filter books published before the given year
      .map((book) => book.yearPubling)
      .filter((book) => book < year) // Get an array of publication years
      .reduce((count, sum) => count + 1, 0)
  );
};

console.log(totalBooksPublishedYearBefore(2020));

const book={
    title: "Harry Potter and the order of Phenix",
  author: "jk rowling",
  yearPubling: 2003,
  readStatus: false,
    booking: function(){
        
        return `${this.title} and the author name is${this.author} the year of publishing is ${this.yearPubling}`
    }
}
const er=book.booking.bind(book1);
const er1=book.booking.bind(book2);
const er2=book.booking.bind(book3);
console.log(er());
console.log(er1());
console.log(er2());

const returnbookread=function(){
    libary.map((book)=> book).filter((book)=>book.readStatus )
}
// const reading=function(status){
//     libary.map((book)=>book.readStatus);
//     // .filter((book)=>book.)

// }
let getBookByAuthor = function (author1) {
      let r=libary.filter((book) => book.author == author1).map((book)=>book.title);
      return r
  };
  console.log(getBookByAuthor('jk rowling'));


  const celsius=[0,10,20,30];

  const mapmethod=celsius.map((c)=>c*9/5+32)
  .filter((temp)=>temp>40).reduce((acc,sum)=>acc+1,0);

  console.log(mapmethod);

  const fruits=['apple','banana','cabbage','dates'];

  const somefruits = fruits.slice(3);

  console.log(somefruits);
const ageofbook=function(age){
  let curryear=2023;
  console.log(`the year of the book will be ${curryear-age.yearPubling} years`);

}
ageofbook(book3);
ageofbook(book2);
ageofbook(book1);
let arr=[];
const calculator={
  add:function(a,b){
    let add= a + b
    console.log(add);
    arr.push(add);
  },
  sub:function(a,b){
    let sub=a - b
    console.log(sub);
    arr.push(sub);
  },
  mul:function(a,b){
    let mul=a*b;
    console.log(mul);
    arr.push(mul);
  },
  div:function(a,b){
    let div=a/b
    console.log(div);
    arr.push(div);
                                                              }
}
calculator.add(4,5);
calculator.sub(5,5);
calculator.div(40,5);
calculator.mul(4,5);
console.log(arr);

const person={
  year:50,
  inc:function(){ 
    this.year+= 1;
    return this.year;
  },
}
let age=person.inc();
console.log(age)

// let age=person.inc;
// console.log(age)