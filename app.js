// loading banner





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



// jojjjjjjjjjjjjjjjjjjjjjjjjjjj
const container = document.getElementById('scrollContainer');
const content1 = document.getElementById('content-1');
const content2 = document.getElementById('content-2');

let scrollThreshold = 0;  // Scroll threshold to slow down detection
let scrollSensitivity = 80;  // Adjust this value to slow down scroll (higher = slower)

// Simulate fading on scroll
container.addEventListener('wheel', function (event) {
    scrollThreshold += event.deltaY;

    // Only trigger the fade effect when the threshold is exceeded
    if (scrollThreshold >= scrollSensitivity) {
        // Check if scrolling down (positive deltaY)
        content1.style.opacity = '0';  // Fade out the first content
        content2.style.opacity = '1';  // Fade in the second content
        scrollThreshold = 0;  // Reset the threshold after the scroll
    } else if (scrollThreshold <= -scrollSensitivity) {
        // Check if scrolling up (negative deltaY)
        content1.style.opacity = '1';  // Fade in the first content
        content2.style.opacity = '0';  // Fade out the second content
        scrollThreshold = 0;  // Reset the threshold after the scroll
    }
});

// ooooooooooooooooooooooooooooooooooooo


// agvxckjxhcklsdhsk;jb skb s



// fixing navbar
window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY; // Get the current scroll position
    var fixedElement = document.getElementById('blahh');
    var fixature = document.getElementById('connect');
    var fixedElemental = document.querySelectorAll('.color_change'); // Select all elements with the 'color_change' class

    var scrollLimit = 700; // Set the scroll point

    if (scrollPosition >= scrollLimit) {
        fixedElement.classList.add('normal-scroll'); // Change navbar background
        fixature.classList.add('connect_color');
        // Add the class to all elements with 'color_change' class to change their color
        fixedElemental.forEach(function (el) {
            el.classList.add('normal-scroll-color');
        });
    } else {
        fixedElement.classList.remove('normal-scroll'); // Revert navbar background
        fixature.classList.remove('connect_color');
        // Remove the class from all elements with 'color_change' class to revert their color
        fixedElemental.forEach(function (el) {
            el.classList.remove('normal-scroll-color');
        });
    }
});





// load6 transitions

// load6_section2


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
let slideInterval; // To hold the interval reference
let observerStarted = false; // To prevent multiple triggers

// Function to show the next slide
function showNextText() {
    // Remove 'current' class from the current text slide
    textSlides[currentIndex1].classList.remove('current');

    // Increment index and reset to 0 if it exceeds the array length
    currentIndex1 = (currentIndex1 + 1) % textSlides.length;

    // Add 'current' class to the next text slide
    textSlides[currentIndex1].classList.add('current');
}

// Initialize the Intersection Observer
const observer1 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !observerStarted) {
            // Start the text slide transition when the section comes into view
            observerStarted = true;
            textSlides[0].classList.add('current'); // Show the first slide
            slideInterval = setInterval(showNextText, 5000); // Start the interval
        } else if (!entry.isIntersecting && observerStarted) {
            // Stop the interval when the section goes out of view
            clearInterval(slideInterval);
            observerStarted = false;
        }
    });
}, { threshold: 0.1 }); // Trigger when 10% of the element is visible

// Observe the section
const section = document.querySelector('.load6_section1');
observer1.observe(section);




// document.addEventListener("DOMContentLoaded", function () {
//     const elements = Array.from(document.querySelectorAll("h2[data-count]"));
//     const observer = new IntersectionObserver(
//         function (entries) {
//             entries.forEach((entry) => {
//                 if (entry.intersectionRatio >= 0.5) {
//                     const index = elements.indexOf(entry.target);
//                     const delay = index * 250;
//                     setTimeout(() => startCounter(entry.target), delay);
//                     observer.unobserve(entry.target);
//                 }
//             });
//         },
//         {
//             threshold: 0.5
//         }
//     );
//     elements.forEach((element) => observer.observe(element));

//     function startCounter(element) {
//         const target = parseInt(element.getAttribute("data-count"));
//         const additionalData = element.getAttribute("additional-data") || "";
//         const totalFrames = 480;
//         let frame = 0;

//         function easeOut(t, b, c, d) {
//             return c * ((t = t / d - 1) * t * t + 1) + b;
//         }

//         function counter() {
//             if (frame >= totalFrames) {
//                 // Wrap the additionalData in a span element for separate styling
//                 element.innerHTML = `${target}<span class="additional-data">${additionalData}</span>`;
//                 return;
//             }
//             frame++;
//             const easedValue = easeOut(frame, 0, target, totalFrames);
//             // Update the counter value and style additionalData
//             element.innerHTML = `${Math.floor(easedValue)}<span class="additional-data">${additionalData}</span>`;
//             requestAnimationFrame(counter);
//         }
//         counter();
//     }
// });


