const closeMenuBtn = document.querySelector('.close-nav');
closeMenuBtn.addEventListener('click', function(){
    document.querySelector('#nav-links').classList.remove('active');
});

let whatCopied = '';

function showCopiedMessage(whatCopied){
    const copied =  document.querySelector('.copied')
    copied.classList.add('visible');
    document.querySelector('#copied').textContent = whatCopied;
    setTimeout(function(){
        copied.classList.remove('visible');
    }, 1500);
}

document.querySelectorAll('.copy-val').forEach(_ => {
    _.addEventListener('click', async function(){
        await navigator.clipboard.writeText(this.dataset.value);
        whatCopied = this.dataset.copy;
        showCopiedMessage(whatCopied);
    });
});



// const mobileMenu = document.getElementById('mobile-menu');
// const navLinks = document.getElementById('nav-links');
//
// mobileMenu.addEventListener('click', () => {
//     navLinks.classList.add('active');
// });

//slide1

const slides = document.querySelector('.slides');
const dots = [];

let currentIndex = 0;
let startX = 0; // Starting X position of the touch
let endX = 0;   // Ending X position of the touch

// Create navigation dots
// const slider = document.querySelector('.slider');
// const dotContainer = document.createElement('div');
// dotContainer.className = 'slider-dots';
// slider.appendChild(dotContainer);
//
// document.querySelectorAll('.passion').forEach((_, index) => {
//     const dot = document.createElement('button');
//     dot.addEventListener('click', () => goToSlide(index));
//     dotContainer.appendChild(dot);
//     dots.push(dot);
// });

// function updateDots() {
//     dots.forEach((dot, index) => {
//         dot.classList.toggle('active', index === currentIndex);
//     });
// }

// function goToSlide(index) {
//     currentIndex = index;
//     slides.style.transform = `translateX(-${currentIndex * 100}%)`;
//     updateDots();
// }

// Initialize the slider
// goToSlide(0);

// Add swipe functionality
// slider.addEventListener('touchstart', (e) => {
//     startX = e.touches[0].clientX; // Record the starting touch position
// });
//
// slider.addEventListener('touchmove', (e) => {
//     endX = e.touches[0].clientX; // Continuously track the touch position
// });
//
// slider.addEventListener('touchend', () => {
//     const threshold = 50; // Minimum swipe distance to trigger a slide
//     if (startX - endX > threshold) {
//         // Swipe left
//         if (currentIndex < dots.length - 1) {
//             goToSlide(currentIndex + 1);
//         }
//     } else if (endX - startX > threshold) {
//         // Swipe right
//         if (currentIndex > 0) {
//             goToSlide(currentIndex - 1);
//         }
//     }
//     // Reset touch positions
//     startX = 0;
//     endX = 0;
// });

//slider2
const customSlides = document.querySelector('.custom-slides');
const customDots = [];

let customCurrentIndex = 0;
let customStartX = 0; // Starting X position of the touch
let customEndX = 0;   // Ending X position of the touch

// Create navigation dots
const customSlider = document.querySelector('.custom-slider');
const customDotContainer = document.createElement('div');
customDotContainer.className = 'custom-slider-dots';
customSlider.appendChild(customDotContainer);

document.querySelectorAll('.custom-card').forEach((_, index) => {
    const customDot = document.createElement('button');
    customDot.addEventListener('click', () => customGoToSlide(index));
    customDotContainer.appendChild(customDot);
    customDots.push(customDot);
});

function customUpdateDots() {
    customDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === customCurrentIndex);
    });
}

function customGoToSlide(index) {
    customCurrentIndex = index;
    customSlides.style.transform = `translateX(-${customCurrentIndex * 100}%)`;
    customUpdateDots();
}

// Initialize the slider
customGoToSlide(0);

// Add swipe functionality
customSlider.addEventListener('touchstart', (e) => {
    customStartX = e.touches[0].clientX; // Record the starting touch position
});

customSlider.addEventListener('touchmove', (e) => {
    customEndX = e.touches[0].clientX; // Continuously track the touch position
});

customSlider.addEventListener('touchend', () => {
    const customThreshold = 50; // Minimum swipe distance to trigger a slide
    if (customStartX - customEndX > customThreshold) {
        // Swipe left
        if (customCurrentIndex < customDots.length - 1) {
            customGoToSlide(customCurrentIndex + 1);
        }
    } else if (customEndX - customStartX > customThreshold) {
        // Swipe right
        if (customCurrentIndex > 0) {
            customGoToSlide(customCurrentIndex - 1);
        }
    }
    // Reset touch positions
    customStartX = 0;
    customEndX = 0;
});

