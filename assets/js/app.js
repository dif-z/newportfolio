// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

//scrollReveal
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 1700,
    reset: true
});


//reveal banner name and title
sr.reveal('.banner',{});
sr.reveal('.nameline',{ delay: 200 });
sr.reveal('.skill-section-title',{ delay: 300 });
sr.reveal('.section-header',{});
sr.reveal('.name',{ delay: 300 });
sr.reveal('.mail',{ delay: 500 });
sr.reveal('.msg',{ delay: 700 });
sr.reveal('.send-button',{ delay: 800 });

//reveal about section
sr.reveal('.about',{ delay: 100 });
sr.reveal('.knowmore',{ delay: 400 });
sr.reveal('.biodata',{ delay: 300 });

//reveal social-media icons
sr.reveal('.icon-list', { delay: 200 });

// AOS
AOS.init();


document.querySelector('#contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});
