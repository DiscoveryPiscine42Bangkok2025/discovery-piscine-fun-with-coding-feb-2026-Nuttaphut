// 1. ส่วนของ NAVBAR (ฟังก์ชันเปิด-ปิดเมนู)

function toggleMenu() {
    const nav = document.getElementById('navbarNav');
    if (nav) { 
        nav.classList.toggle('show');
    }
}

function closeMenu() {
    const nav = document.getElementById('navbarNav');
    if (nav) {
        nav.classList.remove('show');
    }
}

// 2. ส่วนของ ANIMATION (ทำงานเมื่อโหลดหน้าเสร็จ)

document.addEventListener('DOMContentLoaded', () => {
    
    const observerOptions = { 
        threshold: 0.2 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));
    
});