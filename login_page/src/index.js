const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const collection = require("./mongodb"); // Import the Mongoose model

// Setting up the path to the templates folder
const templatePath = path.join(__dirname, '../templates');

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setting up the view engine and views folder
app.set("view engine", "hbs");
app.set("views", templatePath);

// Route to render login page
app.get("/login", (request, response) => {
    response.render("login");
});
// Route to handle login form submission
app.post("/login", async (request, response) => {
    try {
        const { name, password } = request.body;

        console.log("Data received from login form:", request.body);  // Debugging log

        // Find a user with the matching name and password
        const user = await collection.findOne({ name: name, password: password });

        if (user) {
            // If user found, login successful
            console.log("User found:", user);
            response.render("home", { users: [user] });  // Render home page with user data
        } else {
            // If user not found, send login failed message
            console.log("User not found");
            response.status(401).send("Invalid credentials");
        }
    } catch (error) {
        console.error("Error during login:", error);
        response.status(500).send("Error during login");
    }
});


// Route to render signup page
app.get("/signup", (request, response) => {
    response.render("signup");
});

// Route to handle signup form submission
// Route to handle signup form submission
app.post("/signup", async (request, response) => {
    try {
        const data = {
            name: request.body.name,
            password: request.body.password,
        };

        console.log("Data received from form:", request.body); // Add this line for debugging

        // Check if the user already exists
        const existingUser = await collection.findOne({ name: data.name });

        if (existingUser) {
            // If user exists, send an error message or redirect to a page
            return response.status(400).send("User already exists. Please choose a different name.");
        }

        // If user does not exist, insert the new user
        const result = await collection.create(data);

        console.log("Data inserted into MongoDB:", result); // Log the result for debugging

        // After successful signup, redirect to /home page
        response.redirect("/home");
    } catch (error) {
        console.error("Error during signup:", error); // Log the error
        response.status(500).send("Signup failed");
    }
});
// Route to show all data in the home page
app.get("/home", async (request, response) => {
    try {
        // Fetch all data from MongoDB using Mongoose model
        const allUsers = await collection.find().exec();
        console.log("All Users:", allUsers); // Log data for debugging

        // Pass the data to the home view
        response.render("home", { users: allUsers });
    } catch (error) {
        console.error("Error fetching data:", error);
        response.status(500).send("Error fetching data");
    }
});


// Listening on port 3000
app.listen(3000, () => {
    console.log("Port connected");
});
