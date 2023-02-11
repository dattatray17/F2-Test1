/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  arr.map(function(student){
    if(student.marks > 50){
      console.log(`Name: ${student.name}, Age: ${student.age}, Marks: ${student.marks}`);
    }
  })
}

function PrintStudentsbyForEach() {
  arr.forEach(function(student){
    if(student.marks > 50){
      console.log(`Name: ${student.name}, Age: ${student.age}, Marks: ${student.marks}`);
    }
  })
}

function addData() {
  let newStudent = {id:4,name:"susan",age:"20",marks:45};
  arr.push(newStudent);
  console.log(arr);
}

function removeFailedStudent() {
  let passStudents = arr.filter(function(student){
    if(student.marks >= 50){
      console.log(passStudents);
    }
  })
}

function concatenateArray() {
  let arr1 = [
    { id: 4, name: "jyoti", age: "19", marks: 85 },
    { id: 5, name: "jignesh", age: "22", marks: 86 },
    { id: 6, name: "kartik", age: "21", marks: 45 },
  ];
  let newArray = arr.concat(arr1);
  console.log(newArray);
}
