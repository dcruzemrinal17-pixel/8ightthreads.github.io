// Customer Reviews - Auto-sliding carousel with Indian customers

const indianCustomerReviews = [
    {
        name: "Arjun Sharma",
        location: "Mumbai, Maharashtra",
        rating: 5,
        review: "Absolutely love the quality! The oversized tees fit perfectly and the fabric is so comfortable. Best streetwear brand in India! 🔥",
        avatar: "AS"
    },
    {
        name: "Priya Verma",
        location: "Delhi, Delhi",
        rating: 5,
        review: "The hoodies are insanely good. Perfect for winters and the design is so unique. Will definitely order again!",
        avatar: "PV"
    },
    {
        name: "Rahul Patel",
        location: "Bangalore, Karnataka",
        rating: 5,
        review: "Great quality, fast delivery, and amazing customer service. 8ightThreads is my go-to for streetwear now.",
        avatar: "RP"
    },
    {
        name: "Anjali Singh",
        location: "Pune, Maharashtra",
        rating: 5,
        review: "The sweatpants are so cozy! Been wearing them every day. Love the minimalist design. Highly recommend! ✨",
        avatar: "AS"
    },
    {
        name: "Vivek Kumar",
        location: "Hyderabad, Telangana",
        rating: 5,
        review: "Finally found a brand that understands Indian style. The quality is premium and prices are fair. Keep it up!",
        avatar: "VK"
    },
    {
        name: "Neha Gupta",
        location: "Jaipur, Rajasthan",
        rating: 5,
        review: "Ordered the jacket and I'm obsessed! The fit is perfect and it looks so good. Worth every penny. 💯",
        avatar: "NG"
    },
    {
        name: "Aditya Reddy",
        location: "Kolkata, West Bengal",
        rating: 5,
        review: "8ightThreads is setting new standards for Indian streetwear. The accessories are fire too!",
        avatar: "AR"
    },
    {
        name: "Simran Kaur",
        location: "Chandigarh, Punjab",
        rating: 5,
        review: "Amazing quality and designs! Wearing my 8ightThreads gear everywhere. Everyone asks where I got it from! 🔥",
        avatar: "SK"
    }
];

let currentReviewIndex = 0;
let reviewAutoSlideTimer;

function initReviews() {
    const reviewsContainer = document.querySelector('[data-reviews-container]');
    if (!reviewsContainer) return;

    renderReviewSlider();
    startAutoSlide();

    // Resume auto-slide on mouse leave
    document.addEventListener('mouseleave', startAutoSlide);
}

function renderReviewSlider() {
    const container = document.querySelector('[data-reviews-container]');
    if (!container) return;

    const review = indianCustomerReviews[currentReviewIndex];
    
    container.innerHTML = `
        <div class="review-card fade-in">
            <div class="review-header">
                <div class="review-avatar">${review.avatar}</div>
                <div class="review-info">
                    <div class="review-name">${review.name}</div>
                    <div class="review-location">📍 ${review.location}</div>
                </div>
            </div>
            <div class="review-rating">
                ${'⭐'.repeat(review.rating)}
            </div>
            <div class="review-text">"${review.review}"</div>
        </div>
    `;
}

function startAutoSlide() {
    clearInterval(reviewAutoSlideTimer);
    reviewAutoSlideTimer = setInterval(() => {
        currentReviewIndex = (currentReviewIndex + 1) % indianCustomerReviews.length;
        renderReviewSlider();
    }, 5000); // Change review every 5 seconds
}

function nextReview() {
    currentReviewIndex = (currentReviewIndex + 1) % indianCustomerReviews.length;
    renderReviewSlider();
    clearInterval(reviewAutoSlideTimer);
    startAutoSlide();
}

function prevReview() {
    currentReviewIndex = (currentReviewIndex - 1 + indianCustomerReviews.length) % indianCustomerReviews.length;
    renderReviewSlider();
    clearInterval(reviewAutoSlideTimer);
    startAutoSlide();
}

document.addEventListener('DOMContentLoaded', initReviews);
