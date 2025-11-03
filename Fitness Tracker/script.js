document.addEventListener("DOMContentLoaded", function () {
  let steps = parseInt(localStorage.getItem("steps")) || 0;
  let calories = parseInt(localStorage.getItem("calories")) || 0;
  let goal = parseInt(localStorage.getItem("goal")) || 10000;

  function updateUI() {
    document.getElementById("steps").textContent = steps;
    document.getElementById("calories").textContent = calories;
    document.getElementById("distance").textContent = (steps * 0.0008).toFixed(
      2
    );
    document.getElementById("goalText").textContent = goal;

    let progressPercent = Math.min((steps / goal) * 100, 100);
    document.getElementById("progress").style.width = progressPercent + "%";
    document.getElementById("progressPercent").textContent =
      progressPercent.toFixed(1) + "%";
  }

  document.getElementById("addData").addEventListener("click", () => {
    let addSteps = parseInt(document.getElementById("addSteps").value) || 0;
    let addCalories =
      parseInt(document.getElementById("addCalories").value) || 0;

    steps += addSteps;
    calories += addCalories;

    localStorage.setItem("steps", steps);
    localStorage.setItem("calories", calories);
    updateUI();

    document.getElementById("addSteps").value = "";
    document.getElementById("addCalories").value = "";
  });

  document.getElementById("saveGoal").addEventListener("click", () => {
    let newGoal = parseInt(document.getElementById("setGoal").value);
    if (newGoal > 0) {
      goal = newGoal;
      localStorage.setItem("goal", goal);
      updateUI();
      document.getElementById("setGoal").value = "";
    } else {
      alert("Please enter a valid goal!");
    }
  });
  document.getElementById("resetData").addEventListener("click", () => {
    if (confirm("Reset all data?")) {
      steps = 0;
      calories = 0;
      localStorage.clear();
      updateUI();
    }
  });


  updateUI();
<<<<<<< HEAD
});
=======
});
>>>>>>> dd01fcecdece62d2739b1c7d5e5ed2b1a88eacc4
