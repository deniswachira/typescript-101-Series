export const variables = () => {
    // Challenge 1: Fix the Type Safety Issue

    // Fix this function to avoid using 'any'
    function processInput(input: string): string {
        return input.toUpperCase();
    }

    console.log(processInput("typescript"));
    // console.log(processInput(100)); // ❌ Type error at compile-time

    // Challenge 2: Type-Check Before Use
    let userResponse: unknown;

    // Assign a value (try changing the type)
    userResponse = 42;

    let result: number;

    if (typeof userResponse === "number") {
        result = userResponse * 2;
        console.log(result);
    } else {
        console.log("userResponse is not a number.");
    }

    // Challenge 3: Logging Function
    // Create a function logMessage that takes a message and logs it
    function logMessage(message: string): void {
        console.log(message);
    }

    logMessage("Hello TypeScript!"); // Should log to console

    // Challenge 4: Create an Error-Throwing Function
    // Write a function that throws an error if a user is not logged in
    function checkLogin(isLoggedIn: boolean): void {
        if (!isLoggedIn) {
            throw new Error("User is not logged in!");
        }
    }

    // Test: Uncommenting the line below will throw an error
    // checkLogin(false);
};
