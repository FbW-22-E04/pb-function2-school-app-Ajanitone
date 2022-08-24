// ### School app
// * create app to add, remove, read and edit Students and Classes in a School
console.clear();
const school = [
  {
    name: "FbW1",
    students: [
      {
        name: "Alex",
        email: "alex@yahoo.com",
        city: "Berlin",
      },
      {
        name: "Max",
        email: "max@yahoo.com",
        city: "Hamburg",
      },
    ],
  },

  {
    name: "FbW2",
    students: [
      {
        name: "Jon",
        email: "jon@yahoo.com",
        city: "Berlin",
      },
      {
        name: "Pilar",
        email: "pilar@yahoo.com",
        city: "Berlin",
      },
    ],
  },
  {
    name: "FbW3",
    students: [],
  },
];

// ### Tasks
// ## App Functions

// * Functions arguments ==>  Passing one single  object as argument holds all the arguments.

// * createClass function which takes argument(object) holds class name

function createClass(obj) {
  object.students = [];
  return school.push(obj);
}

// * create student function which takes argument(object) holds class ID and the student data
// ```js
//   {
//         name: "Pilar",
//         email: "pilar@yahoo.com",
//         city: "Berlin",
//   }
//  ```

function createStudent(object) {
  const idx = school.findIndex((item) => item.name === object.class);
  const student = object.data;
  school[idx].students.push(student);
}

//  * create removeClass function which takes ID and remove class by ID

function removeClass(object) {
  const idx = school.findIndex((item) => item.name === object.name);

  school.splice(idx, 1);
}

//  * create removeStudent function which takes argument(object) holds class ID and the student ID

function removeStudent(object) {
  const idx = school.findIndex((item) => item.name === object.name);

  const studentIdx = school[idx].students.findIndex(
    (item) => item.email === object.email
  );

  school[idx].students.splice(studentIdx, 1);
}

// * create editStudent function which takes argument(object) with holds class ID and the student ID

function editStudent(object) {
  const idx = school.findIndex((item) => item.name === object.name);
  if (idx === -1) return;
  const studentIdx = school[idx].students.findIndex(
    (item) => item.email === object.email
  );
  if (studentIdx === -1) return;
  school[idx].students[studentIdx] = { ...object.data };
}

// ```js
// editStudent ==> info name, email and city.
// ```

// * create function call RenderSchoolTemplate
// * This function Format and render school data

// ## Final Template
// ```js
//  School Classes:
// ------------------
//  FbW1 - (class ID: 1):
//   1- Alex, alex@yahoo.com, Berlin - (student ID: 1).
//   2- Max, max@yahoo.com, Hamburg - (student ID: 2).
// ********************************************
//  FbW2 - (class ID: 2):
//   1- Jon, jon@yahoo.com, Berlin - (student ID: 1).
//   2- Pilar, pilar@yahoo.com, Berlin - (student ID: 2).
// ********************************************
//  FbW3 - (class ID: 3):
//    The class is empty
// ********************************************
//   Total Classes 3, total students 4
// ```

// function finalTemplate() {
//   let totalStudents = 0;

//   for (let classObj of school) {
//     totalStudents += classObj.students.length;

//     if (classObj.students.length === 0) {
//       console.log(`class is empty`);
//       continue;
//     }
//     console.log(
//       `${classObj.name} - (class ID: ${school.indexOf(classObj) + 1})`
//     );
//     console.log(
//       `Total classes ${classObj.name.length} total students ${classObj.students.length}`
//     );
//   }
// }

function RenderSchoolTemplate() {
  console.log("--------------------------------------------");
  for (let i = 0; i < school.length; i++) {
    console.log(` ${school[i].name} -( class ID: ${i + 1}):`);
  }

  for (j = 0; j < school[j].students.length; j++) {
    const name = school[j].students[j].name;
    const email = school[j].students[j].email;
    const city = school[j].students[j].city;
    console.log(
      `${j + 1}- ${name}, ${email}, ${city} -( student ID: ${j + 1}).`
    );
  }
}

RenderSchoolTemplate();
