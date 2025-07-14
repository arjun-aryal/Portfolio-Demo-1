
const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle");

console.log(navMenu)

/* Menu show - hidden */

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle("show-menu");
    navToggle.classList.toggle('animate-toggle');
});


// Initialize Swiper
const servicesSwiper = new Swiper(".services-swiper", {
  spaceBetween: 32,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});



let mixer = mixitup('.work-container', {
    selectors: {
        target: '.mix'
    },
    animation: {
        duration: 300
    }
});

/* Active work */

const linkWork = document.querySelectorAll(".work-item");

function activeWork(){
    linkWork.forEach((a)=>{
        a.classList.remove("active-work");
    });
    this.classList.add("active-work");
}

linkWork.forEach((a)=> a.addEventListener("click",activeWork))



const styleSwitcher = document.getElementById("style-switcher"),
      switcherToggle = document.getElementById("switcher-toggle"),
      switcherClose = document.getElementById("switcher-close");

/* Show the style switcher */
switcherToggle.addEventListener("click", () => {
    styleSwitcher.classList.add("show-switcher");
});

/* Hide the style switcher */
switcherClose.addEventListener("click", () => {
    styleSwitcher.classList.remove("show-switcher");
});

// THEME COLORS
const colors = document.querySelectorAll(".style-switcher-color");

colors.forEach((color) => {
    color.addEventListener("click", () => {
        const activeColor = color.style.getPropertyValue("--hue");

        colors.forEach((c) => c.classList.remove("active-color"));
        color.classList.add("active-color");

        document.documentElement.style.setProperty("--hue", activeColor);
    });
});


//  LIGHT/DARK MODE

let currentTheme = "light";
document.body.className = currentTheme;

document.querySelectorAll("input[name='body-theme']").forEach((input) => {
  input.addEventListener('change', () => {
    currentTheme = input.value;
    document.body.className = currentTheme;
  });
});
