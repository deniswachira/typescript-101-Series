export const variables = () => {

    // Challenge 1: Fix the Type Safety Issue

    // Fix this function to avoid using 'any'
    function processInput(input: string):string {
        return input.toUpperCase(); // ❌ This may break if input is not a string
    }

    console.log(processInput("typescript"));
    // console.log(processInput(100)); // ❌ Error


    // Challenge 2: Type-Check Before Use
    let userResponse: unknown;

    // Assign a value (try changing the type)
    userResponse = 42;

    // Convert to number only if it's a number
    let result: number | null = typeof userResponse === "number" ? userResponse * 2 : null;
    console.log(result);
    // Challenge 3: Logging Function
    // Create a function logMessage that takes a message and logs it
    function logMessage(message: string) {
        console.log(message);
    }
    logMessage("Hello TypeScript!"); // Should log to console



    // Challenge 4: Create an Error-Throwing Function
    // Write a function that throws an error if a user is not logged in
    function checkLogin(isLoggedIn: boolean) {
        if (!isLoggedIn) {
            throw new Error("User is not logged in!");
        }
        console.log("User is logged in.");
    }
    
    try {
        checkLogin(false); 
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
    




};