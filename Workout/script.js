async function muscleByExercise(querry) {
    const response = await fetch(`https://exercisedb-api.vercel.app/api/v1/muscles/${querry}/exercises`);
    data = await response.json();
    console.log(data);
}
// muscleByExercise("calves");

