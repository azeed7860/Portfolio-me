
const roles = [
  "Full Stack Developer",
  "Salesforce Intern",
  "Data Analyst",
  "Machine Learning Enthusiast",
  "Frontend Developer"
];

let currentIndex = 0;
const dynamicText = document.getElementById("dynamic-text");

function changeText() {
  dynamicText.textContent = roles[currentIndex];
  currentIndex = (currentIndex + 1) % roles.length;
}

setInterval(changeText, 2000); // Change every 2 seconds
changeText(); // Initial call


//----------------------
const skills = [
  { name: "HTML", percent: 85 },
  { name: "CSS", percent: 75 },
  { name: "JavaScript", percent: 70 },
  { name: "React", percent: 60 },
  { name: "Python", percent: 70 },
  { name: "Java Full Stack", percent: 70 },
  { name: "SQL", percent: 80 },
  { name: "PL/SQL", percent: 80 },
  { name: "Salesforce", percent: 70 },
  { name: "PowerBI", percent: 70 }

];

const container = document.querySelector('.skills-container');

skills.forEach(({ name, percent }) => {
  const skill = document.createElement('div');
  skill.className = 'skill';
  skill.innerHTML = `
    <svg>
      <circle class="bg" cx="60" cy="60" r="50"></circle>
      <circle class="progress" cx="60" cy="60" r="50"></circle>
    </svg>
    <div class="number">0%</div>
    <p class="label">${name}</p>
  `;
  container.appendChild(skill);

  const progress = skill.querySelector('.progress');
  const number = skill.querySelector('.number');
  const maxOffset = 314;

  // Hover-based animation logic
  skill.addEventListener('mouseenter', () => {
    let value = 0;
    number.textContent = "0%";
    progress.style.strokeDashoffset = maxOffset;

    const interval = setInterval(() => {
      if (value >= percent) {
        clearInterval(interval);
      } else {
        value++;
        number.textContent = `${value}%`;
        progress.style.strokeDashoffset = maxOffset - (maxOffset * value) / 100;
      }
    }, 20);
  });
});

//-----------------
// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});
