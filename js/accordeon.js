const contents = document.querySelectorAll('.program-line__content')

contents.forEach((e) => {
    const title = e.querySelector('.program-line__title')
    const descr = e.querySelector('.program-line__descr')
    
    title.addEventListener('click', () => {
            descr.classList.toggle('active');
   })
})