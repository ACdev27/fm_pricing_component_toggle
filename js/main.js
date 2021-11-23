// Reference to toggle selector
const toggle = document.querySelector('.pricing__selector');
const toggleSwitch = document.querySelector('.pricing__toggle');

// Reference to pricing section
const section = document.querySelector('.pricing');

// References to price amounts
const basicPrice = document.querySelector('.pricing__price--basic');
const proPrice = document.querySelector('.pricing__price--pro');
const masterPrice = document.querySelector('.pricing__price--master');

// Event listener for toggle element - mouse click
toggle.addEventListener('click', toggleClicked);

// Event listener for toggle element - keyboard input
toggle.addEventListener('keydown', toggleKey);


// Handle keypress to change toggle - check for enter or space key presssed
function toggleKey(e) {
  e.preventDefault();
  if (e.key == " " || e.key == "Enter") {
    toggleAriaPressed();
    slideToggle();
  }
}

// Handle mouse click on toggle
function toggleClicked() { 
  toggleAriaPressed();
  slideToggle();
}

// Updated position of toggle. Make call to update prices.
function slideToggle() {
  if (section.classList.contains('pricing--annual')) {
    section.classList.remove('pricing--annual');
    setPrices('monthly');
  } else {
    section.classList.add('pricing--annual');
    setPrices('annual');
  }
}

// Update ARIA pressed state for toggle switch button
function toggleAriaPressed() {
    // Set aria-pressed state to opposite state
    if (toggleSwitch.getAttribute("aria-pressed") == "false") {
      toggleSwitch.setAttribute("aria-pressed", "true");
    } else {
      toggleSwitch.setAttribute("aria-pressed", "false");
    }
}

// Update prices based on time period selected with toggle switch
function setPrices(time) {
  if (time == 'annual') {
    basicPrice.innerHTML = '<span>$</span>199.99';
    proPrice.innerHTML = '<span>$</span>249.99';
    masterPrice.innerHTML = '<span>$</span>399.99';
  } else {
    basicPrice.innerHTML = '<span>$</span>19.99';
    proPrice.innerHTML = '<span>$</span>24.99';
    masterPrice.innerHTML = '<span>$</span>39.99';
  }
}

