fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=b8902142fac2162fc1931948fcaaa1af&language=en-US&page=1')
    .then((response) => response.json())
    .then(resultado => mostrarpeliculas(resultado));

fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=b8902142fac2162fc1931948fcaaa1af&language=en-US&page=1')
    .then((response) => response.json())
    .then(resultado => mostrarTodaspeliculas(resultado));

fetch('https://api.themoviedb.org/3/tv/popular?api_key=b8902142fac2162fc1931948fcaaa1af&language=en-US&page=1')  
     .then((response)=>response.json())
    .then(contenido => mostrarSeries(contenido));

fetch('https://api.themoviedb.org/3/tv/popular?api_key=b8902142fac2162fc1931948fcaaa1af&language=en-US&page=1')  
    .then((response)=>response.json())
    .then(contenido => mostrarTodasSeries(contenido));

const mostrarpeliculas = (peliculas)=>{ 
    for(let i = 0; i < 12; i ++){
        const contenedorP = document.getElementById("mostrarP");
        const divmostrarP = document.createElement("div");
        divmostrarP.style.backgroundImage = "url('https://image.tmdb.org/t/p/original" + peliculas.results[i].poster_path +"')";
        divmostrarP.setAttribute("class","cajas");
        contenedorP.appendChild(divmostrarP);
    }
};
const mostrarTodaspeliculas =(todasPeliculas)=>{      
    todasPeliculas.results.forEach((element) => {
          const todasPeliculas = document.getElementById("todasPeliculas");
          const divTodasPeliculas = document.createElement("div");
          divTodasPeliculas.style.backgroundImage = "url('https://image.tmdb.org/t/p/original" + element.poster_path +"')";
          divTodasPeliculas.setAttribute("class","cajas")
          todasPeliculas.appendChild(divTodasPeliculas);
      });
      };
const mostrarSeries = (series)=>{
    for(let i = 0; i< 12; i++){
        const  contenedorS = document.getElementById("mostrarS");
        const divmostrarS = document.createElement("div");
        divmostrarS.style.backgroundImage= "url('https://image.tmdb.org/t/p/original" + series.results[i].poster_path + "')";
        divmostrarS.setAttribute("class","cajas")
        contenedorS.appendChild(divmostrarS);
    }
}
const  mostrarTodasSeries = (todasSeries)=>{
    todasSeries.results.forEach((element)=> {
        const  todasSeries = document.getElementById("todasSeries");
        const divTodasSeries = document.createElement("div");
        divTodasSeries.style.backgroundImage= "url('https://image.tmdb.org/t/p/original" + element.poster_path + "')";
        divTodasSeries.setAttribute("class","cajas")
        todasSeries.appendChild(divTodasSeries);
    });
}
const vista1 = document.getElementById("vista1");
const verMasPeliculas = document.getElementById("verMasPeliculas");
const secPeliculas = document.getElementById("secPeliculas");
const verMasSeries = document.getElementById("verMasSeries");
const secSeries = document.getElementById("secSeries");

verMasPeliculas.addEventListener("click",()=>{
    vista1.classList.add("hide");
    secPeliculas.classList.remove("hide");
})

verMasSeries.addEventListener("click",()=>{
    secSeries.classList.remove('hide');
    vista1.classList.add('hide');

})



