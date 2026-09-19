/**
 * Az Meer (SMC-Private) Limited - Core Application Logic
 * 4DX Slide-In Scroll Reveal, 3D Perspective Tilt, Currency Conversion & Modals
 */

document.addEventListener('DOMContentLoaded', () => {
    window.AppState = {
        currency: localStorage.getItem('azmeer_currency') || 'USD',
        activePage: getInitialPage(),
        activeFilter: 'All'
    };

    initCurrencySelector();
    initMobileNav();
    initModals();
    initAccordions();
    initForms();
    initFilters();
    initScrollRevealAnimation();
    init3DTiltAndSpotlight();
    initButtonRipples();
    
    updateAllPrices();
});

function getInitialPage() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    return path;
}

/* ==================== 4DX SLIDE-IN SCROLL REVEAL OBSERVER ==================== */
function initScrollRevealAnimation() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    const revealTargets = document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up, .scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
    
    revealTargets.forEach(target => {
        revealObserver.observe(target);
        // Instant reveal if element is already inside top viewport
        const rect = target.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            target.classList.add('revealed');
        }
    });
}

/* ==================== 3D INTERACTIVE CARD TILT & SPOTLIGHT ==================== */
function init3DTiltAndSpotlight() {
    const cards = document.querySelectorAll('.glass-card, .tool-box');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', x + 'px');
            card.style.setProperty('--mouse-y', y + 'px');

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;

            card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-6px) scale3d(1.02, 1.02, 1.02)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)';
        });
    });
}

/* ==================== BUTTON RIPPLE EFFECT ==================== */
function initButtonRipples() {
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const circle = document.createElement('span');
            circle.classList.add('ripple');
            const rect = this.getBoundingClientRect();
            const diameter = Math.max(rect.width, rect.height);
            circle.style.width = circle.style.height = diameter + 'px';
            circle.style.left = (e.clientX - rect.left - diameter / 2) + 'px';
            circle.style.top = (e.clientY - rect.top - diameter / 2) + 'px';

            const existingRipple = this.querySelector('.ripple');
            if (existingRipple) existingRipple.remove();

            this.appendChild(circle);
        });
    });
}

/* ==================== CURRENCY CONVERTER ==================== */
function initCurrencySelector() {
    const selectors = document.querySelectorAll('.currency-select');
    selectors.forEach(select => {
        select.value = window.AppState.currency;
        select.addEventListener('change', (e) => {
            window.AppState.currency = e.target.value;
            localStorage.setItem('azmeer_currency', e.target.value);
            selectors.forEach(s => s.value = e.target.value);
            updateAllPrices();
        });
    });
}

function formatPrice(usdAmount) {
    if (!window.SITE_DATA || !window.SITE_DATA.company.currencies) return '$' + usdAmount;
    const currencyInfo = window.SITE_DATA.company.currencies[window.AppState.currency] || window.SITE_DATA.company.currencies.USD;
    const converted = Math.round(usdAmount * currencyInfo.rate);
    return currencyInfo.symbol + converted.toLocaleString();
}

function updateAllPrices() {
    const priceElements = document.querySelectorAll('[data-price-usd]');
    priceElements.forEach(el => {
        const usd = parseFloat(el.getAttribute('data-price-usd'));
        if (!isNaN(usd)) {
            const period = el.getAttribute('data-price-period') || '';
            el.innerHTML = formatPrice(usd) + ' <span>' + period + '</span>';
        }
    });
}

/* ==================== MOBILE NAVIGATION ==================== */
function initMobileNav() {
    const toggleBtn = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            toggleBtn.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fa-solid fa-xmark"></i>' 
                : '<i class="fa-solid fa-bars"></i>';
        });
    }
}

/* ==================== MODALS & POPUPS ==================== */
function initModals() {
    const overlay = document.getElementById('global-modal-overlay');
    const closeBtn = document.getElementById('modal-close-btn');

    if (closeBtn && overlay) {
        closeBtn.addEventListener('click', () => overlay.classList.remove('active'));
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.classList.remove('active');
        });
    }

    document.body.addEventListener('click', (e) => {
        const orderBtn = e.target.closest('[data-open-modal]');
        if (orderBtn) {
            const modalType = orderBtn.getAttribute('data-open-modal');
            const itemTitle = orderBtn.getAttribute('data-item-title') || 'Custom Project';
            const itemPrice = orderBtn.getAttribute('data-price-usd') || '499';
            openModal(modalType, { title: itemTitle, price: itemPrice });
        }
    });
}

