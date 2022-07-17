const modal = document.querySelector('.modal')
const openBtn = document.querySelector('.hamburger')
const closeBtn = document.querySelector('.close')

openBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)

function openModal() {
  modal.style.display = 'block'
}

function closeModal() {
  modal.style.display = 'none'
}

function outsideClick(e) {
  if (e.target == modal) {
    closeModal()
  }
}