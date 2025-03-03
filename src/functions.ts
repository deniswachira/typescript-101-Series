export const functions = () => {
    //function syntax


    // function functionName(parameter1: type, parameter2: type): returnType {

        // function body 
        // code to be executed
        // return value;
    // }

    //example

    function add(x: number, y: number): number {
        return x + y;
    }

    //function expression

    // const add = function (x: number, y: number): number {
    //     return x + y;
    // }

    //arrow function
    const add2 = (a: number, b: number): number => a + b;
    console.log(add(5, 10)); // 15


    // optional or default parameters
    function greet(name: string, greeting: string = "Hello"): string {
        return `${greeting}, ${name}!`;
    }

    //function OverLoading
    // Function Overloading is a concept of having two or more functions with the same name but with different signatures.
    // function add3(x: number, y: number): number;
    // function add4(x: string, y: string): string;
    // function add5(x: any, y: any): any {
    //     return x + y;
    // }

    //callback function
    function processUserInput(name: string, callback: (message: string) => void) {
        let greeting = `Hello, ${name}!`;
        callback(greeting);
      }
      
      // Passing a function as a callback
      processUserInput("Dennis", (message) => console.log(message));
      

      function fetchData(callback: (data: string) => void) {
        console.log("Fetching data...");
      
        setTimeout(() => {
          callback("Data loaded successfully!");
        }, 2000); // Simulating a delay
      }
      
      fetchData((message) => console.log(message));

      //Callbacks with Multiple Arguments
      function mathOperation(a: number, b: number, callback: (result: number) => void) {
        let sum = a + b;
        callback(sum);
      }
      
      mathOperation(5, 10, (result) => console.log("Sum:", result)); // Sum: 15
      
      

}