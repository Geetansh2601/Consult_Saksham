
// typewriter effect
const wordsForFirstH1 = [
    "Decision Makers",
    "CXOs",
    "Founders",
    "SaaS Founders",
    "Entrepreneurs",
    "Directors",
    "Business Owners",
    "Business Leaders",
    "Product Owners",
    "Project Managers",
    "Product Developers",
    "Startups",
    "SMEs",
    "Enterprises",
    "MNCs",
    "IT Service Providers",
    "Media Houses",
    "Political Leaders",
    "Celebrities",
    "Doctors",
    "Lawyers",
    "Journalists",
    "Architects",
    "Realtors"
];

const wordsForSecondH1 = [
    "Idea Validation Advisory",
    "Product Conceptualization Consulting",
    "Minimum Viable Product (MVP) Strategy",
    "Product Market Fit Evaluation",
    "Competitive Landscape Analysis",
    "Technology Integration Roadmap",
    "Tech Stack Selection Guidance",
    "Software Architecture Blueprint",
    "Prototyping and Wireframing Consultation",
    "UI/UX Strategy and Optimization",
    "Digital Transformation Strategy",
    "Agile Development Roadmap",
    "Business Scalability Consulting",
    "Process Automation & Optimization",
    "Data-Driven Decision-Making Advisory",
    "AI/ML Feasibility Study",
    "Cloud Infrastructure Consulting",
    "Security and Compliance Advisory",
    "Risk Mitigation Strategy",
    "Operational Efficiency Enhancement",
    "Product Development Roadmap",
    "High-Performance Team Building Advisory",
    "Offshore Development Center (ODC) Setup Consultation",
    "DevOps Integration Strategy",
    "Tech Resource Allocation and Optimization",
    "Revenue Optimization Consulting",
    "Cost Management and Budgeting Advisory",
    "Performance Benchmarking Advisory",
    "Audit of Existing Tech Infrastructure",
    "Scalability & Growth Roadmap",
    "SaaS Expansion Strategy",
    "Ongoing Maintenance Strategy",
    "Continuous Innovation Advisory",
    "Future-Proofing",
    "Technology Evolution Planning"
];

const typingSpeed = 150; // time between each character in milliseconds
const delayBeforeRestart = 1000; // delay before the text restarts typing

let firstCompleted = false;
let secondCompleted = false;

function typeWriter(element, wordsArray, wordIndex, charIndex, callback) {
    const currentWord = wordsArray[wordIndex];

    if (charIndex < currentWord.length) {
        element.innerHTML += currentWord.charAt(charIndex);
        setTimeout(() => typeWriter(element, wordsArray, wordIndex, charIndex + 1, callback), typingSpeed);
    } else {
        callback();
    }
}

function onWordComplete() {
    if (firstCompleted && secondCompleted) {
        setTimeout(() => {
            firstCompleted = false;
            secondCompleted = false;

            const firstElement = document.querySelector(".typing-effect-1");
            const secondElement = document.querySelector(".typing-effect-2");

            // Reset the text
            firstElement.innerHTML = "";
            secondElement.innerHTML = "";

            // Move to the next word for both elements and restart typing
            firstWordIndex = (firstWordIndex + 1) % wordsForFirstH1.length;
            secondWordIndex = (secondWordIndex + 1) % wordsForSecondH1.length;

            typeWriter(firstElement, wordsForFirstH1, firstWordIndex, 0, () => { firstCompleted = true; onWordComplete(); });
            typeWriter(secondElement, wordsForSecondH1, secondWordIndex, 0, () => { secondCompleted = true; onWordComplete(); });
        }, delayBeforeRestart);
    }
}

let firstWordIndex = 0;
let secondWordIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    const firstElement = document.querySelector(".typing-effect-1");
    const secondElement = document.querySelector(".typing-effect-2");

    // Start typing for both elements simultaneously
    typeWriter(firstElement, wordsForFirstH1, firstWordIndex, 0, () => { firstCompleted = true; onWordComplete(); });
    typeWriter(secondElement, wordsForSecondH1, secondWordIndex, 0, () => { secondCompleted = true; onWordComplete(); });
});


// banner motion graphics

