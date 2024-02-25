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
  // fetch("https://api.sostvl.com/support/johannEmail", {
  fetch("http://localhost:9000/support/johannEmail", {
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
