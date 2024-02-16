export function submitForm(event) {
  // Prevent the form from being submitted normally
  event.preventDefault();

  var toast = document.getElementById("toast");
  console.log("toast", toast);

  // Get the values from the input fields
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Create the data object
  var data = {
    name: name,
    email: email,
    message: message,
  };
  console.log("la data", data);

  // Make the fetch request
  fetch("your-endpoint-url", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.text().then((text) => {
          return text ? JSON.parse(text) : {};
        });
      } else {
        throw new Error("Server response was not ok.");
      }
    })
    .then((data) => {
      toast.textContent = "Message sent successfully"; // Set the toast message
      toast.className = "toast show toast-success"; // Set the toast color
      setTimeout(function () {
        toast.className = toast.className.replace("show", "");
      }, 3000);
      console.log("Success:", data);
    })
    .catch((error) => {
      toast.textContent = "Message not sent"; // Set the toast message
      toast.className = "toast show toast-error"; // Set the toast color
      setTimeout(function () {
        toast.className = toast.className.replace("show", "");
      }, 3000);
      console.error("Error:", error);
    });
}
