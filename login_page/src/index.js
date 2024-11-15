const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const collection = require("./mongodb"); // Correct filename if needed

// Setting up the path to the templates folder
const templatePath = path.join(__dirname, '../templates');

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setting up the view engine and views folder
app.set("view engine", "hbs");
app.set("views", templatePath);

// Route to render login page
app.get("/", (request, response) => {
    response.render("login");
});

// Route to render signup page
app.get("/signup", (request, response) => {
    response.render("signup");
});

// Route to handle signup form submission
app.post("/signup", async (request, response) => {
    try {
        // Creating a data object from the request body
        const data = {
            name: request.body.name,
            password: request.body.password,
        };

        console.log("Data received from form:", data);

        // Use create method to insert data
        await collection.create(data);

        console.log("Data inserted into MongoDB:", data);

        // Render the home page after successful signup
        response.render("home");
    } catch (error) {
        console.error("Error during signup:", error);
        response.status(500).send("Signup failed");
    }
});




// Listening on port 3000
app.listen(3000, () => {
    console.log("Port connected");
});
