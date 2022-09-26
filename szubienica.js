var tablica_hasel = new Array(10);
tablica_hasel[0] = "Gdyby kózka nie skakała to by nóżki nie złamała";
tablica_hasel[1] = "Bez ciekawości nie ma mądrości";
tablica_hasel[2] = "czego Jaś się nie nauczy tego Jan nie będzie umiał";
tablica_hasel[3] = "Dobra żona tym się chlubi że gotuje co mąż lubi";
tablica_hasel[4] = "Darowanemu koniowi w zęby się nie zagląda";
tablica_hasel[5] = "Oszczędnością i pracą ludzie się bogacą";
tablica_hasel[6] = "Ten się śmieje kto się śmieje ostatni";
tablica_hasel[7] = "Kto nie ma w głowie ten ma w nogach";
tablica_hasel[8] = "Gdzie dwóch się bije tam trzeci korzysta";
tablica_hasel[9] = "Tak krawiec kraje jak mu materii staje";

function losowanie() {
  var liczba_tablica_hasel = Math.round(Math.random() * tablica_hasel.length);
  wylosowane_haslo = tablica_hasel[liczba_tablica_hasel]; // ze względu na wstawiony var bujałem się jak bury osioł
}

losowanie();

var haslo = wylosowane_haslo; // podmienione hasło stałe na hasło losowane
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;
var ile_skuch = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
var wygrana = new Audio("wygrana.wav");
var przegrana = new Audio("przegrana.wav");

var haslo1 = "";

for (i = 0; i < dlugosc; i++) {
  if (haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
  else haslo1 = haslo1 + "-";
}

function wypisz_haslo() {
  document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

var litery = new Array(35);
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

function start() {
  var tresc_diva = "";

  for (i = 0; i <= 34; i++) {
    var element = "lit" + i;
    tresc_diva =
      tresc_diva +
      '<div class="litera" onclick="sprawdz(' +
      i +
      ')" id="' +
      element +
      '">' +
      litery[i] +
      " </div>";
    if ((i + 1) % 7 == 0)
      tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
  }

  document.getElementById("alfabet").innerHTML = tresc_diva;

  wypisz_haslo();
}

String.prototype.ustawZnak = function (miejsce, znak) {
  if (miejsce > this.length - 1) return this.toString();
  else return this.substring(0, miejsce) + znak + this.substring(miejsce + 1);
};

function sprawdz(nr) {
  var trafiona = false;

  for (i = 0; i < dlugosc; i++) {
    if (haslo.charAt(i) == litery[nr]) {
      haslo1 = haslo1.ustawZnak(i, litery[nr]);
      trafiona = true;
    }
  }

  if (trafiona == true) {
    yes.play();
    var element = "lit" + nr; // id naszego klinkiętego diva
    document.getElementById(element).style.background = "#003300";
    document.getElementById(element).style.color = "#00C000";
    document.getElementById(element).style.border = " 3px solid #00C000";
    document.getElementById(element).style.cursor = "default";
    wypisz_haslo();
  } else {
    no.play();
    var element = "lit" + nr; // id naszego klinkiętego diva
    document.getElementById(element).style.background = "#330000";
    document.getElementById(element).style.color = "#C00000";
    document.getElementById(element).style.border = " 3px solid #C00000";
    document.getElementById(element).style.cursor = "default";
    document.getElementById(element).setAttribute("onclick", ";"); //ustawiliśmy zawieszenie ponownego sprawdzania listerki gdyby był kolejny onclick, aby nie mnożyć skuch

    //skucha
    ile_skuch++;
    var obraz = "img/s" + ile_skuch + ".jpg";
    document.getElementById("szubienica").innerHTML =
      '<img src=" ' + obraz + ' " alt="" />';
  }

  //wygrana
  if (haslo == haslo1) {
    wygrana.play();
    document.getElementById("alfabet").innerHTML =
      "Tak jest! Podano prawidłowe hasło: " +
      haslo +
      '<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
  }

  //przegrana
  if (ile_skuch >= 9) {
    przegrana.play();
    document.getElementById("alfabet").innerHTML =
      "Przegrana! Prawidłowe hasło to: " +
      haslo +
      '<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
  }
}
