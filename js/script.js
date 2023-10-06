
var dan = 5;

switch(dan)
{
    case 5:
        console.log("Konacno petak");
        break;
    case 6:
        console.log("Subota");
        break;
    case 0:
        console.log("Nedelja");
        break;
    default:
        console.log("Radni dan");
}

for (var i = 0; i < 10; i++){

    if(i == 3) {
        continue;
    }
    if(i == 7) {
        break;
    }
    console.log("Broj je " +i);
}

var x = 3;
var y = -4;
var z = x-y;

if(x + y > 0){
    console.log("Zbir prve dve je pozitivan broj.");
}else if(x - y > 0){
    console.log("Razlika dve promenljive je pozitivan broj.");
}


if(x * z > 15 && y < 0)
{
    console.log("Proizvod prve i trece je veci od 0 i druga je negativna.");
}else if( x * z > 15 || z > 0){
    console.log("Proizvod prve i trece je broj veci od 15 ili je druga varijabla pozitivna");
}

var vrednost = 9;

switch(vrednost){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Zadata vrednost je izmedju 1 i 5 i to je + vrednost" );
        break;
    case 8:
    case 9:
    case 10:
        console.log("Zadata vrednost je izmedju 8 i 10");
        break;
    default:
        console.log("Zadata vrednost nije u navedenom opsegu")

}


var x = -7;
var y = 1;

while(x + y < 1){

    y = y +1;
    console.log("Vrednost y je " +y)

}

/*Zadatak 4

Napisati for petlju tako da broji od 1 do 10
i da se ispisuju samo brojevi koji su deljivi sa 2*/

for(i = 0; i <= 10; i++){
    if(i % 2 == 0){
        console.log(i);
    }

}


/*Zadatak 5 

Napisati for petlju koja prolazi kroz zadati niz i ispisuje elemente niza
var niz = ["saab", "volvo", "mercedes"];
*/



/*Zadatak 6

Napisati for petlju koja prolazi kroz zadati niz i ispisuje ga
ali prekida sa izvrsavanjem ukoliko naidje na element "volvo"
var niz = ["saab", "volvo", "mercedes"];*/




/*Zadatak 9
Napisati program koji računa srednju vrednost niza celih brojeva.*/




/*Zadatak 11
Napisati program koji određuje da li je niz simetričan. Primeri simetričnih nizova:
[2, 7, 9, 9, 7, 2]*/

/*Zadatak 13
Napisati program koji pronalazi najveci element u nizu decimalnih brojeva.
*/

var niz=[11.5, 8.5, 12.1, 45.6];

var najveciBroj = niz[0];

for(i=1; i<niz.length; i++){
    if(niz[i] > najveciBroj){
        najveciBroj = niz[i];
    }
}
console.log("Najveci broj u nizu je: ", najveciBroj);


/*Zadatak 12
Napisati program koji za svaki red matrice ispisuje koliko ima nula u tom redu.*/

var m = [
    [1, 2, 3, 4],
    [0, 2, 3, 4],
    [0, 2, 3, 4],
    [0, 0, 3, 0]
];

var brojac = 0;
for(var i = 0; i < m.length; i++) {
    var brojac = 0;
    for(var j = 0; j < m[i].length; j++){
    
        if(m[i][j] ==0){
            //console.log("Nasao sam 0 na indexima i,j " + i +"," +j);
            brojac++;
        }
    }
   // console.log("U redu" + i + "ima ukupno" + brojac +"nula");
   console.log(`U redu ${i} ima ukupno ${brojac} nula.`)

}

/*Zadatak 15
Napisati program koji pronalazi najveci element na glavnoj dijagonali matrice.*/

var m = [
    [1, 2, 3, 4],
    [0, 3, 3, 4],
    [0, 2, 7, 4],
    [0, 0, 3, 5]
];
var najveci = m[0][0];
for(var i = 0; i<m.length; i++){
    for(var j = 0; j<m[i].length; j++){
        if(i==j){
        if(m[i][j]>najveci){
            najveci = m[i][j];
            }
        }
    }   
}
console.log("Najveci broj u dijagonali je: ", najveci);


/*Zadatak 16
Napisati program koji za proizvoljne n i m kreira i popunjava matricu čiji su elementi jednaki poziciji
kolone.*/

