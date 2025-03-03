export const controlStatement = () => {
    // for(initialization; condition; statement){
    //     //Block of statements 
    //    }
    //for loop
    for (let i = 0; i < 5; i++) {
        console.log(`Iteration ${i}`);
    }
    //for loop with array
    let products: string[] = ["Laptop", "Phone", "Tablet"];

    for (let i = 0; i < products.length; i++) {
        console.log(`Product ${i + 1}: ${products[i]}`);

    }

    //for in loop
    let user = { name: "Dennis", age: 25, role: "Developer" };

    for (let key in user) {
        console.log(`${key}: ${user[key as keyof typeof user]}`);
    }


    //while loop


    let i: number = 1;
    while (i <= 5) {
        console.log(`Iteration ${i}`);
        i++;
    }
    //countdown
    let countdown = 5;

    while (countdown > 0) {
        console.log(`Countdown: ${countdown}`);
        countdown--;
    }

    console.log("🚀 Lift-off!");


    //do while loop

    let j: number = 1;
    do {
        console.log(`Iteration ${j}`);
        j++;
    } while (j <= 5);

    // Keep asking for a valid username until the user provides one.
    let username: string | null;
    do {
        username = prompt("Enter your username:");
    }
    while (!username);

    console.log(`Welcome, ${username}!`);


}