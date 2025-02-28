/*=============== MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle");

/* Menu show - hidden */
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
  navToggle.classList.toggle("animate-toggle");
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-list');

const LinkAction = () => {
  const navMenu = document.getElementById('nav-menu');

  navToggle.classList.remove('animate-toggle')
  navMenu.classList.remove('show-menu')
}

navLink.forEach((n) => n.addEventListener('click', LinkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");

  window.scrollY >= 20
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id'),
    sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId +']')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    } else{
      sectionsClass.classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

/*=============== SERVICES SWIPER ===============*/
var servicesSwiper = new Swiper(".services-swiper", {
  spaceBetween: 32,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1208: {
      slidesPerView: 3,
    },
  },
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
var mixer = mixitup(".work-container", {
  selectors: {
    target: ".mix",
  },
  animation: {
    duration: 300,
  },
});

/* Active work */
const lineWork = document.querySelectorAll(".work-item");

function activeWork() {
  lineWork.forEach((a) => {
    a.classList.remove("active-work");
  });
  this.classList.add("active-work");
}

lineWork.forEach((a) => a.addEventListener("click", activeWork));

/*=============== RESUME ===============*/
const accordionItems = document.querySelectorAll(".resume-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".resume-header"),
    content = item.querySelector(".resume-content"),
    icon = item.querySelector(".resume-icon i");

  header.addEventListener("click", () => {
    const isOpen = item.classList.toggle("accordion-open");

    if (isOpen) {
      content.style.height = content.scrollHeight + "px";
      icon.className = "ri-subtract-line";
    } else {
      content.style.height = "0";
      icon.className = "ri-add-line";
    }

    accordionItems.forEach((otherItem) => {
      if (
        otherItem !== item &&
        otherItem.classList.contains("accordion-open")
      ) {
        otherItem.classList.remove("accordion-open");
        otherItem.querySelector(".resume-content").style.height = "0";
        otherItem.querySelector(".resume-icon i").className = "ri-add-line";
      }
    });
  });
});

/*=============== TESTIMONIALS SWIPER ===============*/
var servicesSwiper = new Swiper(".testimonials-swiper", {
  spaceBetween: 32,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1208: {
      slidesPerView: 3,
    },
  },
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactSubject = document.getElementById("contact-subject"),
  contactMessage = document.getElementById("contact-message"),
  message = document.getElementById("massage");

const sendEmail = (e) => {
  e.preventDefault();

  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactSubject.value === "" ||
    contactMessage.value === ""
  ) {
    message.classList.remove("color-first");
    message.classList.add("color-red");
    message.textContent = "Write all the input fields";

    setTimeout(() => {
      message.textContent = "";
    }, 3000);
  } else {
    emailjs
      .sendForm(
        "service_0q8okbk",
        "template_r0vcgc6",
        "#contact-form",
        "eirWNkZLNzFdxYy_1"
      )
      .then(
        () => {
          message.classList.add("color-first");
          message.textContent = "Message sent ✔";

          setTimeout(() => {
            message.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("OOPs! SOMETHING WENT WRONG...", error);
        }
      );
    contactName.value = "";
    contactEmail.value = "";
    contactSubject.value = "";
    contactMessage.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);

/*=============== STYLE SWITCHER ===============*/
const styleSwitcher = document.getElementById("style-switcher"),
  switcherToggle = document.getElementById("switcher-toggle"),
  switcherClose = document.getElementById("switcher-close");

/* Switcher show */
switcherToggle.addEventListener("click", () => {
  styleSwitcher.classList.add("show-switcher");
});

/* Switcher hidden */
switcherClose.addEventListener("click", () => {
  styleSwitcher.classList.remove("show-switcher");
});

/*=============== THEME COLORS ===============*/
const colors = document.querySelectorAll(".style-switcher-color");
colors.forEach((color) => {
  color.onclick = () => {
    const activeColor = color.style.getPropertyValue("--hue");
    colors.forEach((c) => c.classList.remove("active-color"));
    color.classList.add("active-color");

    document.documentElement.style.setProperty("--hue", activeColor);
  };
});

/*=============== LIGHT/DARK MODE ===============*/
let currentTheme = "dark";
document.body.className = currentTheme;
document.querySelectorAll('input[name="body-theme"]').forEach((input) => {
  input.addEventListener("change", () => {
    currentTheme = input.value;
    document.body.className = currentTheme;
  });
});


/*=============== ANIMATIONS js ===============*/
document.addEventListener("DOMContentLoaded", function () {
  // Function to handle intersection changes
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animation classes when the section is in view
        const section = entry.target;
        const animatedElements = section.querySelectorAll("[data-animate]");

        animatedElements.forEach((element) => {
          const animationClass = element.getAttribute("data-animate");
          element.classList.add(animationClass);
        });

        // Stop observing the section after animations are triggered
        observer.unobserve(section);
      }
    });
  };

  // Create an Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  // Observe all sections with the "section" class
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    observer.observe(section);
  });
});
window.addEventListener("focus", () => {
  const skillsPercents = document.querySelectorAll(".skills-percentage");
  skillsPercents.forEach((elem) => {
    // Remove the helper class to reset the animation.
    elem.classList.remove("animate");
    
    // Force reflow so that the removal takes effect.
    void elem.offsetWidth;
    
    // Add the helper class to trigger the animation.
    elem.classList.add("animate");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the 'animate' class to trigger animations for both the element and its ::after
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5,
  });

  // Observe the section title element
  const sectionTitle = document.querySelector(".section-title");
  if (sectionTitle) observer.observe(sectionTitle);
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 200); // Adds delay for staggered effect
          observer.unobserve(entry.target); // Remove observer after animation
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of the card is visible
    }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });
});