var canvasDots = function () {
    var canvas = document.querySelector('canvas'),
        ctx = canvas.getContext('2d'),
        colorDot = '#CECECE',
        color = '#CECECE';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = 'block';
    ctx.fillStyle = colorDot;
    ctx.lineWidth = .1;
    ctx.strokeStyle = color;

    var mousePosition = {
        x: 30 * canvas.width / 100,
        y: 30 * canvas.height / 100
    };

    var dots = {
        nb: 600,
        distance: 60,
        d_radius: 100,
        array: []
    };

    function Dot() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.vx = -.5 + Math.random();
        this.vy = -.5 + Math.random();

        this.radius = Math.random();
    }

    Dot.prototype = {
        create: function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fill();
        },

        animate: function () {
            for (i = 0; i < dots.nb; i++) {

                var dot = dots.array[i];

                if (dot.y < 0 || dot.y > canvas.height) {
                    dot.vx = dot.vx;
                    dot.vy = - dot.vy;
                }
                else if (dot.x < 0 || dot.x > canvas.width) {
                    dot.vx = - dot.vx;
                    dot.vy = dot.vy;
                }
                dot.x += dot.vx;
                dot.y += dot.vy;
            }
        },

        line: function () {
            for (i = 0; i < dots.nb; i++) {
                for (j = 0; j < dots.nb; j++) {
                    i_dot = dots.array[i];
                    j_dot = dots.array[j];

                    if ((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance) {
                        if ((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius) {
                            ctx.beginPath();
                            ctx.moveTo(i_dot.x, i_dot.y);
                            ctx.lineTo(j_dot.x, j_dot.y);
                            ctx.stroke();
                            ctx.closePath();
                        }
                    }
                }
            }
        }
    };

    function createDots() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (i = 0; i < dots.nb; i++) {
            dots.array.push(new Dot());
            dot = dots.array[i];

            dot.create();
        }

        dot.line();
        dot.animate();
    }

    window.onmousemove = function (parameter) {
        mousePosition.x = parameter.pageX;
        mousePosition.y = parameter.pageY;
    }

    mousePosition.x = window.innerWidth / 2;
    mousePosition.y = window.innerHeight / 2;

    setInterval(createDots, 1000 / 30);
};

window.onload = function () {
    canvasDots();
};



// fixing navbar
window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY; // Get the current scroll position
    var fixedElement = document.getElementById('blahh');
    var fixedElemental = document.querySelectorAll('.color_change'); // Select all elements with the 'color_change' class

    var scrollLimit = 600; // Set the scroll point

    if (scrollPosition >= scrollLimit) {
        fixedElement.classList.add('normal-scroll'); // Change navbar background

        // Add the class to all elements with 'color_change' class to change their color
        fixedElemental.forEach(function (el) {
            el.classList.add('normal-scroll-color');
        });
    } else {
        fixedElement.classList.remove('normal-scroll'); // Revert navbar background

        // Remove the class from all elements with 'color_change' class to revert their color
        fixedElemental.forEach(function (el) {
            el.classList.remove('normal-scroll-color');
        });
    }
});





// load6 transitions

// load6_section2

const statements = document.querySelectorAll('.statement');
let currentIndex = 0;

function showNextStatement() {
    // Remove active class from the current statement
    statements[currentIndex].classList.remove('active');

    // Increment index and reset to 0 if it exceeds the array length
    currentIndex = (currentIndex + 1) % statements.length;

    // Add active class to the next statement
    statements[currentIndex].classList.add('active');
}

// Set interval for transitioning every 5 seconds
setInterval(showNextStatement, 5000);

// Initialize the first statement as active when the page loads
document.addEventListener('DOMContentLoaded', () => {
    statements[0].classList.add('active');
});

// load6 section2 loader

document.addEventListener("DOMContentLoaded", function () {
    const progressContainer = document.querySelector('#progressContainer');
    const progressCircles = document.querySelectorAll('.circular-progress, .circular-progress1, .circular-progress2');
    const statements = document.querySelectorAll('.statement');
    const statementsContainer = document.querySelector('.statements-container');

    // Observer for progress circles
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger the animation for progress circles
                progressCircles.forEach(circle => {
                    circle.style.animationPlayState = 'running';
                });
                observer.unobserve(progressContainer); // Stop observing once triggered
            }
        });
    }, { threshold: 0.5 });

    observer.observe(progressContainer);

    // Observer for statements
    const statementObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let activeStatement = 0;
                const totalStatements = statements.length;

                function showNextStatement() {
                    if (activeStatement < totalStatements) {
                        statements[activeStatement].classList.add('active');
                        activeStatement++;
                    }
                }

                // Show first statement immediately, then set intervals for the rest
                showNextStatement();
                let interval = setInterval(() => {
                    if (activeStatement < totalStatements) {
                        showNextStatement();
                    } else {
                        clearInterval(interval); // Stop when all are shown
                    }
                }, 6000); // 6-second interval between statements

                observer.unobserve(statementsContainer); // Stop observing after starting
            }
        });
    }, { threshold: 0.5 });

    statementObserver.observe(statementsContainer);
});



// load6 section1

const textSlides = document.querySelectorAll('.text-slide');
let currentIndex1 = 0;

function showNextText() {
    // Remove 'current' class from the current text slide
    textSlides[currentIndex1].classList.remove('current');

    // Increment index and reset to 0 if it exceeds the array length
    currentIndex1 = (currentIndex1 + 1) % textSlides.length;

    // Add 'current' class to the next text slide
    textSlides[currentIndex1].classList.add('current');
}

// Set interval for transitioning every 5 seconds
setInterval(showNextText, 5000);

// Initialize the first text slide as current when the page loads
document.addEventListener('DOMContentLoaded1', () => {
    textSlides[0].classList.add('current');
});
