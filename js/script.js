const series = {
    "Loki": {
        "fondo": "url(assets/fondo_Loki.png)",
        "logo": "assets/Logos/logo_loki.png",
        "iconos": {
            "idade": "assets/iconos/12+.png",
            "audiodescripcion": "assets/iconos/audiodescripcion.png",
            "subtitulos": "assets/iconos/subtitulos.png"
        },
        "ano": "2021 - 2023",
        "tempadas": "2 tempadas",
        "categorías": "Ciencia ficción, Fantástica, Superhéroe, Acción e aventura",
        "descricion": "A nova serie Loki, de Marvel Studios, empeza alí onde terminou Vengadores: Endgame. Nela, o voluble vilán Loki (Tom Hiddleston) volve gañarse o alcume de Dios do Engano. Kate Herron é a súa directora e Michael Waldron o guionista principal.",
        "trailer": `<button onclick="mostrarPopupLoki()" class="informacion__trailer">TRAILER</button>`
    },

    "Percy": {
        "fondo": "url(assets/fondo_percy.png)",
        "logo": "assets/Logos/logo_percy.png",
        "iconos": {
            "idade": "assets/iconos/12+.png",
            "audiodescripcion": "assets/iconos/audiodescripcion.png",
            "subtitulos": "assets/iconos/subtitulos.png"
        },
        "ano": "2023",
        "tempadas": "1 tempada",
        "categorías": "Familiar, Fantástica, Acción e aventura",

        "descricion": "Percy Jackson emprende unha perigosa misión. Deixando atrás aos monstros e burlando aos deuses, percorrerá Estados Unidos para devolver o Raio Mestre de Zeus e evitar a guerra. Con axuda dos seus compañeiros de misión, Annabeth e Grover, a viaxe de Percy achegarao máis ás respostas que busca: como encaixar nun mundo que lle é ajenoy se logrará entender o seu destino.",
        "trailer": `<button onclick="mostrarPopupPercy()" class="informacion__trailer">TRAILER</button>`
    },
    "Mandalorian": {
        "fondo": "url(assets/fondo_mandalorian.png)",
        "logo": "assets/Logos/logo_mandalorian.png",
        "iconos": {
            "idade": "assets/iconos/12+.png",
            "audiodescripcion": "assets/iconos/audiodescripcion.png",
            "subtitulos": "assets/iconos/subtitulos.png"
        },
        "ano": "2019 - 2023",
        "tempadas": "3 tempadas",
        "categorías": "Ciencia ficción, Acción e aventura",
        "descricion": "Tras a caída do Imperio, un solitario Mandaloriano viaxa por unha galaxia sen lei co seu protexido: Grogu.",
        "trailer": `<button onclick="mostrarPopupMandalorian()" class="informacion__trailer">TRAILER</button>`
    },
    "Solo": {
        "fondo": "url(assets/fondo_asesinatos.png)",
        "logo": "assets/Logos/logo_solo_asesinatos.png",
        "iconos": {
            "idade": "assets/iconos/16+.png",
            "audiodescripcion": "assets/iconos/audiodescripcion.png",
            "subtitulos": "assets/iconos/subtitulos.png"
        },
        "ano": "2021 - 2023",
        "tempadas": "3 tempadas",
        "categorías": "Misterio, Drama, Comedia, Policiaca",
        "descricion": "Aos veciños do Upper West Side Charles, Oliver e Mabel únelles a súa paixón polos crimes reais. Cando un residente do seu edificio morre, o trío decide resolver o misterio e gravar un podcast relatándoo.",
        "trailer": `<button onclick="mostrarPopupSolo()" class="informacion__trailer">TRAILER</button>`
    }
}

let body = document.querySelector("body");
let informacionLogo = document.getElementById("informacionLogo");
let informacionIdade = document.getElementById("informacionIdade");
let informacionAnos = document.getElementById("informacionAnos");
let informacionTempada = document.getElementById("informacionTempada");
let informacionCategorias = document.getElementById("informacionCategorias");
let informacionDescripcion = document.getElementById("informacionDescripcion");
let informacionBoton = document.getElementById("informacionBoton");