//slider3

const newSlides = document.querySelector('.new-slides');
const newDots = [];
let newCurrentIndex = 0;
let newStartX = 0; // Starting X position of the touch
let newEndX = 0;   // Ending X position of the touch

// Create Navigation Dots
const newSlider = document.querySelector('.new-slider');
const newDotContainer = document.querySelector('.new-slider-dots');

document.querySelectorAll('.new-card').forEach((_, index) => {
    const newDot = document.createElement('button');
    newDot.addEventListener('click', () => newGoToSlide(index));
    newDotContainer.appendChild(newDot);
    newDots.push(newDot);
});

// Function to Update Dots
function newUpdateDots() {
    newDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === newCurrentIndex);
    });
}

// Function to Go to Specific Slide
function newGoToSlide(index) {
    newCurrentIndex = index;
    newSlides.style.transform = `translateX(-${newCurrentIndex * 100}%)`;
    newUpdateDots();
}

// Initialize Slider
newGoToSlide(0);

// Add Swipe Functionality
newSlider.addEventListener('touchstart', (e) => {
    newStartX = e.touches[0].clientX; // Record the starting touch position
});

newSlider.addEventListener('touchmove', (e) => {
    newEndX = e.touches[0].clientX; // Continuously track the touch position
});

newSlider.addEventListener('touchend', () => {
    const newThreshold = 200; // Minimum swipe distance to trigger a slide
    if (newStartX - newEndX > newThreshold) {
        // Swipe left
        if (newCurrentIndex < newDots.length - 1) {
            newGoToSlide(newCurrentIndex + 1);
        }
    } else if (newEndX - newStartX > newThreshold) {
        // Swipe right
        if (newCurrentIndex > 0) {
            newGoToSlide(newCurrentIndex - 1);
        }
    }
    // Reset touch positions
    newStartX = 0;
    newEndX = 0;
});

// Responsive Adjustment for Desktop
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        newSlides.style.transform = 'translateX(0)';
    } else {
        newGoToSlide(newCurrentIndex);
    }
});

//slider4
// Select the necessary elements
const slide5Slides = document.querySelector('.slide5-slides');
const slide5Dots = [];
let slide5CurrentIndex = 0;
let slide5StartX = 0; // Starting X position of the touch
let slide5EndX = 0;   // Ending X position of the touch

// Create Navigation Dots
const slide5Container = document.querySelector('.slide5-container');
const slide5DotContainer = document.querySelector('.slide5-dots');

// Dynamically create dots based on the number of slides
document.querySelectorAll('.slide5-card').forEach((_, index) => {
    const slide5Dot = document.createElement('button');
    slide5Dot.addEventListener('click', () => slide5GoToSlide(index));
    slide5DotContainer.appendChild(slide5Dot);
    slide5Dots.push(slide5Dot);
});

// Update the active dot to reflect the current slide
function slide5UpdateDots() {
    slide5Dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === slide5CurrentIndex);
    });
}

// Move to a specific slide
function slide5GoToSlide(index) {
    slide5CurrentIndex = index;
    slide5Slides.style.transform = `translateX(-${slide5CurrentIndex * 100}%)`;
    slide5UpdateDots();
}

// Initialize the slider
slide5GoToSlide(0);

// Add Swipe Functionality
slide5Container.addEventListener('touchstart', (e) => {
    slide5StartX = e.touches[0].clientX; // Record the starting touch position
});

slide5Container.addEventListener('touchmove', (e) => {
    slide5EndX = e.touches[0].clientX; // Continuously track the touch position
});

slide5Container.addEventListener('touchend', () => {
    const slide5Threshold = 50; // Minimum swipe distance to trigger a slide
    if (slide5StartX - slide5EndX > slide5Threshold) {
        // Swipe left
        if (slide5CurrentIndex < slide5Dots.length - 1) {
            slide5GoToSlide(slide5CurrentIndex + 1);
        }
    } else if (slide5EndX - slide5StartX > slide5Threshold) {
        // Swipe right
        if (slide5CurrentIndex > 0) {
            slide5GoToSlide(slide5CurrentIndex - 1);
        }
    }
    // Reset touch positions
    slide5StartX = 0;
    slide5EndX = 0;
});

