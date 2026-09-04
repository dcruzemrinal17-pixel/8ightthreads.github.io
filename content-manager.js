// Content Manager - Connects Admin Dashboard to Website
// This file loads data from localStorage (admin panel) and displays it on the website

class ContentManager {
    constructor() {
        this.products = JSON.parse(localStorage.getItem('products') || '[]');
        this.textData = JSON.parse(localStorage.getItem('textData') || '{}');
        this.init();
    }

    init() {
        this.displayProducts();
        this.displayTextContent();
    }

    displayProducts() {
        // Find all product containers on the page
        const productContainers = document.querySelectorAll('[data-product-container]');
        
        if (productContainers.length === 0) {
            // Fallback: try to find by class or id
            const defaultContainer = document.querySelector('.products') || 
                                    document.querySelector('[data-products]') ||
                                    document.querySelector('#products');
            
            if (defaultContainer) {
                this.renderProducts(defaultContainer);
            }
        } else {
            productContainers.forEach(container => {
                this.renderProducts(container);
            });
        }
    }

    renderProducts(container) {
        if (!container) return;

        // Group products by category if needed
        const grouped = this.groupByCategory(this.products);
        
        // Clear existing products (but keep section headers if they exist)
        const productCards = container.querySelectorAll('.product-card, [data-product]');
        productCards.forEach(card => card.remove());

        // Render products
        if (this.products.length === 0) {
            container.innerHTML += '<p style="color: #888; padding: 20px;">No products available yet.</p>';
            return;
        }

        this.products.forEach(product => {
            const card = this.createProductCard(product);
            container.appendChild(card);
        });
    }

    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'card product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width:100%; height:350px; object-fit:cover;">
            <h3 style="padding:20px; color:#fff;">${product.name}</h3>
            <p style="padding:0 20px 20px; color:#3b82f6;">$${product.price}</p>
            <p style="padding:0 20px 20px; color:#bbb; font-size:14px;">${product.description}</p>
            <button style="margin:20px; width:calc(100% - 40px); padding:14px; border:none; border-radius:30px; background:#3b82f6; color:white; cursor:pointer; font-weight:600;">
                View Product
            </button>
        `;
        return card;
    }

    groupByCategory(products) {
        const grouped = {};
        products.forEach(product => {
            const category = product.category || 'Uncategorized';
            if (!grouped[category]) {
                grouped[category] = [];
            }
            grouped[category].push(product);
        });
        return grouped;
    }

    displayTextContent() {
        // Update hero title
        if (this.textData.heroTitle) {
            const heroTitle = document.querySelector('h1') || document.querySelector('[data-hero-title]');
            if (heroTitle) heroTitle.textContent = this.textData.heroTitle;
        }

        // Update hero subtitle
        if (this.textData.heroSubtitle) {
            const heroSubtitle = document.querySelector('.hero p') || document.querySelector('[data-hero-subtitle]');
            if (heroSubtitle) heroSubtitle.textContent = this.textData.heroSubtitle;
        }

        // Update collection title
        if (this.textData.collectionTitle) {
            const collectionTitle = document.querySelector('.collection h2') || document.querySelector('[data-collection-title]');
            if (collectionTitle) collectionTitle.textContent = this.textData.collectionTitle;
        }

        // Update about text
        if (this.textData.aboutText) {
            const aboutText = document.querySelector('.about p') || document.querySelector('[data-about-text]');
            if (aboutText) aboutText.textContent = this.textData.aboutText;
        }
    }

    // Call this when you need to refresh from admin changes
    refresh() {
        this.products = JSON.parse(localStorage.getItem('products') || '[]');
        this.textData = JSON.parse(localStorage.getItem('textData') || '{}');
        this.init();
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    const contentManager = new ContentManager();
    
    // Optional: Refresh every 5 seconds to catch admin changes
    // setInterval(() => contentManager.refresh(), 5000);
});

// Listen for changes from other tabs
window.addEventListener('storage', function(event) {
    if (event.key === 'products' || event.key === 'textData') {
        console.log('Content updated from admin panel');
        location.reload(); // Reload to show latest changes
    }
});
