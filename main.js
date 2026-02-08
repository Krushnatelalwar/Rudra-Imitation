// Real Product Data from Provided Images
const products = [
    { id: 1, name: "Premium Rajvadi Saree Pin S-9", price: "₹1,250", category: "saree-pin", image: "/assets/saree_pin_premium.jpg", description: "Premium quality High Gold Rajvadi Saree Pin." },
    { id: 2, name: "High Gold Rajvadi Mangalsutra", price: "₹2,150", category: "mangalsutra", image: "/assets/mangalsutra_premium.jpg", description: "Elegant High Gold Rajvadi Mangalsutra with intricate detail." },
    { id: 3, name: "Brass Material Heritage Hasdi Set D-34", price: "₹3,450", category: "1-gram", image: "/assets/hasdi_set_brass.jpg", description: "Heritage Hasdi set made with premium brass material." },
    { id: 4, name: "High Gold Hasdi Set i-2", price: "₹2,850", category: "rosegold", image: "/assets/hasdi_set_gold.jpg", description: "Premium Quality High Gold Hasdi Set." },
    { id: 5, name: "Designer Gold Ring", price: "₹850", category: "ring", image: "/assets/product1.jpg" },
    { id: 6, name: "Premium CZ AD Necklace A-53", price: "₹3,250", category: "rosegold", image: "/assets/hero_necklace_new.jpg" },
    { id: 7, name: "1 Gram Gold Traditional Bangle", price: "₹1,850", category: "1-gram", image: "/assets/product6.jpg" },
    { id: 8, name: "Antique Finish Mangalsutra", price: "₹2,450", category: "mangalsutra", image: "/assets/product7.jpg" },
    { id: 9, name: "Rajvadi Peacock Saree Pin", price: "₹1,150", category: "saree-pin", image: "/assets/product8.jpg" },
    { id: 50, name: "Mini Ganthan Heritage Piece G-1", price: "₹1,450", category: "ganthan", image: "/assets/Mini Ganthan/WhatsApp Image 2026-02-08 at 9.55.54 AM.jpeg" },
    { id: 51, name: "Mini Ganthan Heritage Piece G-2", price: "₹1,450", category: "ganthan", image: "/assets/Mini Ganthan/WhatsApp Image 2026-02-08 at 9.55.55 AM (1).jpeg" },
    { id: 52, name: "Mini Ganthan Heritage Piece G-3", price: "₹1,450", category: "ganthan", image: "/assets/Mini Ganthan/WhatsApp Image 2026-02-08 at 9.55.55 AM.jpeg" },
    { id: 53, name: "Mini Ganthan Heritage Piece G-4", price: "₹1,450", category: "ganthan", image: "/assets/Mini Ganthan/WhatsApp Image 2026-02-08 at 9.55.56 AM (1).jpeg" },
    { id: 54, name: "Mini Ganthan Heritage Piece G-5", price: "₹1,450", category: "ganthan", image: "/assets/Mini Ganthan/WhatsApp Image 2026-02-08 at 9.55.56 AM.jpeg" },
    { id: 55, name: "Mini Ganthan Heritage Piece G-6", price: "₹1,450", category: "ganthan", image: "/assets/Mini Ganthan/WhatsApp Image 2026-02-08 at 9.55.57 AM (1).jpeg" },
    { id: 56, name: "Mini Ganthan Heritage Piece G-7", price: "₹1,450", category: "ganthan", image: "/assets/Mini Ganthan/WhatsApp Image 2026-02-08 at 9.55.57 AM.jpeg" },
    { id: 57, name: "Mini Ganthan Heritage Piece G-8", price: "₹1,450", category: "ganthan", image: "/assets/Mini Ganthan/WhatsApp Image 2026-02-08 at 9.55.58 AM (1).jpeg" },
    { id: 58, name: "Mini Ganthan Heritage Piece G-9", price: "₹1,450", category: "ganthan", image: "/assets/Mini Ganthan/WhatsApp Image 2026-02-08 at 9.55.58 AM.jpeg" }
];

const bridalCollection = [
    { id: 101, name: "Royal Bridal Heritage Hasdi Set", price: "₹12,500", image: "/assets/bridal_set_main.jpg", description: "Complete bridal heritage hasdi set as featured." }
];

// Initialize UI
document.addEventListener('DOMContentLoaded', () => {
    console.log("Initializing Rudra Imitation with Real Assets...");
    initHeroParallax();
    renderProducts(products, 'main-product-grid');
    renderProducts(bridalCollection, 'bridal-grid');
    initChatbot();
    initAnimations();
    updateCartCount();
    initThemeToggle();
    initFilters();
});

