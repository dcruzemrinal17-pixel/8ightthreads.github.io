// Customer Reviews - Auto-sliding carousel with Indian customers

const indianCustomerReviews = [
    {
        name: "Arjun Sharma",
        location: "Mumbai, Maharashtra",
        rating: 5,
        review: "Absolutely love the quality! The oversized tees fit perfectly and the fabric is so comfortable. Best streetwear brand in India! 🔥"
    },
    {
        name: "Priya Verma",
        location: "Delhi, Delhi",
        rating: 5,
        review: "The hoodies are insanely good. Perfect for winters and the design is so unique. Will definitely order again!"
    },
    {
        name: "Rahul Patel",
        location: "Bangalore, Karnataka",
        rating: 5,
        review: "Great quality, fast delivery, and amazing customer service. 8ightThreads is my go-to for streetwear now."
    },
    {
        name: "Anjali Singh",
        location: "Pune, Maharashtra",
        rating: 5,
        review: "The sweatpants are so cozy! Been wearing them every day. Love the minimalist design. Highly recommend! ✨"
    },
    {
        name: "Vivek Kumar",
        location: "Hyderabad, Telangana",
        rating: 5,
        review: "Finally found a brand that understands Indian style. The quality is premium and prices are fair. Keep it up!"
    },
    {
        name: "Neha Gupta",
        location: "Jaipur, Rajasthan",
        rating: 5,
        review: "Ordered the jacket and I'm obsessed! The fit is perfect and it looks so good. Worth every penny. 💯"
    },
    {
        name: "Aditya Reddy",
        location: "Kolkata, West Bengal",
        rating: 5,
        review: "8ightThreads is setting new standards for Indian streetwear. The accessories are fire too!"
    },
    {
        name: "Simran Kaur",
        location: "Chandigarh, Punjab",
        rating: 5,
        review: "Amazing quality and designs! Wearing my 8ightThreads gear everywhere. Everyone asks where I got it from! 🔥"
    }
];

let currentReviewIndex = 0;
let reviewAutoSlideTimer;

function initReviews() {
    const reviewsContainer = document.querySelector('[data-reviews-container]');
    if (!reviewsContainer) {
        // Try to find and replace voices section content
        replaceVoicesSection();
    } else {
        renderReviewSlider();
        startAutoSlide();
    }

    // Resume auto-slide on mouse leave
    document.addEventListener('mouseleave', startAutoSlide);
}

function replaceVoicesSection() {
    // Find any element that might contain the voices testimonial
    const allText = document.body.innerText;
    if (allText.includes('monolith') || allText.includes('cream tee')) {
        // Create a container if it doesn't exist
        const voicesSection = document.createElement('div');
        voicesSection.setAttribute('data-reviews-container', '');
        
        // Try to append to an existing section or create one
        const mainSection = document.querySelector('main') || document.querySelector('.container') || document.body;
        if (mainSection) {
            mainSection.appendChild(voicesSection);
        }
        renderReviewSlider();
        startAutoSlide();
    }
}

function renderReviewSlider() {
    const container = document.querySelector('[data-reviews-container]');
    if (!container) return;

    const review = indianCustomerReviews[currentReviewIndex];
    
    container.innerHTML = `
        <div class="review-card fade-in" style="padding:20px; background:#161616; border-radius:12px; border:1px solid #222;">
            <div class="review-header" style="display:flex; align-items:center; gap:15px; margin-bottom:20px;">
                <div class="review-avatar" style="width:60px; height:60px; background:linear-gradient(135deg, #3b82f6, #1e3a8a); border-radius:50%; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:700; font-size:18px;">${review.name.split(' ').map(n => n[0]).join('')}</div>
                <div class="review-info">
                    <div class="review-name" style="font-weight:600; color:#fff; font-size:16px;">${review.name}</div>
                    <div class="review-location" style="color:#888; font-size:12px;">📍 ${review.location}</div>
                </div>
            </div>
            <div class="review-rating" style="font-size:18px; margin-bottom:15px; letter-spacing:2px;">
                ${'⭐'.repeat(review.rating)}
            </div>
            <div class="review-text" style="color:#bbb; font-size:16px; line-height:1.6; font-style:italic;">"${review.review}"</div>
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
