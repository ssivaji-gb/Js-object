// Mini Project Assignment – JS Arrays
// Project Title: Student Marks Analyzer

/////////////OWN code


let students = [
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 58 },
  { name: "Charlie", marks: 92 },
  { name: "David", marks: 37 },
  { name: "Eva", marks: 76 }
];

// 2️⃣ Display All Students
// console.log("All Students:");
console.log("All Students:");

students.forEach(a=>{console.log(a.name+"-"+a.marks)})


// 3️⃣ Calculate Total & Average Marks

 let num = students.reduce((acc,students)=>{
  return acc+students.marks},0)
  console.log("Total Marks: "+num);
 let avg=num/students.length 
 console.log("Average Marks: "+avg);

//  4️⃣ Find Highest and Lowest Marks

let high=students.sort((a,b)=>b.marks-a.marks)
console.log("Lowest:"+high[0].name,"("+high[0].marks+")");

let low=students.sort((a,b)=>a.marks-b.marks)
console.log("Lowest:"+low[0].name,"("+low[0].marks+")");

// 5️⃣ Filter Passing Students
// Use filter() to display students who passed (marks ≥ 40).

let pass=students.filter(p=>p.marks>=40)
console.log("Students Who Passed:");

pass.map(i=>{console.log(`${i.name}-${i.marks}`);})


// 6️⃣ Sort Students by Marks
// Use sort() to arrange students in descending order (highest → lowest).


let desecending=students.sort((a,b)=>b.marks-a.marks)
console.log("Students Sorted by Marks (High → Low):");
desecending.forEach(c=>{console.log(c.name+"-"+c.marks);
})

// 7️⃣ Display Top 3 Performers
// Use slice() to show the top 3 students based on marks.

let toptree=students.sort((a,b)=>b.marks-a.marks)
toptree.splice(3)
console.log("Top 3 Performers:");
toptree.forEach(d=>{console.log(d.name+"-"+d.marks);
})















 
  






