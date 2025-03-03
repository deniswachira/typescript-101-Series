export const unionIntersection = () => {

  let value: string | number;

  value = "Hello";  // ✅ Allowed
  value = 42;       // ✅ Allowed
  // value = true // ❌ Error: Type 'boolean' is not assignable to type 'string | number'

  type SuccessRepsponse = {
    userId: number;
    username: string;
  }

  type ErrorResponse = {
    errorCode: number;
    message: string;
  }

  function fetchUser(): SuccessRepsponse | ErrorResponse {
    return Math.random() > 0.5 ? { userId: 1, username: "admin" } : { errorCode: 404, message: "User not found" };
  }


  type User1 = { username: string; email: string };
  type Admin = { permissions: string[] };

  type SuperUser = User1 & Admin;

  let adminUser: SuperUser = {
    username: "Dennis",
    email: "dennis@example.com",
    permissions: ["create", "delete", "update", "read"]
  };








  interface Person {
    name: string;
    age: number;
  }

  interface Employee {
    employeeId: number;
  }

  type Worker = Person & Employee;

  let worker: Worker = {
    name: "Alice",
    age: 25,
    employeeId: 1234,
  };

  interface User {
    name: string;
    age: number;
    isAdmin?: boolean; // Optional property
  }

  let user: User = { name: "John", age: 30 };
  console.log(user.name); // Output: John

  interface Animal {
    name: string;
  }

  interface Dog extends Animal {
    bark(): void;
  }

  let myDog: Dog = {
    name: "Buddy",
    bark() {
      console.log("Woof!");
    },
  };

  myDog.bark(); // Output: Woof!



  type Status = "loading" | "success" | "error";
  let requestStatus: Status = "loading"; // ✅ Valid

  enum HttpStatus {
    OK = 200,
    NotFound = 404,
    InternalServerError = 500
  }
  
  function handleResponse(status: HttpStatus) {
    if (status === HttpStatus.OK) {
      console.log("Success!");
    } else if (status === HttpStatus.NotFound) {
      console.log("Resource not found.");
    }
  }
  
  handleResponse(HttpStatus.OK);
  



}