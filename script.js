const section1 = document.getElementById('section1')
const section2 = document.getElementById('section2')

const rat1 = document.getElementById('1')
const rat2 = document.getElementById('2')
const rat3 = document.getElementById('3')
const rat4 = document.getElementById('4')
const rat5 = document.getElementById('5')

const ratingS = document.getElementById('rating-s')

function show() {
  section1.classList.add('hid')
  section2.classList.remove('hid')
  if (ratingS.innerHTML == '') {
    ratingS.innerHTML = 'No rating selected'
  }
}

function rating(rat, element) {
  ratingS.innerHTML = 'You selected ' + rat + ' of 5'
  rat1.style.backgroundColor = 'var(--dark-blue)'
  rat2.style.backgroundColor = 'var(--dark-blue)'
  rat3.style.backgroundColor = 'var(--dark-blue)'
  rat4.style.backgroundColor = 'var(--dark-blue)'
  rat5.style.backgroundColor = 'var(--dark-blue)'

  element.style.backgroundColor = 'var(--orange)'
}
