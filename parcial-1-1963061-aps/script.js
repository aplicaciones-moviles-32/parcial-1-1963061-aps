var feedArray = ["images/cbum.jpg", "images/compas.jpg", "images/playera.jpg",
    "images/cbum.jpg", "images/compas.jpg", "images/playera.jpg",
    "images/cbum.jpg", "images/compas.jpg", "images/playera.jpg",
    "images/cbum.jpg", "images/compas.jpg", "images/playera.jpg"
];

var imagencontainer = document.getElementById("contenedorimg");
var iniciocontainer = document.getElementById("mainpage");


function showpic(contenedor, size) {

    for (var i = 0; i < feedArray.length; i++) {
        var ioncol = document.createElement("ion-col");
        var imagen = document.createElement("img");
        ioncol.size = size;
        imagen.src = feedArray[i];
        ioncol.appendChild(imagen);
        contenedor.appendChild(ioncol);
    }

}
showpic(imagencontainer, "4");

var user = {
    "name": "Cbum",
    "correo": " cbum@gmail.com ",
    "username": "Cbum",
    "password": "hola",
    "pfp": "images/cbum.jpg",
    "fechadenacimiento": "1998",
    "followers": "10000000",
    "following": "1",
    "desc": "no pain no gain",
    "images": feedArray.length
};

var feed = [{
        "user": "@cbum",
        "imagen": "images/compas.jpg",
        "description": "ola",
        "idpub": "559"
    },
    {
        "user": "@cbum",
        "imagen": "images/playera.jpg",
        "description": "merch",
        "idpub": "69"
    },

];

for (var i = 0; i < feed.length; i++) {
    var card = document.createElement("ion-card");
    var cheader = document.createElement("ion-card-header");
    var csubtitle = document.createElement("ion-card-subtitle");
    var ctitle = document.createElement("ion-card-title");
    var containerimg = document.createElement("p");
    var img = document.createElement("img");
    var ccontent = document.createElement("ion-card-content");

    csubtitle.innerHTML = feed[i].idpub;
    ctitle.innerHTML = "<img src=\"" + feed[i].imagen + "\" width=\"50px\">" + "<strong>" + feed[i].user + "</strong>";
    img.src = feed[i].imagen;
    img.id = "imgfeed";
    ccontent.innerText = feed[i].description;


    containerimg.appendChild(img);
    ctitle.appendChild(containerimg);
    cheader.appendChild(csubtitle);
    cheader.appendChild(ctitle);
    card.appendChild(cheader);
    card.appendChild(ccontent);
    iniciocontainer.appendChild(card);
}

var username = document.getElementById("username");
var profpic = document.getElementById("pfp");
var seguidores = document.getElementById("followers");
var seguidos = document.getElementById("following");
var descripcion = document.getElementById("desc");
var publicaciones = document.getElementById("images");

username.innerHTML = "<strong>" + user.username + "</strong>";
profpic.src = user.pfp;
seguidores.innerHTML = "<strong>" + user.followers + "</strong>";
seguidos.innerHTML = "<strong>" + user.following + "</strong>";
descripcion.innerText = user.desc;
publicaciones.innerHTML = "<strong>" + user.images + "</strong>";