const navbar = document.querySelector('.header__nav')
const links = navbar.querySelectorAll('a')

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        const section = document.querySelector(link.getAttribute('href'))
        if (section) {
            seamless.scrollIntoView(section, {
            block: 'start',
            behavior: 'smooth',
            inline: 'center',
        })}
    })
})