// Handle responsive behavior for desktop and mobile
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        slide5Slides.style.transform = 'translateX(0)';
    } else {
        slide5GoToSlide(slide5CurrentIndex);
    }
});

//slider5
// Select Elements
const reviews6Slides = document.querySelector('.reviews6-slides');
const reviews6Dots = [];
let reviews6CurrentIndex = 0;
let reviews6SlidesToShow = window.innerWidth >= 1024 ? 3 : 1;

let reviews6StartX = 0; // Starting X position of the touch
let reviews6EndX = 0;   // Ending X position of the touch

// Create Dots Navigation
const reviews6DotContainer = document.querySelector('.reviews6-dots');
document.querySelectorAll('.reviews6-slide').forEach((_, index) => {
    const dot = document.createElement('button');
    dot.addEventListener('click', () => reviews6GoToSlide(index));
    reviews6DotContainer.appendChild(dot);
    reviews6Dots.push(dot);
});

// Update Active Dot
function reviews6UpdateDots() {
    reviews6Dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === reviews6CurrentIndex);
    });
}

// Move to Specific Slide
function reviews6GoToSlide(index) {
    reviews6CurrentIndex = index;
    const slideWidth = 100 / reviews6SlidesToShow;
    reviews6Slides.style.transform = `translateX(-${reviews6CurrentIndex * slideWidth}%)`;
    reviews6UpdateDots();
}

// Adjust the number of slides to show based on screen size
function reviews6UpdateSlidesToShow() {
    reviews6SlidesToShow = window.innerWidth >= 1024 ? 3 : 1;
    const slideWidth = 100 / reviews6SlidesToShow;
    document.querySelectorAll('.reviews6-slide').forEach((slide) => {
        slide.style.flex = `0 0 ${slideWidth}%`;
        slide.style.maxWidth = `${slideWidth}%`;
    });
    reviews6GoToSlide(0);
}

// Add Swipe Functionality
reviews6Slides.addEventListener('touchstart', (e) => {
    reviews6StartX = e.touches[0].clientX; // Record the starting touch position
});

reviews6Slides.addEventListener('touchmove', (e) => {
    reviews6EndX = e.touches[0].clientX; // Continuously track the touch position
});

reviews6Slides.addEventListener('touchend', () => {
    const reviews6Threshold = 50; // Minimum swipe distance to trigger a slide
    if (reviews6StartX - reviews6EndX > reviews6Threshold) {
        // Swipe left
        if (reviews6CurrentIndex < reviews6Dots.length - reviews6SlidesToShow) {
            reviews6GoToSlide(reviews6CurrentIndex + 1);
        }
    } else if (reviews6EndX - reviews6StartX > reviews6Threshold) {
        // Swipe right
        if (reviews6CurrentIndex > 0) {
            reviews6GoToSlide(reviews6CurrentIndex - 1);
        }
    }
    // Reset touch positions
    reviews6StartX = 0;
    reviews6EndX = 0;
});

const scrollSections = document.querySelectorAll('.scroll-sect');
const menu = document.querySelector('.menu');
function detectCurrentSection() {
    let currentSection = null;

    scrollSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionHeight = rect.height;


        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            currentSection = section;
        }


        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const sectionVisibility = Math.min(Math.max(0, rect.bottom), window.innerHeight) / sectionHeight;
            if (sectionVisibility > 0.5) {
                currentSection = section;
            }
        }
    });

    if (currentSection) {
        const selectedItem = menu.querySelector(`[data-section="${currentSection.id}"]`);
        menu.querySelectorAll('.item-tab').forEach(_ => _.classList.remove('active-tab'));
        selectedItem.classList.add('active-tab');
        menu.querySelectorAll('svg>path').forEach(svg => {
            svg.setAttribute('fill-opacity', '0.3');
            // svg.style.fillOpacity = '0.3 !important'
        });
        selectedItem.querySelectorAll('svg>path').forEach(_=>{
            _.setAttribute('stroke-opacity', '1.0');
        })

        selectedItem.querySelectorAll('svg>path').forEach(_=>{
            _.setAttribute('fill-opacity', '1.0');
        })
    }
}





window.addEventListener('scroll', detectCurrentSection);


// Initialize Slider
// reviews6UpdateSlidesToShow();
// reviews6GoToSlide(0);

// Update on Window Resize
window.addEventListener('resize', reviews6UpdateSlidesToShow);
