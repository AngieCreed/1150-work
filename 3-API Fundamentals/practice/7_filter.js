// const instructors = [
//     {name: 'Quincy', specialty: 'Quantum Mechanics', medals: 7},
//     {name: 'Kenn', specialty: 'Norse Mythology', medals: 5},
//     {name: 'Paul', specialty: 'Tuvan throat singing', medals: 8},
//     {name: 'Aaron', specialty: 'Entomology', medals: 4},
//     {name: 'Carolyn', specialty: 'Kung Fu', medals: 2},
//     {name: 'Tom', specialty: 'Chemistry', medals: 3},
//    ]

//    let instructor_names = [];
//    for (let i = 0; i < instructors.length; i++) {
//        if(instructors[i]. medals >= 5) {
//            instructor_names.push(instructors[i].name);
//        }
//    }
//    console.log(instructor_names);


//    const instructorNames = instructors.filter(instructor => instructor.medals >= 5);
//    console.log(instructorNames);

   //Exact same thing, different parameter name 
// const instructorNamesTwo = instructors.filter(i => i.medals >= 5);
// console.log(instructorNames);

// const instructorInfo = instructors.filter(instructor => instructor.name ==='Aaron');
// console.log(instructorInfo);


let people = [
    {name: "Paul", title: "Instructor"},
    {name: "Carolyn", title: "Instructor"},
    {name: "Tyler", title: "Instructor"},
    {name: "David", title: "Instructor"},
    {name: "Kenn", title: "Instructor"},
    {name: "Tom", title: "Instructor"},
    {name: "Quentin", title: "Student"},
    {name: "Aurelia", title: "Student"},
    {name: "Hope", title: "Student"},
    {name: "Caleb", title: "Student"},
    {name: "Daniel", title: "Student"},
    {name: "Austin", title: "Student"},
    {name: "Robin", title: "Admin"},
    {name: "Alex", title: "Admin"},
    {name: "Bob", title: "Admin"},
    {name: "Chris", title: "Admin"},
    {name: "Abi", title: "Admin"}
  ]
let results = (arr, str) => arr.filter(person => person.title === str)
console.log(results(people, 'Instructor'))


  
//   let newArray=[];

//   for (let p of people) => {
//       if people.title === 'Instructor' {
//           newArray.push
//       }
//   }


//   let instructor_info = newArray.filter(instructor => instructor.title ==='Instructor');
//   console.log(instructor_info)