function botonSeries(serie) {
    switch (serie) {
        case "Loki":
            body.style.background = series.Loki.fondo;
            informacionLogo.src = series.Loki.logo;
            informacionLogo.alt = "Logo de la serie Loki";
            informacionIdade.src = series.Loki.iconos.idade;
            informacionIdade.alt = "A partir de 12 anos";
            informacionAnos.textContent = series.Loki.ano;
            informacionTempada.textContent = series.Loki.tempadas;
            informacionCategorias.textContent = series.Loki.categorías;
            informacionDescripcion.textContent = series.Loki.descricion;
            informacionBoton.innerHTML = series.Loki.trailer;
            break;
        case "Percy":
            body.style.background = series.Percy.fondo;
            informacionLogo.src = series.Percy.logo;
            informacionLogo.alt = "Logo de la serie Percy Jackson";
            informacionIdade.src = series.Percy.iconos.idade;
            informacionIdade.alt = "A partir de 12 anos";
            informacionAnos.textContent = series.Percy.ano;
            informacionTempada.textContent = series.Percy.tempadas;
            informacionCategorias.textContent = series.Percy.categorías;
            informacionDescripcion.textContent = series.Percy.descricion;
            informacionBoton.innerHTML = series.Percy.trailer;

            break;
        case "Mandalorian":
            body.style.background = series.Mandalorian.fondo;
            informacionLogo.src = series.Mandalorian.logo;
            informacionLogo.alt = "Logo de la serie Star Wars Mandalorian";
            informacionIdade.src = series.Mandalorian.iconos.idade;
            informacionIdade.alt = "A partir de 12 anos";
            informacionAnos.textContent = series.Mandalorian.ano;
            informacionTempada.textContent = series.Mandalorian.tempadas;
            informacionCategorias.textContent = series.Mandalorian.categorías;
            informacionDescripcion.textContent = series.Mandalorian.descricion;
            informacionBoton.innerHTML = series.Mandalorian.trailer;

            break;
        case "Solo":
            body.style.background = series.Solo.fondo;
            informacionLogo.src = series.Solo.logo;
            informacionLogo.alt = "Logo de la serie Sólo asesinatos en el edificio";
            informacionIdade.src = series.Solo.iconos.idade;
            informacionIdade.alt = "A partir de 16 anos";
            informacionAnos.textContent = series.Solo.ano;
            informacionTempada.textContent = series.Solo.tempadas;
            informacionCategorias.textContent = series.Solo.categorías;
            informacionDescripcion.textContent = series.Solo.descricion;
            informacionBoton.innerHTML = series.Solo.trailer;

            break;
        default:
            Error
            break;
    }
}

function mostrarPopupLoki() {
    let poupPai = document.getElementById("poupPai");

    poupPai.innerHTML =
        `  <div id="popup" class="popup">
    <div class="popup__contenedor">
      <div id="poupIframe">

      <iframe width="560" height="315" src="https://www.youtube.com/embed/uz1CREWyISo?si=iOdaG6PlbU2kQTZm"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>

      </div>
      <div class="poup__pechar">
        <button onclick="cerrarPopup()" class="popup__buton">CERRAR</button>
</div>
      </div>
    </div>`
}

function mostrarPopupPercy() {
    let poupPai = document.getElementById("poupPai");

    poupPai.innerHTML =
        `  <div id="popup" class="popup">
    <div class="popup__contenedor">
      <div id="poupIframe">

      <iframe width="1250" 
      height="703"
      src="https://www.youtube.com/embed/cumMY5QgZ6c" title="Percy - Tráiler | Filmin" frameborder="0" allow="accelerometer;
       autoplay;
       clipboard-write;
       encrypted-media;
       gyroscope; picture-in-picture; web-share" allowfullscreen>
       </iframe>
      
      </div>
      <div class="poup__pechar">
        <button onclick="cerrarPopup()" class="popup__buton">CERRAR</button>
</div>
      </div>
    </div>`
}

function mostrarPopupMandalorian() {
    let poupPai = document.getElementById("poupPai");

    poupPai.innerHTML =
        `  <div id="popup" class="popup">
    <div class="popup__contenedor">
      <div id="poupIframe">

      <iframe width="1250"
            height="703"
            src="https://www.youtube.com/embed/IqZ48OcUHD8" title="STAR WARS : THE MANDALORIAN Tráiler Español (2019)" frameborder="0" allow="accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share" allowfullscreen>

    </iframe>
      
      </div>
      <div class="poup__pechar">
        <button onclick="cerrarPopup()" class="popup__buton">CERRAR</button>
</div>
      </div>
    </div>`
}
function mostrarPopupSolo() {
    let poupPai = document.getElementById("poupPai");

    poupPai.innerHTML =
        `  <div id="popup" class="popup">
    <div class="popup__contenedor">
      <div id="poupIframe">

    <iframe 
        width="1250" 
        height="703"
        src="https://www.youtube.com/embed/kmgT20OXV1o" title="Solo Asesinatos en el Edificio | Tráiler Completo en español | Disney+" frameborder="0" allow="accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture; web-share" allowfullscreen>
    </iframe>
      
      </div>
      <div class="poup__pechar">
        <button onclick="cerrarPopup()" class="popup__buton">CERRAR</button>
</div>
      </div>
    </div>`
}

function cerrarPopup() {
    let popup = document.getElementById("popup");
    popup.remove()

}