// 1. Theme Toggle - FIXED with explicit body class
function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    const applyTheme = (theme) => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('rudra-theme', theme);
    };

    toggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    });

    const savedTheme = localStorage.getItem('rudra-theme') || 'dark';
    applyTheme(savedTheme);
}

// 2. 3D Hero Parallax
function initHeroParallax() {
    const heroTilt = document.getElementById('hero-tilt');
    if (!heroTilt) return;

    window.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const moveX = (clientX - innerWidth / 2) / 25;
        const moveY = (clientY - innerHeight / 2) / 25;
        heroTilt.style.transform = `rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
    });
}

// 3. Product Rendering
function renderProducts(items, targetId) {
    const grid = document.getElementById(targetId);
    if (!grid) return;

    if (items.length === 0) {
        grid.innerHTML = '<p class="no-products">No products found in this category.</p>';
        return;
    }

    grid.innerHTML = items.map(product => `
        <div class="product-card glass-panel" data-category="${product.category || 'bridal'}">
            <div class="card-inner">
                <div class="img-wrapper">
                    <img src="${product.image}" alt="${product.name}" class="product-img" onerror="this.src='https://placehold.co/400x400/2d0202/c5a059?text=Rudra+Jewel'">
                </div>
                <h3>${product.name}</h3>
                <p class="gold-text">${product.price}</p>
                <div class="card-actions">
                    <button class="btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

// 4. Filters
function initFilters() {
    const toggle = document.getElementById('gallery-menu-toggle');
    const filterBar = document.getElementById('gallery-filters');

    if (toggle && filterBar) {
        toggle.addEventListener('click', () => {
            filterBar.classList.toggle('active');
        });
    }

    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            const filteredProducts = filter === 'all' ? products : products.filter(p => p.category === filter);
            renderProducts(filteredProducts, 'main-product-grid');

            // Close menu on selection (mobile)
            if (window.innerWidth <= 768) {
                filterBar.classList.remove('active');
            }
        });
    });
}

// 5. Chatbot Logic
function initChatbot() {
    const toggle = document.getElementById('chatbot-toggle');
    const windowEl = document.getElementById('chatbot-window');
    const close = document.getElementById('chat-close');

    if (!toggle || !windowEl) return;

    toggle.addEventListener('click', () => windowEl.classList.toggle('hidden'));
    if (close) close.addEventListener('click', () => windowEl.classList.add('hidden'));

    document.querySelectorAll('.chat-option').forEach(opt => {
        opt.addEventListener('click', (e) => {
            const val = e.target.getAttribute('data-val');
            const label = e.target.textContent;
            handleChatOption(val, label);
        });
    });
}

function handleChatOption(option, label) {
    addChatMessage(label, 'user');
    setTimeout(() => {
        switch (option) {
            case 'designs':
                addChatMessage("We have Heritage Hasdi sets, Mangalsutras, and Saree pins. You can filter by 'Rosegold' or '1 Gram' in our collection!", 'bot');
                break;
            case 'contact':
                addChatMessage("Proprietor: Balaji Telalwar. Phone: 9322242762. Address: New Sarafa Market, Loha, Nanded.", 'bot');
                break;
            case 'bridal':
                addChatMessage("Our Bridal Collection features the majestic Heritage Hasdi sets perfect for your special day.", 'bot');
                break;
            case 'order':
                addChatMessage("To place an order, add items to your cart 🛒 and then click the cart button to go to checkout. You can then place your order via WhatsApp!", 'bot');
                break;
        }
    }, 800);
}

function addChatMessage(text, sender) {
    const msg = document.createElement('div');
    msg.className = `chat-msg ${sender}`;
    msg.textContent = text;
    const container = document.getElementById('chat-messages');
    if (container) {
        container.appendChild(msg);
        container.scrollTop = container.scrollHeight;
    }
}

// 6. Cart Management
window.addToCart = (id) => {
    let cart = JSON.parse(localStorage.getItem('rudra-cart') || '[]');
    cart.push(id);
    localStorage.setItem('rudra-cart', JSON.stringify(cart));
    updateCartCount();
    alert("Item added to cart! 🛍️");
};

window.removeFromCart = (index) => {
    let cart = JSON.parse(localStorage.getItem('rudra-cart') || '[]');
    cart.splice(index, 1);
    localStorage.setItem('rudra-cart', JSON.stringify(cart));
    updateCartCount();
    if (window.location.pathname.includes('checkout')) {
        location.reload(); // Refresh checkout to reflect changes
    }
};

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('rudra-cart') || '[]');
    const countEl = document.getElementById('cart-count');
    if (countEl) countEl.textContent = cart.length;
}

const cartBtn = document.getElementById('cart-btn');
if (cartBtn) {
    cartBtn.addEventListener('click', () => {
        window.location.href = '/checkout.html';
    });
}

function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('section').forEach(sec => observer.observe(sec));
}
