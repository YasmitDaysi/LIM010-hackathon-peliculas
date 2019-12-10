fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=b8902142fac2162fc1931948fcaaa1af&language=en-US&page=1')
    .then((response) => response.json())
    .then(resultado => mostrarpeliculas(resultado));

fetch('https://api.themoviedb.org/3/tv/popular?api_key=b8902142fac2162fc1931948fcaaa1af&language=en-US&page=1')
    .then((response) => response.json())
    .then(contenido => mostrarSeries(contenido));


const mostrarpeliculas = (peliculas) => {
    for (let i = 0; i < 12; i++) {
        const contenedorP = document.getElementById("mostrarP");
        const divmostrarP = document.createElement("div");
        divmostrarP.style.backgroundImage = "url('https://image.tmdb.org/t/p/original" + peliculas.results[i].poster_path + "')";
        console.log(peliculas.results[i])
        divmostrarP.setAttribute("class", "cajas");
        contenedorP.appendChild(divmostrarP);
    }
};


const mostrarSeries = (series) => {
    for (let i = 0; i < 12; i++) {
        const contenedorS = document.getElementById("mostrarS");
        const divmostrarS = document.createElement("div");
        divmostrarS.style.backgroundImage = "url('https://image.tmdb.org/t/p/original" + series.results[i].poster_path + "')";
        divmostrarS.setAttribute("class", "cajas")
        contenedorS.appendChild(divmostrarS);
    }
}
