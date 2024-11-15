const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Project-404', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log("Connection failed:", error));

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

// Creating a model for the 'Collection1' collection
const collection = mongoose.model("Collection1", logInSchema);

// Export the collection (Mongoose model)
module.exports = collection;
