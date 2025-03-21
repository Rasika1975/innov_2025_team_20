function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

document.getElementById('workoutForm').addEventListener('submit', function(e) {
    e.preventDefault();
    addWorkout();
});

function addWorkout() {
    const workout = {
        exercise: document.getElementById('exercise').value,
        sets: document.getElementById('sets').value,
        reps: document.getElementById('reps').value,
        weight: document.getElementById('weight').value
    };

    const workoutCard = createWorkoutCard(workout);
    document.getElementById('workoutList').appendChild(workoutCard);
    document.getElementById('workoutForm').reset();
}

function createWorkoutCard(workout) {
    const card = document.createElement('div');
    card.className = 'workout-card';
    card.innerHTML = `
        <h3>${workout.exercise}</h3>
        <p>Sets: ${workout.sets}</p>
        <p>Reps: ${workout.reps}</p>
        <p>Weight: ${workout.weight} kg</p>
        <button class="delete-btn" onclick="this.parentElement.remove()">Delete</button>
    `;
    return card;
}