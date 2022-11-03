const komorki = [];
const los = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const teksty = [
    "Nie potrafi rozwiazac własnego przykładu",
    "Anegdotka",
    "Tego nie będzie",
    "Zajęcia kończą się wcześniej",
    "Nie przejmujcie się",
    "skreślenie 15+ minut pisania",
    "no a kiedyś na tym kierunku",
    "duszno w sali",
    "co nie",
    "Więcej niż połowa nie przyszła",
    "Problemy techniczne",
    "Nic nie słychać",
    "to nic nie zmienia",
    "Ktos wychodzi w trakcie",
    "czasami mam takie pomyłki",
    "Sprawdza rozwiązanie w innych notatkach"
]
for(let i = 0;i<16;i++){
    komorki[i] = document.getElementsByTagName("td")[i];
    komorki[i].addEventListener("click",(e)=>{
        e.target.classList.toggle("background");
    })
}
for(let i = 0; i<16; i++){
    let losowy = Math.floor(Math.random()*teksty.length);
    komorki[i].innerHTML=teksty[losowy];
    teksty.splice(losowy,1);
}

