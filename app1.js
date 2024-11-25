const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hideup');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var object = document.querySelector('.animated-object');

    if (scrollPosition > 50 && scrollPosition < 300) { // Adjust scroll positions as needed
        object.style.display = 'block';
        object.style.animation = 'moveObject 2s forwards';
        object.style.opacity = '1';
    } else if (scrollPosition >= 300) {
        object.style.opacity = '0';
        setTimeout(function () {
            object.style.display = 'none';
        }, 500); // Match with the opacity transition duration
    } else {
        object.style.display = 'none';
    }
});