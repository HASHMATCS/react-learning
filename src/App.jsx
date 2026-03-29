// import React, { useState } from "react"

// const App = () => {
//   const [grades, setGrades] = useState([
//     {id:1,marks:40,course:"Maths"}, 
//     {id:2,marks:50,course:"Science"},
//     {id:3,marks:60,course:"English"},
//     {id:4,marks:70,course:"History"},

//   ]);

//   const increment = (index) => {
//     const newGrades = [...grades];
//     newGrades[index].marks += 1;
//     setGrades(newGrades);
//   }

//   const decrement = (index) => {
//     const newGrades = [...grades];
//     newGrades[index].marks--;
//     setGrades(newGrades);
//   } 

// const onSelected = (id) => {
// const copyGrades = [...grades];
// const course= copyGrades.find(grade => grade.id === id);
// if(!course.selected){
//   course.selected = true;
//   setGrades(copyGrades);
// }


// }

//   return (
//     <div className="container mx-auto min-h-screen bg-gray-100 p-4">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold text-center text-gray-800 my-6">
//           Grade Management
//         </h1>
        
//         <div className="space-y-4">
//           {grades.map((grade, index) => (
//             <div 
//               key={grade.id}
//               className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between hover:shadow-lg transition-shadow duration-200"
//             >
//               {/* Course Info */}
//               <div className="flex-1">
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   {grade.course}
//                 </h2>
//                 <div className="mt-1 flex items-center">
//                   <span className={`text-lg font-bold ${
//                     grade.marks >= 70 ? 'text-green-600' : 
//                     grade.marks >= 50 ? 'text-yellow-600' : 'text-red-600'
//                   }`}>
//                     {grade.marks} marks
//                   </span>
//                   <span className="ml-4 text-sm text-gray-500">
//                     ID: {grade.id}
//                   </span>
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex items-center space-x-3">
//                 <button 
//                   onClick={() => decrement(index)}
//                   className="bg-red-100 text-red-600 hover:bg-red-200 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl"
//                 >
//                   -
//                 </button>
                
//                 <span className="text-gray-700 font-medium min-w-[40px] text-center">
//                   {grade.marks}
//                 </span>
                
//                 <button 
//                   onClick={() => increment(index)}
//                   className="bg-green-100 text-green-600 hover:bg-green-200 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl"
//                 >
//                   +
//                 </button>
                
//                 <button 
//                   onClick={() => onSelected(grade.id)}
//                   className="ml-4 bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600 px-4 py-2 rounded-md transition-colors duration-200"
//                 >
//                   seleted
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
// <hr />

// <h6>seletd courese </h6>
// <div>

//     {grades.filter(grade => grade.selected).map((grade, index) => (
//             <div 
//               key={grade.id}
//               className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between hover:shadow-lg transition-shadow duration-200"
//             >
//               {/* Course Info */}
//               <div className="flex-1">
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   {grade.course}
//                 </h2>
//                 <div className="mt-1 flex items-center">
//                   <span className={`text-lg font-bold ${
//                     grade.marks >= 70 ? 'text-green-600' : 
//                     grade.marks >= 50 ? 'text-yellow-600' : 'text-red-600'
//                   }`}>
//                     {grade.marks} marks
//                   </span>
//                   <span className="ml-4 text-sm text-gray-500">
//                     ID: {grade.id}
//                   </span>
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex items-center space-x-3">
//                 <button 
//                   onClick={() => decrement(index)}
//                   className="bg-red-100 text-red-600 hover:bg-red-200 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl"
//                 >
//                   -
//                 </button>
                
//                 <span className="text-gray-700 font-medium min-w-[40px] text-center">
//                   {grade.marks}
//                 </span>
                
//                 <button 
//                   onClick={() => increment(index)}
//                   className="bg-green-100 text-green-600 hover:bg-green-200 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl"
//                 >
//                   +
//                 </button>
                
//                 <button 
//                   onClick={() => onSelected(grade.id)}
//                   className="ml-4 bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600 px-4 py-2 rounded-md transition-colors duration-200"
//                 >
//                   seleted
//                 </button>
//               </div>
//             </div>
//           ))}
// </div>

//       </div>
//     </div>
//   )
// }

// export default App


// // import React, { useState } from "react"

// // const App = () => {
// //   const [grades, setGrades] = useState([
// //     {id:1,marks:40,course:"Maths"}, 
// //     {id:2,marks:50,course:"Science"},
// //     {id:3,marks:60,course:"English"},
// //     {id:4,marks:70,course:"History"},

