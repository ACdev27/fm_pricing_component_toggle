// Reference to toggle
const toggle = document.querySelector('.pricing__toggle');

// Reference to pricing section
const section = document.querySelector('.pricing');

// References to price amounts
const basicPrice = document.querySelector('.pricing__price--basic');
const proPrice = document.querySelector('.pricing__price--pro');
const masterPrice = document.querySelector('.pricing__price--master');

// Event listener for toggle element
toggle.addEventListener('click', toggleClicked);

function toggleClicked() {
  if (section.classList.contains('pricing--annual')) {
    section.classList.remove('pricing--annual');
    setPrices('monthly');
  } else {
    section.classList.add('pricing--annual');
    setPrices('annual');
  }
}

// Update prices based on time period selected
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


