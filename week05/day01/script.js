let sum = 0;
    const largestPrime = 997;

    const input = document.getElementById("numberInput");
    const sumDisplay = document.getElementById("sumDisplay");
    const message = document.getElementById("message");
    const button = document.getElementById("addBtn");

    button.addEventListener("click", function() {
      const num = parseInt(input.value);

      if (isNaN(num)) {
        message.textContent = "Please enter a valid number!";
        return;
      }

      sum += num;
      sumDisplay.textContent = sum;

      if (num === largestPrime) {
        message.textContent = "Largest prime entered! Final sum: " + sum;
        input.disabled = true;
        button.disabled = true;
      } else {
        message.textContent = "";
      }

      input.value = "";
      input.focus();
    });
  