// //   ]);

// //   const increment = (index) => {
// //     const newGrades = [...grades];
// //     newGrades[index].marks += 1;
// //     setGrades(newGrades);
// //   }

// //   const decrement = (index) => {
// //     const newGrades = [...grades];
// //     newGrades[index].marks--;
// //     setGrades(newGrades);
// //   } 



// //   return (
// //     <div className="container mx-auto min-h-screen bg-gray-100 p-4">
// //       <div className="max-w-4xl mx-auto">
// //         <h1 className="text-3xl font-bold text-center text-gray-800 my-6">
// //           Grade Management
// //         </h1>
        
// //         <div className="space-y-4">
// //           {grades.map((grade, index) => (
// //             <div 
// //               key={grade.id}
// //               className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between hover:shadow-lg transition-shadow duration-200"
// //             >
// //               {/* Course Info */}
// //               <div className="flex-1">
// //                 <h2 className="text-xl font-semibold text-gray-800">
// //                   {grade.course}
// //                 </h2>
// //                 <div className="mt-1 flex items-center">
// //                   <span className={`text-lg font-bold ${
// //                     grade.marks >= 70 ? 'text-green-600' : 
// //                     grade.marks >= 50 ? 'text-yellow-600' : 'text-red-600'
// //                   }`}>
// //                     {grade.marks} marks
// //                   </span>
// //                   <span className="ml-4 text-sm text-gray-500">
// //                     ID: {grade.id}
// //                   </span>
// //                 </div>
// //               </div>

// //               {/* Action Buttons */}
// //               <div className="flex items-center space-x-3">
// //                 <button 
// //                   onClick={() => decrement(index)}
// //                   className="bg-red-100 text-red-600 hover:bg-red-200 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl"
// //                 >
// //                   -
// //                 </button>
                
// //                 <span className="text-gray-700 font-medium min-w-[40px] text-center">
// //                   {grade.marks}
// //                 </span>
                
// //                 <button 
// //                   onClick={() => increment(index)}
// //                   className="bg-green-100 text-green-600 hover:bg-green-200 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl"
// //                 >
// //                   +
// //                 </button>
                
// //                 <button 
// //                   onClick={() => setGrades(grades.filter(g => g.id !== grade.id))}
// //                   className="ml-4 bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600 px-4 py-2 rounded-md transition-colors duration-200"
// //                 >
// //                   Delete
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// // <hr />

// // <h3></h3>
// //       </div>
// //     </div>
// //   )
// // }

// // export default App


// // import React, { useState } from "react"

// // const App = () => {
// //   const [grades, setGrades] = useState([
// //     {id:1,marks:40,course:"Maths"}, 
// //     {id:2,marks:50,course:"Science"},
// //     {id:3,marks:60,course:"English"},
// //     {id:4,marks:70,course:"History"},
// //     {id:5,marks:80,course:"Geography"},
// //     {id:6,marks:90,course:"Physics"},
// //     {id:7,marks:100,course:"Chemistry"},
// //     {id:8,marks:110,course:"Biology"},
// //     {id:9,marks:120,course:"Computer Science"}
// //   ]);

// //   const increment = (index) => {
// //     const newGrades = [...grades];
// //     newGrades[index].marks += 1;
// //     setGrades(newGrades);
// //   }

// //   const decrement = (index) => {
// //     const newGrades = [...grades];
// //     newGrades[index].marks--;
// //     setGrades(newGrades);
// //   } 

// //   const deleteCourse = (id) => {
// //     const newGrades = grades.filter(grade => grade.id !== id);
// //     setGrades(newGrades);
// //   }

// //   return (
// //     <div className="container mx-auto min-h-screen bg-gray-100 p-4">
// //       <div className="max-w-4xl mx-auto">
// //         <h1 className="text-3xl font-bold text-center text-gray-800 my-6">
// //           Grade Management
// //         </h1>
        
// //         <div className="space-y-4">
// //           {grades.map((grade, index) => (
// //             <div 
// //               key={grade.id}
// //               className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between hover:shadow-lg transition-shadow duration-200"
// //             >
// //               {/* Course Info */}
// //               <div className="flex-1">
// //                 <h2 className="text-xl font-semibold text-gray-800">
// //                   {grade.course}
// //                 </h2>
// //                 <div className="mt-1 flex items-center">
// //                   <span className={`text-lg font-bold ${
// //                     grade.marks >= 70 ? 'text-green-600' : 
// //                     grade.marks >= 50 ? 'text-yellow-600' : 'text-red-600'
// //                   }`}>
// //                     {grade.marks} marks
// //                   </span>
// //                   <span className="ml-4 text-sm text-gray-500">
// //                     ID: {grade.id}
// //                   </span>
// //                 </div>
// //               </div>

