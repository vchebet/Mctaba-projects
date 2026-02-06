    // Select input elements
    const nameInput = document.getElementById("nameInput");
    const techInput = document.getElementById("techInput");
    const goalInput = document.getElementById("goalInput");

    // Select buttons
    const updateBtn = document.getElementById("updateBtn");
    const themeBtn = document.getElementById("themeBtn");
    const resetBtn = document.getElementById("resetBtn");

    // Select card elements
    const cardName = document.getElementById("cardName");
    const cardTech = document.getElementById("cardTech");
    const cardGoal = document.getElementById("cardGoal");

    // Track theme (logic only)
    let darkMode = false;

    // Update Card button
    updateBtn.addEventListener("click", function() {
      cardName.textContent = nameInput.value || "Your Name";
      cardTech.textContent = "Favorite Tech: " + (techInput.value || "-");
      cardGoal.textContent = "Goal: " + (goalInput.value || "-");
    });

    // Toggle Theme button (logic only)
    themeBtn.addEventListener("click", function() {
      darkMode = !darkMode;
      console.log("Theme toggled. Dark mode:", darkMode);
    });

    // Reset button
    resetBtn.addEventListener("click", function() {
      nameInput.value = "";
      techInput.value = "";
      goalInput.value = "";

      cardName.textContent = "Your Name";
      cardTech.textContent = "Favorite Tech: -";
      cardGoal.textContent = "Goal: -";
    });