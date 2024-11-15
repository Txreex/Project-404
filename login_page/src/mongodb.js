const mongoose = require("mongoose");

// Connect to MongoDB without deprecated options
mongoose.connect(`mongodb://localhost:27017/Project-404`)
.then(() => {
    console.log("MongoDB connected");
})
.catch((error) => {
    console.log("Connection failed:", error);
});

// Defining the schema for login
const logInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    password: {
        type: String,
        required: true 
    }
});

// Creating a model for the 'Collection1' collection using logInSchema
const collection = mongoose.model("Collection1", logInSchema);

// Exporting the collection to use in other files
module.exports = collection;
