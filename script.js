document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Animation handling for hamburger icon if desired
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Add to Cart Interaction
    const addButtons = document.querySelectorAll('.add-btn, .btn');
    
    addButtons.forEach(button => {
        // Only target specific buttons if needed, for now all main action buttons
        if (button.innerText.includes('Belanja') || button.href) return; // Skip links

        button.addEventListener('click', (e) => {
            if (button.tagName === 'BUTTON' || button.parentElement.classList.contains('add-btn')) {
                // e.preventDefault();
                const title = button.closest('.book-card')?.querySelector('.book-title')?.innerText || "Buku";
                if(button.innerText === "Masukkan Keranjang") {
                    alert('Buku berhasil ditambahkan ke keranjang!');
                } else if (button.classList.contains('add-btn')) {
                     alert('Buku ditambahkan ke keranjang!');
                }
            }
        });
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple Intersection Observer for Fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply fade-in class to cards initially
    const cards = document.querySelectorAll('.book-card, .category-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

// Global function for onclick in HTML
function addToCart() {
    alert('Buku Laskar Pelangi berhasil ditambahkan ke keranjang belanjamu!');
}
