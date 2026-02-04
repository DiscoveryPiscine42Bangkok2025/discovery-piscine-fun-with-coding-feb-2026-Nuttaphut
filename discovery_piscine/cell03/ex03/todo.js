// todo.js

// 1. โหลดข้อมูลเมื่อเปิดเว็บ
window.onload = function() {
    loadTodoList();
};

// 2. ฟังก์ชันเพิ่มรายการ (ปุ่ม New)
function newTodo() {
    let text = prompt("📝 พิมพ์สิ่งที่ต้องทำใหม่:");

    if (text != null && text.trim() !== "") {
        addTodo(text);      // สร้าง HTML
        saveTodoList();     // บันทึก Cookie
    }
}

// 3. ฟังก์ชันสร้าง HTML div
function addTodo(text) {
    let list = document.getElementById("ft_list");
    let todoDiv = document.createElement("div");

    todoDiv.className = "todo-item";
    todoDiv.innerHTML = text;

    // คลิกเพื่อลบ
    todoDiv.onclick = function() {
        if (confirm("ต้องการลบรายการนี้ใช่ไหม? 🗑️")) {
            todoDiv.remove();
            saveTodoList(); // อัปเดต Cookie
        }
    };

    // แทรกไว้บนสุดเสมอ
    list.prepend(todoDiv);
}

// 4. บันทึก Cookie (รองรับภาษาไทย)
function saveTodoList() {
    let todos = [];
    let list = document.getElementById("ft_list").children;

    // วนลูปเก็บข้อมูล (จากบนลงล่าง)
    for (let i = 0; i < list.length; i++) {
        todos.push(list[i].innerHTML);
    }

    // แปลงเป็น JSON String และเข้ารหัสภาษาไทย
    let jsonString = JSON.stringify(todos);
    let encodedString = encodeURIComponent(jsonString);

    // ตั้งค่า Cookie (อายุ 7 วัน)
    let d = new Date();
    d.setTime(d.getTime() + (7*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    
    document.cookie = "ft_list=" + encodedString + ";" + expires + ";path=/";
}

// 5. โหลด Cookie (รองรับภาษาไทย)
function loadTodoList() {
    let name = "ft_list=";
    let decodedCookie = decodeURIComponent(document.cookie); // ถอดรหัสภาษาไทย
    let ca = decodedCookie.split(';');

    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            let jsonString = c.substring(name.length, c.length);
            try {
                let todos = JSON.parse(jsonString);
                // วนย้อนกลับ เพื่อให้เรียงลำดับถูกต้องตอนใช้ prepend
                for (let j = todos.length - 1; j >= 0; j--) {
                    addTodo(todos[j]);
                }
            } catch (e) {
                console.log("Error parsing cookie");
            }
            return;
        }
    }
}
