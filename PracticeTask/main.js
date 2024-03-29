let userRole = "Employee";
let accessLevel;

if (userRole === "Employee") {
    console.log("Full access granted for dietary services") 
} else if (userRole === "Enrolled") {
    console.log("Full access granted for dietary and one-on-one interaction")
} else if (userRole === "subscriber") {
    console.log("Partial access granted for dietary services") 
} else {
    console.log("You need to enroll at least as a subscriber")
}

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "Employee") {
        userMessage = "Welcome, Employee";
    } else if (userRole === "Enrolled"){
        userMessage = "Welcome, Member";
    } else if (userRole === "subscriber") {
        userMessage = "Welcome, Subscriber";
    }
} else {
    console.log("Please log in to access the service")
}

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication status is ", authenticationStatus);