const modalBtn = document.querySelector('.modal__button')
const modal = document.querySelector('.modal')

modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
})
modal.addEventListener('click', (e) => {
    const modalContent = e.target.closest('.modal_inner')
    if (!modalContent) {
        modal.style.display = ''
    }
})