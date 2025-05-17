import React from 'react'

const SpreadOper = () => {
    const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]
    const arr3 = [7, 8, 9]
    const arr4 = [...arr1, ...arr2, ...arr3] // Spread operator

    console.log(arr4) // [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const obj1 = { name: 'John', age: 25 }
    const obj2 = { city: 'New York', country: 'USA' }
    const obj3 = { ...obj1, ...obj2 };

    console.log(obj3) // { name: 'John', age: 25, city: 'New York', country: 'USA' }
  return (
    <div>
      {obj3.name} {obj3.age} {obj3.city} {obj3.country}
    </div>
  )
}

export default SpreadOper
