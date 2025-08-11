interface teacher {
readonly firstName: string;
readonly lastName: string;
fullTimeEmployee: boolean;
yearsOfExperience?: number;
location: string;
[key:string] : any;
}

//example usage 1 :
const teacher3: teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"

interface Directors extends teacher {
    numberOfReports: number;
}

//example usage 2 :
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17

// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementation of the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage 3:
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Interface describing the class instance methods
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Interface describing the constructor signature
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

// Class implementation
class StudentClass implements StudentInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage 4 :
const student1 = new StudentClass("Alice", "Johnson");
console.log(student1.displayName());      // Output: Alice
console.log(student1.workOnHomework());   // Output: Currently working
