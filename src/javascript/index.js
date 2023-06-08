const main = document.getElementById('main')
const target  = document.getElementById('navBar')


let options = {
    threshold: 0.1
}

let observer = new IntersectionObserver( callback, options)

observer.observe(target)
