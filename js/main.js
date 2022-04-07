/* Mobile Menu */

const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
});

/* Swipe Testimonials */

let touchstartX = 0;
let touchendX = 0;

const testimonialsContainer = document.getElementById("testimonials-container");

const testimonials = document.querySelectorAll(".testimonial");

let activeTestimonial = document.querySelector('.testimonial[data-index="1"]');

testimonialsContainer.addEventListener("touchstart", (event) => {
    event.preventDefault();
    touchstartX = event.changedTouches[0].screenX;
    touchendX = event.changedTouches[0].screenX;
});

testimonialsContainer.addEventListener("touchend", (event) => {
    event.preventDefault();
    touchendX = event.changedTouches[0].screenX;
    handleGesture();
});

function handleGesture() {
    const activeIndex = parseInt(activeTestimonial.dataset.index);

    if (touchendX - touchstartX < 0) {
        const { width } = activeTestimonial.getBoundingClientRect();

        testimonialsContainer.scrollBy(width, 0);

        if (activeIndex < 4) {
            activeTestimonial = document.querySelector(
                `.testimonial[data-index="${activeIndex + 1}"]`
            );

            document
                .querySelector(`.indicator[data-index="${activeIndex}"]`)
                .classList.remove("bg-brightRed");

            document
                .querySelector(`.indicator[data-index="${activeIndex + 1}"]`)
                .classList.add("bg-brightRed");
        }
    }

    if (touchendX - touchstartX > 0) {
        const { width } = activeTestimonial.getBoundingClientRect();

        testimonialsContainer.scrollBy(-width, 0);

        if (activeIndex > 1) {
            activeTestimonial = document.querySelector(
                `.testimonial[data-index="${activeIndex - 1}"]`
            );

            document
                .querySelector(`.indicator[data-index="${activeIndex}"]`)
                .classList.remove("bg-brightRed");

            document
                .querySelector(`.indicator[data-index="${activeIndex - 1}"]`)
                .classList.add("bg-brightRed");
        }
    }
}

const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

prevButton.addEventListener("click", () => {
    testimonialsContainer.scrollBy(-300, 0);
});

nextButton.addEventListener("click", () => {
    testimonialsContainer.scrollBy(300, 0);
});
