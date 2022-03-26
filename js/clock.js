let userName = prompt("İsminizi Giriniz:")
let info = document.querySelector("#myName")

info.innerHTML = userName
document.onload =startTime()

function timeCheck(i){
    if(i < 10){
        i = "0" + i
    }
    return i ;
}
/*
    let body = document.body
    body.classList.add("h6")

    let saat = document.querySelector("#myClock")
    saat.classList.add("h2")
*/

    function startTime()
    {
    const week = ["Pazar" , "Pazartesi" , "Salı" , "Çarşamba" , "Perşembe" ,"Cuma" , "Cumartesi"]
    const date = new Date()
    let hour = date.getHours()
    let miute = date.getMinutes()
    let second = date.getSeconds()
    let day = week[date.getDay()]
    hour = timeCheck(hour)
    miute = timeCheck(miute)
    second = timeCheck(second)
    document.getElementById("myClock").innerHTML = `${hour}:${miute}:${second} ${day}`
    setTimeout(startTime, 1000)
    }
    
/*
switch (day){
    case(1):
    day="Pazartesi"
    break;
    case(2):
    day="Salı"
    break;
    case(3):
    day="Çarşamba"
    break;
    case(4):
    day="Perşembe"
    break;
    case(5):
    day="Cuma"
    break;
    case(6):
    day="Cumartesi"
    break;
    case(7):
    day="Pazar"
    break;
}
*/
/*`${hour}:${miute}:${second} ${day}`*/
