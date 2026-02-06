// ==========================================
// 1. ส่วนของ NAVBAR (ฟังก์ชันเปิด-ปิดเมนู)
// ==========================================

function toggleMenu() {
    // สลับ class 'show' เพื่อเปิด/ปิดเมนู
    const nav = document.getElementById('navbarNav');
    if (nav) { // เช็คก่อนว่ามี element นี้ไหม กัน error
        nav.classList.toggle('show');
    }
}

function closeMenu() {
    // สั่งปิดเมนูเมื่อกดลิ้งค์แล้ว
    const nav = document.getElementById('navbarNav');
    if (nav) {
        nav.classList.remove('show');
    }
}

// ==========================================
// 2. ส่วนของ ANIMATION (ทำงานเมื่อโหลดหน้าเสร็จ)
// ==========================================

// ใช้ DOMContentLoaded เพื่อรอให้ HTML โหลดเสร็จก่อน ค่อยสั่งหา element
document.addEventListener('DOMContentLoaded', () => {
    
    // ตั้งค่า Observer
    const observerOptions = { 
        threshold: 0.2 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                // (Optional) เอา comment ออก ถ้าอยากให้เลื่อนกลับไปแล้วเล่นใหม่
                // entry.target.classList.remove('show');
            }
        });
    }, observerOptions);

    // เริ่มสั่งให้จับตาดูทุกตัวที่มี class .reveal
    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));
    
});