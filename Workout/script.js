const container = document.querySelector(".appendOuter");


async function muscleByExercise(querry) {
    const response = await fetch(`https://exercisedb-api.vercel.app/api/v1/muscles/${querry}/exercises`);
    result = await response.json();
    console.log(result);
    result.data.exercises.forEach(exercise => {
        // Create the exercise card div
        const exerciseCard = document.createElement("div");
        exerciseCard.classList.add("Hello");
        exerciseCard.classList.add("exercise-card");

        // Create the exercise name (h2)
        const exerciseName = document.createElement("h2");
        exerciseName.classList.add("exercise-name");
        exerciseName.textContent = exercise.name;

        // Create the instruction paragraph
        const instructionContainer = document.createElement("p");
        instructionContainer.classList.add("instruction");
        const instructionList = document.createElement("ul");
        const instructionHeader = document.createElement('p');
        instructionHeader.textContent = "INSTRUCTIONS !!";
        instructionList.appendChild(instructionHeader);

        // Loop through the instruction array and add each item as a list element
        exercise.instructions.forEach(step => {
            const listItem = document.createElement("li");
            listItem.textContent = step;
            instructionList.appendChild(listItem);
        });

        // Append the instruction list to the instruction container
        instructionContainer.appendChild(instructionList);


        // Create the target muscle paragraph
        const targetMuscle = document.createElement("p");
        targetMuscle.classList.add("target-muscle");
        targetMuscle.textContent = `Target Muscle: ${exercise.targetMuscles[0]}`;

        // Create the equipment paragraph
        const equipment = document.createElement("p");
        equipment.classList.add("equipment");
        equipment.textContent = `Equipment: ${exercise.equipments[0]}`;

        // Append all the elements to the exerciseCard
        exerciseCard.appendChild(exerciseName);
        exerciseCard.appendChild(instructionContainer);
        exerciseCard.appendChild(targetMuscle);
        exerciseCard.appendChild(equipment);

        // Append the exerciseCard to the container
        container.appendChild(exerciseCard);
    });

}

document.querySelectorAll(".bodymap").forEach((i) => {
    i.addEventListener("click", () => {
        container.innerHTML ="";
        querry = i.id;
        switch (query) {
            case 'calves':
                muscleByExercise('calves')
                break;
            case 'quadriceps':
                alert("Exercises for quadriceps:\n- Squats\n- Lunges\n- Leg Press");
                break;
            case 'hamstrings':
                alert("Exercises for hamstrings:\n- Deadlifts\n- Hamstring Curls\n- Glute Bridges");
                break;
            case 'abs':
                alert("Exercises for abs:\n- Crunches\n- Planks\n- Hanging Leg Raises");
                break;
            case 'biceps':
                alert("Exercises for biceps:\n- Bicep Curls\n- Hammer Curls\n- Concentration Curls");
                break;
            case 'triceps':
                alert("Exercises for triceps:\n- Tricep Dips\n- Overhead Tricep Extensions\n- Close-Grip Bench Press");
                break;
            case 'chest':
                alert("Exercises for chest:\n- Bench Press\n- Push-Ups\n- Chest Fly");
                break;
            case 'back':
                alert("Exercises for back:\n- Pull-Ups\n- Deadlifts\n- Rows");
                break;
            case 'shoulders':
                alert("Exercises for shoulders:\n- Overhead Press\n- Lateral Raises\n- Front Raises");
                break;
            case 'glutes':
                alert("Exercises for glutes:\n- Squats\n- Hip Thrusts\n- Bulgarian Split Squats");
                break;
            default:
                alert("No exercises available for this muscle group.");
        }
    })
})


