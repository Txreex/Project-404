// const fetch = require("node-fetch");
let data;
async function muscleByExercise() {
    const response = await fetch(`https://exercisedb-api.vercel.app/api/v1/muscles/upper%20back/exercises`);
    data = await response.json();
    return data;
}
muscleByExercise();
console.log(data);
// exercise();
// muscle();
// image();