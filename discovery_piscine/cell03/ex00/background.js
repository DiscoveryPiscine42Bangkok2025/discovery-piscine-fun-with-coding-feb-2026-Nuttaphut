// background.js

// 1. สร้างฟังก์ชันสำหรับสุ่มสี
function changeColor() {
    // สุ่มเลข 0-255 สำหรับแม่สี แดง(r), เขียว(g), น้ำเงิน(b)
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    // สร้างโค้ดสี เช่น "rgb(100, 200, 50)"
    let color = "rgb(" + r + "," + g + "," + b + ")";

    // 2. สั่งเปลี่ยนสีพื้นหลังของ body
    document.body.style.backgroundColor = color;
    
    // (แถม) แสดงค่าสีใน Console เผื่ออยากดู
    console.log("New Color: " + color);
}
