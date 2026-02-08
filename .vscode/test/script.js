const CONFIG = {
    name: "พี่ฟง",
    party: "พรรคเพื่อฟงโกงอย่างตั้งใจ",
    totalSeats: 500
};

// ตั้งค่าชื่อและข้อมูล
document.getElementById('candidateName').innerText = CONFIG.name;
document.getElementById('partyName').innerText = CONFIG.party;
document.getElementById('partyLabel').innerText = CONFIG.party;

const mapContainer = document.getElementById('thailandMap');
const scoreEl = document.getElementById('myScore');
const barEl = document.getElementById('progress');

// --- ข้อมูลแผนที่ (ชื่อจังหวัด + พิกัดแกน X, Y เพื่อวาดเป็นรูปขวาน) ---
// r = row (แถว), c = column (คอลัมน์)
const mapData = [
    // ภาคเหนือ (หัวขวาน)
    {n:"เชียงราย", r:1, c:3}, {n:"แม่ฮ่องสอน", r:1, c:1}, {n:"เชียงใหม่", r:2, c:2}, {n:"พะเยา", r:2, c:3}, {n:"น่าน", r:2, c:4},
    {n:"ลำพูน", r:3, c:2}, {n:"ลำปาง", r:3, c:3}, {n:"แพร่", r:3, c:4}, {n:"อุตรดิตถ์", r:3, c:5},
    {n:"ตาก", r:4, c:1}, {n:"สุโขทัย", r:4, c:3}, {n:"พิษณ
        