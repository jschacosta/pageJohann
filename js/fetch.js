export function submitForm(event) {
  // Prevent the form from being submitted normally
  event.preventDefault();

  var toast = document.getElementById("toast");
  console.log("toast", toast);

  // Get the values from the input fields
  var nameField = document.getElementById("name");
  var emailField = document.getElementById("email");
  var messageField = document.getElementById("message");

  var name = nameField.value;
  var email = emailField.value;
  var message = messageField.value;

  // Create the data object
  var data = {
    name: name,
    email: email,
    message: message,
  };
  console.log("la data", data);

  // Make the fetch request
  fetch("https://api.sostvl.com/support/johannEmail", {
    // fetch("http://localhost:9000/support/johannEmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data && data.msg) {
        toast.textContent = "Message sent successfully"; // Set the toast message
        toast.className = "toast show toast-success"; // Set the toast color
        setTimeout(function () {
          toast.className = toast.className.replace("show", "");
        }, 3000);
        console.log("Success:", data);

        // Clear the input fields
        nameField.value = "";
        emailField.value = "";
        messageField.value = "";
      } else {
        throw new Error("No message in data");
      }
    })
    .catch((error) => {
      toast.textContent = "An error occurred, please try again later"; // Set the toast message
      toast.className = "toast show toast-error"; // Set the toast color
      setTimeout(function () {
        toast.className = toast.className.replace("show", "");
      }, 3000);
      console.error("Error:", error);
    });
}
