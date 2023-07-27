document.addEventListener("DOMContentLoaded", function () {
    const usernameElement = document.getElementById("username");
  
    // Fetch the username from local storage
    const username = localStorage.getItem("username");
  
    // Display the username in the welcome message
    if (username) {
      usernameElement.textContent = username;
  
      // Attach click event to menu items to redirect to the corresponding personalized page
      const menuItems = document.querySelectorAll(".menu li a");
      menuItems.forEach((item) => {
        item.addEventListener("click", function (event) {
          event.preventDefault();
          const page = this.getAttribute("data-page");
          redirectToPersonalizedPage(page, username);
        });
      });
    } else {
      // If no username found, redirect back to the login page
      window.location.href = "index.html";
    }
  });
  
  function redirectToPersonalizedPage(page, username) {
    // Redirect to the personalized page with the user-specific content
    const personalizedPage = `users/${username.toLowerCase()}/${page}-${username.toLowerCase()}.html`;
    window.location.href = personalizedPage;
  }
  