var haslo = "Bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;

var haslo1 = "";

for (i = 0; i < dlugosc; i++) {
  if (haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
  else haslo1 = haslo1 + "-";
}

function wypisz_haslo() {
  document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

function start() {
  var tresc_diva = "";

  for (i = 0; i <= 34; i++) {
    tresc_diva = tresc_diva + '<div class="litera">A</div>';
  }

  document.getElementById("alfabet").innerHTML = tresc_diva;
}
