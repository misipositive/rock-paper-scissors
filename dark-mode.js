const darkModeBtn = document.getElementById('dark-mode-btn');
const body = document.body;

darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

function toggleDarkMode() {
  const body = document.querySelector("body");
  const button = document.querySelector("#dark-mode-btn");
  
  // check if the user prefers dark mode
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  // toggle the body's dark mode class
  body.classList.toggle("dark-mode");
  
  // if body has the dark-mode class, set the button text to "Light Mode"
  if (body.classList.contains("dark-mode")) {
    button.innerText = "Light Mode";
    
    // store the user's preference in local storage
    localStorage.setItem("darkMode", "true");
  } else {
    button.innerText = "Dark Mode";
    
    // remove the user's preference from local storage
    localStorage.removeItem("darkMode");
  }
}

// check if the user previously preferred dark mode
const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedDarkMode = localStorage.getItem("darkMode");

// set the initial mode based on user preferences
if (savedDarkMode === "true" || (prefersDarkMode && !savedDarkMode)) {
  document.querySelector("body").classList.add("dark-mode");
  document.querySelector("#dark-mode-btn").innerText = "Light Mode";
}
  