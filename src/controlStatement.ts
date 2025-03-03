export const controlStatement = () => {
    //if
    let age1 = 20;

    if (age1 >= 18) {
        console.log("You are allowed to enter.");
    }


    //if else
    let age: number = 19;
    if (age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }

    let isLoggedIn:boolean = false;

    if (isLoggedIn) {
        console.log("Welcome back, user!");
    } else {
        console.log("Please log in to continue.");
    }

    // if-else if
    // A grading system assigns letter grades based on marks.
    let marks: number = 65;
    let grade: string;
    if (marks >= 90) {
        grade = "A";
    } else if (marks >= 80) {
        grade = "B";
    } else if (marks >= 70) {
        grade = "C";
    } else if (marks >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    console.log(grade); // D


    let userRole1 = "Editor";

    if (userRole1 === "Admin") {
      console.log("Access: Full control");
    } else if (userRole1 === "Editor") {
      console.log("Access: Edit content");
    } else if (userRole1 === "Viewer") {
      console.log("Access: Read-only");
    } else {
      console.log("Access Denied!");
    }



    //switch    
    let day:string = "Monday";

    switch (day) {
        case "Monday":
            console.log("Start of the workweek! 🚀");
            break;
        case "Friday":
            console.log("Weekend is near! 🎉");
            break;
        case "Saturday":
        case "Sunday":
            console.log("Enjoy your weekend! 🌴");
            break;
        default:
            console.log("Just another regular day. ⏳");
    }

    // switch with Enums
    enum Role {
        Admin = "Admin",
        Editor = "Editor",
        Viewer = "Viewer",
      }
      
      let userRole: string = Role.Editor;
      
      switch (userRole) {
        case Role.Admin:
          console.log("Access: Full control 🛠️");
          break;
        case Role.Editor:
          console.log("Access: Edit content ✏️");
          break;
        case Role.Viewer:
          console.log("Access: Read-only 👀");
          break;
        default:
          console.log("Access Denied ❌");
      }
      
      





}