const heading = document.querySelector(".type");

// Create an Intersection Observer
const observer2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Trigger the animation
            heading.style.animation = "type 1.5s steps(90) 1.5s 1 normal both, cursor 1s step-end infinite";
            observer.unobserve(entry.target); // Unobserve after triggering the animation
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the element is visible
});

// Observe the target element
observer2.observe(heading);


// circle loader 

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                } else {
                    entry.target.classList.remove("in-view");
                }
            });
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const rotatingTextWrapper = document.querySelector(".rotating-text-wrapper2");
    if (rotatingTextWrapper) {
        observer.observe(rotatingTextWrapper);
    }
});

// Circle left



// circle left end
// Line chart initialization
const lineCtx = document.getElementById('myLineChart').getContext('2d');
const myLineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],  // Optional data for clarity but won't be shown
        datasets: [{
            data: [230, 220, 230, 240, 230, 240],  // Your Y-axis data points
            borderColor: 'rgba(91, 44, 222, 1)',  // Line color (adjust as per the image)
            borderWidth: 2,  // Thickness of the line
            fill: false,  // No area fill below the line
            tension: 0.1  // Smoother curve effect
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false  // Hide the label that says 'Conversions'
            }
        },
        scales: {
            x: {
                display: false  // Hide X-axis
            },
            y: {
                display: false  // Hide Y-axis
            }
        },
        elements: {
            point: {
                radius: 0  // Hide the points on the line (dots)
            }
        }
    }
});

// Pie chart initialization
const pieCtx = document.getElementById('myPieChart').getContext('2d');
const myPieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow'], // You can adjust the labels as per your needs
        datasets: [{
            data: [30, 40, 30], // Adjust the data as per your needs
            backgroundColor: [
                'rgba(255, 99, 132, 0)',
                'rgba(54, 162, 235, 0)',
                'rgba(255, 206, 86, 0)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        }
    }
});

// Scatter chart initialization (only dots)
const scatterCtx = document.getElementById('myScatterChart').getContext('2d');
const myScatterChart = new Chart(scatterCtx, {
    type: 'scatter',
    data: {
        datasets: [{
            data: [
                { x: 5, y: 7 },
                { x: 7, y: 9 },
                { x: 8, y: 10 },
                { x: 6, y: 8 },
                { x: 5, y: 7 },
                { x: 7, y: 9 },
                { x: 8, y: 10 },
                { x: 6, y: 8 },
                { x: 9, y: 11 }
            ],
            backgroundColor: 'rgba(91, 44, 222, 1)',  // Dot color
            borderColor: 'rgba(91, 44, 222, 1)',  // Border color for dots (same as dot color)
            borderWidth: 2,  // Border width of dots
            pointRadius: 5  // Size of the dots
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false  // No legend
            }
        },
        scales: {
            x: {
                display: false  // Hide X-axis
            },
            y: {
                display: false  // Hide Y-axis
            }
        },
        elements: {
            point: {
                radius: 5  // Size of the dots (already set above but for clarity)
            }
        }
    }
});




// Bar chart initialization
const barCtx = document.getElementById('myBarChart').getContext('2d');
const myBarChart = new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],  // Bar labels (e.g., quarterly data)
        datasets: [{
            data: [150, 180, 170, 200],  // Values for each bar
            backgroundColor: 'rgb(0, 74, 173)',  // Bar color
            borderColor: 'rgb(0, 74, 173)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false  // Hide the legend
            }
        },
        scales: {
            x: {
                display: false  // Hide the X-axis labels
            },
            y: {
                display: false  // Hide the Y-axis labels
            }
        }
    }
});


// Intersection Observer to render charts
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is in view
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.id === 'lineChartContainer') {
                createLineChart();
            } else if (entry.target.id === 'pieChartContainer') {
                createPieChart();
            } else if (entry.target.id === 'scatterChartContainer') {
                createScatterChart();
            }
            observer.unobserve(entry.target); // Stop observing after rendering
        }
    });
}, options);

// Observe the chart containers
document.querySelectorAll('.chart-container').forEach(container => {
    observer.observe(container);
});






const menuBtns = document.querySelectorAll(".menu-button");

menuBtns.forEach((menuBtn) => {
    menuBtn.addEventListener("click", function () {
        //----- open only one menu --------------
        const activeAccordion = document.querySelector(".menu-button.open");
        if (activeAccordion && activeAccordion !== this) {
            activeAccordion.nextElementSibling.style.height = 0;
            activeAccordion.classList.remove("open");
        }
        //------------------------------------------------

        this.classList.toggle("open");
        const content = this.nextElementSibling;
        if (this.classList.contains("open")) {
            content.style.height = content.scrollHeight + "px";
        } else {
            content.style.height = 0;
        }
    });
});