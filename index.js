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

function createClass(str) {
  return school.push({ name: str, students: [] });
}

// * create student function which takes argument(object) holds class ID and the student data
// ```js
//   {
//         name: "Pilar",
//         email: "pilar@yahoo.com",
//         city: "Berlin",
//   }
//  ```

function createStudent(classID, studentID) {
  return school[classID - 1].students[studentID - 1];
}

//  * create removeClass function which takes ID and remove class by ID

function idDelete(classID) {
  return delete school[classID - 1];
}

//  * create removeStudent function which takes argument(object) holds class ID and the student ID

function removeStudent(classID, studentID) {
  let thisClass = school[classID - 1];
  let studentRemove = thisClass.students[studentID - 1];
  delete studentRemove;
}

// * create editStudent function which takes argument(object) with holds class ID and the student ID

function editStudent(classID, studentID) {
  let thisClass = school[classID - 1];
  let studentAdding = thisClass.students[studentID - 1];
  return studentAdding;
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

function finalTemplate() {
  let totalStudents = 0;

  for (let classObj of school) {
    totalStudents += classObj.students.length;

    if (classObj.students.length === 0) {
      console.log(`class is empty`);
      continue;
    }
    console.log(
      `${classObj.name} - (class ID: ${school.indexOf(classObj) + 1})`
    );
    console.log(
      `Total classes ${classObj.name.length} total students ${classObj.students.length}`
    );
  }
}

finalTemplate();