// //               {/* Action Buttons */}
// //               <div className="flex items-center space-x-3">
// //                 <button 
// //                   onClick={() => decrement(index)}
// //                   className="bg-red-100 text-red-600 hover:bg-red-200 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl"
// //                 >
// //                   -
// //                 </button>
                
// //                 <span className="text-gray-700 font-medium min-w-[40px] text-center">
// //                   {grade.marks}
// //                 </span>
                
// //                 <button 
// //                   onClick={() => increment(index)}
// //                   className="bg-green-100 text-green-600 hover:bg-green-200 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl"
// //                 >
// //                   +
// //                 </button>
                
// //                 <button 
// //                   onClick={() => deleteCourse(grade.id)}
// //                   className="ml-4 bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600 px-4 py-2 rounded-md transition-colors duration-200"
// //                 >
// //                   Delete
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// // <hr />

// // <h3></h3>
// //       </div>
// //     </div>
// //   )
// // }

// // export default App

// // import React, { useState } from 'react';
// // // import { products } from './data/products';
// // import Header from './Components/Header';
// // import Card from './Components/Card';
// // import Welcome from './Components/Welcome';

// // function App() {
  
// // const [marks, setMarkes] = useState([56, 78, 90, 45, 67]);
// // const increment = (index) => {
// // const newMarks = [...marks];
// // newMarks[index] += 1;
// // setMarkes(newMarks);
// // //

// // };
// // const decrement = (index) => {
// //   const newMarks = [...marks];
// //   newMarks[index] -= 1;
// //   setMarkes(newMarks);
// //  //
 
// // };
// //   return (  
// //     <>
// //    {/* <Header />
// //       <div className=" mt-4 row row-cols-1 row-cols-md-4 g-4">
// //         {products.map((product) => (
// //         <Card product={product} />

// //         ))}

// //       </div> */}

// //               {/* <Welcome name="Alice" age={25} />
// //         <Welcome age={18} />
// //         <Welcome name="Bob" age={30} />
// //         <Welcome age={22} /> */}



// // <div className='container my-3'> 
// // {marks.map((mark, index) => (

// // <div key={index} className='mb-3'>
// //    <button onClick={()=>increment(index)}>+</button>
// //   <span>{mark} {mark > 50 ? "You're doing great!" : "Keep going!"}</span>
// //   <button onClick={()=>decrement(index)}>-</button>
// // </div>



// // ))}


// // </div>




// //     </>
// //   );
// // }

// // export default App;

// //just show the all marks with increment and decrement button
// // import React,{ useState } from "react"


// // const App = () => {

// //   const [grades, setGrades] = useState([
// //     {id:1,marks:40,course:"Maths"}, 
// //     {id:2,marks:50,course:"Science"},
// //     {id:3,marks:60,course:"English"},
// //     {id:4,marks:70,course:"History"},
// //     {id:5,marks:80,course:"Geography"},
// //     {id:6,marks:90,course:"Physics"},
// //     {id:7,marks:100,course:"Chemistry"},
// //     {id:8,marks:110,course:"Biology"},
// //     {id:9,marks:120,course:"Computer Science"}]);

// //   const increment = (index) => {
// //     const newGrades = [...grades];
// //     newGrades[index].marks += 1;
// //     setGrades(newGrades);
// //   }

// //   const decrement = (index) => {
// //     const newGrades = [...grades];
// //     newGrades[index].marks --;
// //     setGrades(newGrades);
// //   } 

// //   return (
// //   <>
// // <div className="container my-3">

// //   {grades.map((grade, index) => ( 
// //     <div key={grades}>


// //       <button onClick={() => increment(index)}>+</button>


// //       <h2>{grade.marks} marks in  {grade.course} </h2>


// //       <button onClick={() => decrement(index)}>-</button>




// //     </div>
// //   ))}
// // </div>


// // </>
// //   )
// // }

// // export default App




import React from 'react'
import Props from './Props'
const App  = () => {

  // passing function as a props with parameter  
  const increment = (name) => {
    console.log(name);
    return name;

  }
  return (
    <div>
     <Props increment1={()=>increment("do")}/>
    </div>
  )
}

export default App