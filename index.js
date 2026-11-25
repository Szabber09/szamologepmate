let elsoSzamjegySzovege = "" /* vátozot létre hoztuk es beálitottuk az erteket 0 ra */
let masodikSzamjegySzovege = ""
let muvelet = ""

const szamok = document.getElementsByClassName("szam")/* eredmenye lista - megfogjuk a szam classnevvel ellatott elemeket */
const fosok = document.getElementsByClassName("fos")/* eredmenxe lista */
const kiiro = document.getElementById("kiirato")
const egyenlo = document.getElementById("egyenlo")
const torles = document.getElementById("torles")
console.log(szamok[0].textContent)

for (let index = 0; index < szamok.length; index++) {
    szamok[index].addEventListener("click", beir)
    
}





function beir(event){
    /* az input mezobe irja be a szamokat amikre kattintunk */
    /* mi jelenti a szamot?  */
    console.log(event.target)
    console.log(event.target.textContent)
    kiiro.value=event.target.textContent /* az input elembe beleirja annak az elemnek az erteket amelyikre kattintottunk */
    /* liiro input elemnek value erteke van */
}

/* ha rakattintunk egy muveleti jelre akkor 
1. mentsuk el az input elem tartalmat az elsoSzamjegySzovege valtozoba
2. A muveleti jelet mentsuk el muvelet valtozoban 
3. Töröljük ki az input elem tartalmát*/

for (let index = 0; index < fosok.length; index++) {
    fosok[index].addEventListener("click", muveletElvegzese)
    
}

function muveletElvegzese(event){
    elsoSzamjegySzovege = kiiro.value
    console.log(elsoSzamjegySzovege)
    console.log(event.target.textContent)
    muvelet=event.taget.textContent
    kiiro.value = ""
}

/* Az egyenloseg jel mukodese
1. ha rakattintunk az egyenlosegjelre 
2. akkor a masodikSzamjegySzovege mentsuk el a input mezo tartalmat
3. végezzuk el a muveletet az elsoSzamjegySzovege es a masodikSzamjegySzovege számok kozott
4. az eredmenyt irjuk ki az input elembe */
egyenlo.addEventListener("click",szamolas)

function szamolas(){
    masodikSzamjegySzovege = kiiro.value
    /* ide kell az elagazas a muvelet jel szerint */
    let eredmenye=0
    if (muvelet=="+"){
        eredmenye = Number(elsoSzamjegySzovege) + Number(masodikSzamjegySzovege)
    }
    if(muvelet=="*"){
        eredmenye = Number(elsoSzamjegySzovege) * Number(masodikSzamjegySzovege)
    }
    if(muvelet=="/" && masodikSzamjegySzovege != "0"){
        eredmenye = Number(elsoSzamjegySzovege) / Number(masodikSzamjegySzovege)
    }
    if(muvelet=="-"){
        eredmenye = Number(elsoSzamjegySzovege) - Number(masodikSzamjegySzovege)
    }
        
    let = eredmeny = Number(elsoSzamjegySzovege) + Number(masodikSzamjegySzovege)
    kiiro.value=eredmeny
}

torles.addEventListener("click", kitorles)
function kitorles(){
    kiiro.value = ""
    elsoSzamjegySzovege = ""
    masodikSzamjegySzovege = ""
}



