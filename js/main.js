console.log("Hello World")
var pa = 1000         //แต้มเริ่มต้น
var txtTh = ["ต่ำ", "สูง", "เอี่ยว", "ไฮโล"]
var id = ["low", "high", "iew", "hilo", "go"]
var ptLow = 0, ptHigh = 0, ptIew = 0, ptHilo = 0
function ref() { //ฟังก์ชั่นสำหรับประกาศตัวแปร
    //ประกาศตัวแปรแสดงผลในปุ่มทายผล
    var low = document.getElementById(id[0])
    var high = document.getElementById(id[1])
    var iew = document.getElementById(id[2])
    var hilo = document.getElementById(id[3])
    var tipBox = document.getElementsByClassName("tipBox")
} ref()   //ดึงตัวแปรมาใช้ Callback
function reset(){ //Function Resetค่าเมื่อทอยเต๋า
    //ลบค่าแต้มที่แทงไว้
    low.innerHTML = txtTh[0]
    high.innerHTML = txtTh[1]
    iew.innerHTML = txtTh[2]
    hilo.innerHTML = txtTh[3]
    //รีเซ็ต CSS
    low.classList.remove('putPtX')
    low.classList.add('putPt')
    high.classList.remove('putPtX')
    high.classList.add('putPt')
    iew.classList.remove('putPtX')
    iew.classList.add('putPt')
    hilo.classList.remove('putPtX')
    hilo.classList.add('putPt')
}

function cal(a, b, c) { //Function คำนวณผล
    return a + b + c
}

function putPoint(obj) { //Function ใส่แต้มเดิมพัน
    
    let paX = document.getElementById("point")
    let pt = prompt("กรอกแต้มที่ต้องการเดิมพัน", "")
    //เปลี่ยนให้ตัวแปร pt เป็น Integer
    pt = parseInt(pt)
    if (pt == 0) {
        alert("คุณไม่ต้องการเดิมพันเพิ่ม")
    } else if(isNaN(pt)) {
        alert("กรุณาใส่เป็นตัวเลขเท่านั้น")
    } else if(pt>pa) {
        alert("แต้มคงเหลือไม่พอ")
    } else if(pt < 0) {
        alert("ไม่สามารถลดจำนวนแต้มได้")
    } else {
        switch (obj) {
            case 1: //แทงต่ำ
                if(ptLow != 0){
                    pt += ptLow
                    pa -= pt-ptLow
                }
                else {
                    pa -= pt
                }
                usePt = txtTh[0]
                low.innerHTML = txtTh[0] + ":" + pt
                low.classList.add('putPtX')
                paX.innerHTML = pa
                ptLow = pt
                alert("คุณแทง " + usePt + " จำนวน " + pt + " แต้ม")
                return ptLow
            case 2: //แทงสูง
                if(ptHigh != 0){
                    pt += ptHigh
                    pa -= pt-ptHigh
                }
                else {
                    pa -= pt
                }
                usePt = txtTh[1]
                high.innerHTML = txtTh[1] + ":" + pt
                high.classList.add('putPtX')
                paX.innerHTML = pa
                ptHigh = pt
                alert("คุณแทง " + usePt + " จำนวน " + pt + " แต้ม")
                return ptHigh
            case 3: //แทงเอี่ยว
                if(ptIew != 0){
                    pt += ptIew
                    pa -= pt-ptIew
                }
                else {
                    pa -= pt
                }
                usePt = txtTh[2]
                iew.innerHTML = txtTh[2] + ":" + pt
                iew.classList.add('putPtX')
                paX.innerHTML = pa
                ptIew = pt
                alert("คุณแทง " + usePt + " จำนวน " + pt + " แต้ม")
                return ptIew
            case 4: //แทงไฮโล
                if(ptHilo != 0){
                    pt += ptHilo
                    pa -= pt-ptHilo
                }
                else {
                    pa -= pt
                }
                usePt = txtTh[3]
                hilo.innerHTML = txtTh[3] + ":" + pt
                hilo.classList.add('putPtX')
                paX.innerHTML = pa
                ptHilo = pt
                alert("คุณแทง " + usePt + " จำนวน " + pt + " แต้ม")
                return ptHilo
        }
    }
}

function go() { //ทอยเต๋าและแสดงผล+คิดแต้ม
    //สุ่มเต๋า 3 ลูก
    let resA = Math.floor(Math.random() * 6) + 1
    let resB = Math.floor(Math.random() * 6) + 1
    let resC = Math.floor(Math.random() * 6) + 1
    //ประกาศตัวแปรแสดงผลลูกเต๋า
    let rubA = document.getElementById("rubA")
    let rubB = document.getElementById("rubB")
    let rubC = document.getElementById("rubC")
    //ประกาศตัวแปรแสดงผลรวม
    let rubSum = document.getElementById("rubSUM")
    //คำนวณผลรวมด้วยการเรียกฟังก์ชั่น cal()
    let resSum = cal(resA, resB, resC)

    //อีเว้นท์ผลการทอยเต๋า
    switch(resSum){
        case 12:case 13:case 14:case 15:case 16:case 17:case 18:
            resSum += " => สูง!"
            break
        case 3:
            resSum += " => เอี่ยว!"
            break
        case 11:
            resSum += " => ไฮโล!"
            break
        case 4:case 5:case 6:case 7:case 8:case 9:case 10:
            resSum += " => ต่ำ!"
            break
    }
    //แสดงผลในเต๋า
    rubA.innerHTML = resA
    rubB.innerHTML = resB
    rubC.innerHTML = resC
    //แสดงผลในผลรวม
    rubSum.innerHTML = resSum
    reset() //ดึง Reset มาใช้งาน
    

}