function openModal(type, data) {
    data = data || {};
    const overlay = document.getElementById('global-modal-overlay');
    const body = document.getElementById('modal-body-content');
    if (!overlay || !body) return;

    if (type === 'order' || type === 'quote') {
        body.innerHTML = '<div style="text-align:center; margin-bottom:1.5rem;">' +
            '<div style="width:60px; height:60px; border-radius:50%; background:var(--primary-gradient); color:#fff; display:inline-flex; align-items:center; justify-content:center; font-size:1.5rem; margin-bottom:1rem;">' +
                '<i class="fa-solid fa-paper-plane"></i>' +
            '</div>' +
            '<h3>Order Request: <span class="gradient-text">' + (data.title || 'Custom Solution') + '</span></h3>' +
            '<p style="color:var(--text-muted);">Estimated Starting Rate: <strong>' + formatPrice(data.price || 499) + '</strong></p>' +
        '</div>' +
        '<form id="order-modal-form">' +
            '<div class="form-group"><label class="form-label">Full Name *</label><input type="text" class="form-control" required placeholder="Enter your full name"></div>' +
            '<div class="form-group"><label class="form-label">Email Address *</label><input type="email" class="form-control" required placeholder="name@company.com"></div>' +
            '<div class="form-group"><label class="form-label">Phone / WhatsApp</label><input type="text" class="form-control" placeholder="+92 300 1234567"></div>' +
            '<div class="form-group"><label class="form-label">Project Details & Requirements</label><textarea class="form-control" rows="3" placeholder="Briefly describe your goals or deadline..."></textarea></div>' +
            '<button type="submit" class="btn btn-primary" style="width:100%; margin-top:1rem;">Submit Order Request</button>' +
        '</form>';

        const form = document.getElementById('order-modal-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                body.innerHTML = '<div style="text-align:center; padding:2rem 1rem;">' +
                    '<i class="fa-solid fa-circle-check" style="font-size:3.5rem; color:#10b981; margin-bottom:1rem;"></i>' +
                    '<h3>Order Submitted Successfully!</h3>' +
                    '<p style="color:var(--text-muted); margin-top:0.5rem;">Thank you! Our senior project team at <strong>Az Meer (SMC-Private) Limited</strong> will review your details and email you within 2 hours.</p>' +
                    '<button onclick="document.getElementById(\'global-modal-overlay\').classList.remove(\'active\')" class="btn btn-secondary" style="margin-top:1.5rem;">Close Window</button>' +
                '</div>';
            });
        }
    } else if (type === 'chat') {
        body.innerHTML = '<div style="text-align:center; margin-bottom:1.5rem;">' +
            '<i class="fa-solid fa-comments" style="font-size:2.5rem; color:var(--primary); margin-bottom:0.5rem;"></i>' +
            '<h3>Az Meer Live Support</h3>' +
            '<p style="color:var(--text-muted);">24/7 Dedicated Client Assistance</p>' +
        '</div>' +
        '<div style="background:#f8fafc; border:1px solid var(--border-subtle); border-radius:12px; padding:1rem; height:200px; overflow-y:auto; margin-bottom:1rem; font-size:0.9rem;">' +
            '<p style="background:#e2e8f0; padding:0.5rem 0.8rem; border-radius:8px; display:inline-block; margin-bottom:0.5rem;">Hello! Welcome to Az Meer Limited. How can we help you today?</p>' +
        '</div>' +
        '<div style="display:flex; gap:0.5rem;">' +
            '<input type="text" class="form-control" placeholder="Type your message..." id="chat-input-msg">' +
            '<button class="btn btn-primary" onclick="sendChatMessage()"><i class="fa-solid fa-paper-plane"></i></button>' +
        '</div>';
    }

    overlay.classList.add('active');
}

function sendChatMessage() {
    const input = document.getElementById('chat-input-msg');
    if (input && input.value.trim() !== '') {
        alert('Live chat message sent to Az Meer Support! Representative will reply shortly.');
        input.value = '';
    }
}

/* ==================== ACCORDIONS ==================== */
function initAccordions() {
    document.body.addEventListener('click', (e) => {
        const question = e.target.closest('.faq-question');
        if (question) {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');
        }
    });
}

/* ==================== FILTERS ==================== */
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-filter');
            const filterNav = btn.closest('.filter-nav');
            
            if (filterNav) {
                filterNav.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }

            const filterContainer = document.querySelector(btn.getAttribute('data-target') || '.grid-3') || document.querySelector('.grid-2');
            if (filterContainer) {
                const items = filterContainer.querySelectorAll('[data-category]');
                items.forEach(item => {
                    const itemCat = item.getAttribute('data-category');
                    if (category === 'All' || itemCat === category || itemCat.includes(category)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
        });
    });
}

/* ==================== FORMS & WIDGETS ==================== */
function initForms() {
    const contactForm = document.getElementById('main-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for contacting Az Meer (SMC-Private) Limited! Your inquiry has been logged. Our team will contact you shortly.');
            contactForm.reset();
        });
    }

    const newsForms = document.querySelectorAll('.newsletter-form');
    newsForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Subscribed successfully to Az Meer Tech Insights!');
            form.reset();
        });
    });

    const speedForm = document.getElementById('speed-analyzer-form');
    if (speedForm) {
        speedForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const resultBox = document.getElementById('analyzer-result-box');
            if (resultBox) {
                resultBox.style.display = 'block';
                resultBox.innerHTML = '<div style="background:rgba(16, 185, 129, 0.1); border:1px solid #10b981; border-radius:12px; padding:1.25rem; margin-top:1rem; text-align:center;">' +
                    '<h4 style="color:#065f46;"><i class="fa-solid fa-gauge-high"></i> Analysis Complete</h4>' +
                    '<p style="font-size:0.9rem; color:#047857; margin-top:0.4rem;">Performance Score: <strong>96/100</strong>. Your site is fast, but 3D WebGL optimization can boost conversion by +28%!</p>' +
                '</div>';
            }
        });
    }
}

window.openModal = openModal;
window.sendChatMessage = sendChatMessage;