// 	1	2	3	4	...	m
// A = 1	2	3	4	... m
// 	1	2	3	4	... m

    var m = [];
    var red = 3;
    var kol = 3;

    for(var i = 0; i<red; i++){
        m[i]= [];
        for(var j = 0; j < kol; j++){
            m[i][j] = j + 1;
        }
    }
    console.log(m);

    /*Zadatak 1

    Data su dva niza. U oba niza nalaze se nazivi odredjenih vocaka. Potrebno je formirati treci niz koji ce da sadrzi sve elemente prvog i drugog niza.
    var vocke1 = ["banana", "kruska", "jabuka"];
    var vocke2 = ["tresnja", "sljiva", "jagoda"];*/
    
    var vocke1 = ["banana", "kruska", "jabuka"];
    var vocke2 = ["tresnja", "sljiva", "jagoda"];
    
    var spojeniNiz = [];
    
   for (var i = 0; i < vocke1.length; i++) {
        spojeniNiz.push(vocke1[i]);
    }
    for (var i in vocke2) { //moze se i ovako napisati, ako napisemo of umesto in vraca vrednosti
        spojeniNiz.push(vocke2[i]);
    }
    console.log(spojeniNiz);


    /*Data su dva niza i oba niza nalaze se nazivi odredjenih vocaka, medjutim moze se desiti da jedna vocka postoji i u prvom i u drugom nizu. 
    Potrebno je formirati treci niz, koji ce imati samo jedinstvene vocke.
    
    var vocke1 = ["banana", "kruska", "jabuka", "sljiva"];
    var vocke2 = ["tresnja", "sljiva", "jagoda", "kupina", "malina"];*/
    
    var vocke1 = ["banana", "kruska", "jabuka", "sljiva"];
    var vocke2 = ["tresnja", "sljiva", "jagoda", "kupina", "malina"];
    
    var jedinstveneVocke = [];
    

    for (var i = 0; i < vocke1.length; i++) {
        if (!jedinstveneVocke.includes(vocke1[i])) {
            jedinstveneVocke.push(vocke1[i]);
        }
    }
    
    for (var j = 0; j < vocke2.length; j++) {
        if (!jedinstveneVocke.includes(vocke2[j])) {
            jedinstveneVocke.push(vocke2[j]);
        }
    }
    
    console.log(jedinstveneVocke);

/* Zadatak 3
Dat je niz koji sadrzi automobile. Automobili mogu u zavisnosti od vrste motora, da budu na dizel ili benzin. Formirati dva niza, jedan koji ce 
da sadrzi automobile na dizel i drugi na benzin. Uociti u zadatom nizu, kako je moguce odrediti da li je auto na dizel ili na benzin.

var automobili = [ ["mercedes", "b"], ["opel", "d"], ["toyota", "d"], ["bmw", "b"], ["volvo", "d"]]; */

var automobili = [["mercedes", "b"], ["opel", "d"], ["toyota", "d"], ["bmw", "b"], ["volvo", "d"]];

var dizel = [];
var benzin = [];

for(var i = 0; i < automobili.length; i++){

    
    var motor = automobili[i][1];

    if(motor==="d"){
        dizel.push(automobili[i][0]);
    }
    else{
        benzin.push(automobili[i][1]);

    }
}
console.log("Automobili na dizel: ", dizel);
console.log("Automobili na benzin ", benzin);


// Dat je spisak zaposlenih i njihove godine u sledecem obliku:
var zaposleni = [
    ["pera", "jova", "marko"],
    [28,      31,     19]
  ];
  
  
  // Zadatak 4
  // Za zadate zaposlene ispisati svakog zaposlenog i koliko svaki zaposleni ima godina

  var zaposleni = [
    ["pera", "jova", "marko"],
    [28,      31,     19]
  ];


  for(var j = 0; j<zaposleni[0].length; j++){
    console.log("Zaposleni " + zaposleni[0][j]  + "ima godina " + zaposleni[1][j]);

  }


  // Zadatak 7
// Dat je spisak zaposlenih u sledecem obliku
var zaposleni = [
    ["pera",      "jova",     "marko"],
    [28,          31,         39],
    ["inzenjer",  "tehnicar", "doktor"],
    [700,         0,        0]
  ];
  // Za zadate zaposlene izracunati i podesiti plate ostalih zaposlenih tako da:
  // tehnicar ima 70% plate inzenjera
  // doktor ima platu tehnicara + pola plate inzenjera
  // nakon toga proci kroz spisak zaposlenih i ispisati njihova imena, njihove radne pozicije i njihove plate
  // Napomena: Sve izmene vrsiti nad postojecom strukturom

  var zaposleni = [
    ["pera",      "jova",     "marko"],
    [28,          31,         39],
    ["inzenjer",  "tehnicar", "doktor"],
    [700,         0,        0]
  ];

  var plata_inzenjer = 0;

  for(var i = 0; i<zaposleni.length; i++){
    for(var j = 0; j<zaposleni[i].length; j++){
        if(zaposleni[i][j]=="inzenjer"){
            plata_inzenjer = zaposleni[i + 1][j];
            plata_tehnicar = plata_inzenjer*0.7;
            plata_doktor = plata_tehnicar + (plata_inzenjer*0.5);
        }
    }
  }
  for(var i = 0; i<zaposleni.length; i++){
    for(var j = 0; j<zaposleni[i].length; j++){
        if(zaposleni[i][j]=="tehnicar"){
            zaposleni[i + 1][j] = plata_tehnicar;
        }
        if(zaposleni[i][j] == "doktor"){
            zaposleni[i + 1][j] = plata_doktor;
        }
    }
}


