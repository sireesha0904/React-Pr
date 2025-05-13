import React from 'react'
let student = [
  {
    name: "Sireesha",
    age: 21,
    branch: "CSE",
    city: "Parlakhemundi",
    country: "India",
  },
];
function ArrmapObj() {
  
  return (
    <div>
          <p>{ student.nameimport React from 'react'

let students = [
  {
    name: "Sireesha",
    age: 21,
    branch: "CSE",
    city: "Parlakhemundi",
    country: "India",
  },
];

function ArrmapObj() {
  return (
    <div>
      {students.map((student, index) => (
        <div key={index}>
          <p>{student.name}</p>
          <p>Age: {student.age}</p>
          <p>Branch: {student.branch}</p>
          <p>City: {student.city}</p>
          <p>Country: {student.country}</p>
        </div>
      ))}
    </div>
  )
}

export default ArrmapObj}</p>
    </div>
  )
}

export default ArrmapObj
