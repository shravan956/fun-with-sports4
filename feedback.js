document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Display a success message
    const formMessage = document.getElementById("formMessage");
    formMessage.classList.remove("hidden");
    formMessage.textContent = "Thank you for your feedback!";
    
    // Optionally clear the form
    this.reset();
});

function feedback() {
    location.replace("file:///C:/Users/Admin/Desktop/index.html")
  }