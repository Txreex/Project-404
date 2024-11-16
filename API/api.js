async function muscleByExercise(querry) {
    const response = await fetch(`https://exercisedb.io/api/v1/exercises?muscle=${querry}`);
    data = await response.json();
    return data;
}

muscleByExercise("calves")
