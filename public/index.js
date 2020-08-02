init();

// AS long as workout db is not empty, retrieve the last workout
// and add ?id=workoutid to the url

// Looks like it runs upon page load

async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none");
    }
  }
}