////////////////////////////////////////////////////////////////

function pozdrav(){
    console.log("HELLO, WORLD!");
}

//Poziv funkcije bez parametara i bez povratne vrednosti
pozdrav();


function predstaviSe(ime, prezime){
    console.log("Ja sam " + ime + " " + prezime);
}

//Poziv funkcije sa parametrime bez povratne vrednosti

predstaviSe("Pera", "Peric");


function saberi(prvi, drugi){
    return prvi + drugi;
}

//Poziv funkcijeje sa parametrima sa povratnom vrednosti

var rez = saberi(10 , 3);
console.log(rez);


///////////////////////////////////////////////////////

function happyBirthday(ime){

document.write("Happy birthday to you.<br>");
document.write("Happy birthday to you.<br>");
document.write("Happy birthday dear " + ime + ".<br>");
document.write("Happy birthday to you.<br>");

}
happyBirthday("Maja");


////////////////////////////////////////////////

/*Zadatak 1:

Napisati funkciju koja prima par korisnicko ime lozinka u obliku:

korisnicko_ime|lozinka

funkcija treba da razdvoji korisnicko ime i lozinku po delimiteru ("|") i da doda u listu.
Pozvati funkciju za nekoliko razlicitih parova korisnicko ime i lozinka i zatim ih sve ispisati u obliku:

Korisnicko ime je : pera
lozinka je : peric

Korisnicko ime je : marko
Lozinka je : markovic

Napomena par korisnicko ime i lozinka cuvati u listi koja je element liste koja cuva sve parove korisnicko ime i lozinka.*/

var lista = [];

function podeli(kredencijali){

    console.log(kredencijali);

    var rez =  kredencijali.split("|")
    console.log(rez);
    lista.push(rez);
}

podeli("pera|peric");
podeli("nikola|nikolic")


for(var i in lista) {
    var korisnik = lista[i];
    console.log("Korisnicko ime je " + korisnik[0]);
    console.log("Lozinka je " + korisnik[1]);
}

/*Zadatak 2
Napisati funkciju koja za dva unesena stringa formira i ispisuje novi string koji se sastoji od dva puta ponovljena prva tri karaktera iz prvog stringa i poslednja tri karaktera drugog stringa.

Primer izvršavanja programa:
prvi string: abcdef
drugi string: ghijkl
abcabcjkl*/

function spojiStringove(prviString, drugiString) {
    
    var prviTriKaraktera = prviString.substring(0, 3);
    
    var drugiTriKaraktera = drugiString.substring(drugiString.length -3);
    
    var rezultat = prviTriKaraktera + prviTriKaraktera + drugiTriKaraktera;
    
    return rezultat;
}

var prviString = "abcdef";
var drugiString = "ghijkl";

var rezultat = spojiStringove(prviString, drugiString);
console.log(rezultat);

///////////////////////////////////////////////////

function spoji(param1, param2){

    var prvi = param1.substring(0, 3);
    var drugi = param2.substring(param2.length - 3);

    return prvi + prvi + drugi;
}

spoji("abcde", "ghijkl")
console.log(rez);

/////////////////////////////////////////////////

/*Zadatak 3
Napisati program koji formira akronim za zadatu frazu. Akronim se sastoji od kapitalizovanih
prvih slova reči u frazi. Na primer RAM je akronim za frazu „random access memory“.

Primer izvršavanja programa:
fraza: random access memory
akronim za unetu frazu je: RAM*/


function akronim(fraza){

    var niz = fraza.split(" ");   //["random", "access", "memory"]
    var akr = "";
    for(var i in niz){
    var slovo = niz[i][0];
    akr += slovo;       //akr = akr + slovo
   }
   return akr.toUpperCase();
}

var rez = akronim("random acccess memory");
console.log(rez);

/*Zadatak 4:
Data je struktura:

var ocene = [8, 7, 6, 9, 8, 10, 8];
var ime_prez = ["Marko", "Markovic"];

Napraviti funkciju koja prima dva parametra, prvi je niz ocena, drugi sadrzi ime i prezime.
Funkcija treba da izracuna prosek ocena datog studenta i da ispise njegovo ime i prezime.
Npr: "Student Marko Markovic ima prosek 8.7..."*/

function izracunajProsekIispisiImePrezime(ocene, ime_prezime) {
    
    var suma = 0;
    for (var i = 0; i < ocene.length; i++) {
        suma += ocene[i];
    }
    var prosek = suma / ocene.length;
    
    var ime = ime_prezime[0];
    var prezime = ime_prezime[1];
    
    console.log("Student " + ime + " " + prezime + " ima prosek " + prosek);
}


var ocene = [8, 7, 6, 9, 8, 10, 8];
var ime_prezime = ["Marko", "Markovic"];

izracunajProsekIispisiImePrezime(ocene, ime_prezime);








  


    
  
    



    
    