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
fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=b8902142fac2162fc1931948fcaaa1af&language=en-US&page=1")
        .then(response => response.json())
        .then(resultado => optenerImagenesCarrousel(resultado));

   Promise.all([
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=b8902142fac2162fc1931948fcaaa1af&language=en-US&page=1'),
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=b8902142fac2162fc1931948fcaaa1af&language=en-US&page=1')
      ]).then(([resultadoPeliculas, resultadoSeries]) => {
        const peliculas = resultadoPeliculas.json();
        const series = resultadoSeries.json();
        return Promise.all([peliculas, series])
      })
      .then((responseText) => {
        busquedaPeliculaSeries(responseText);
    
      }).catch((err) => {
        console.log(err);
      }); 

    const mostrarFiltro = (arrayObjetc,texto)=>{
         let valorFiltrado = arrayObjetc.filter((element) => 
             element.titulo.toLowerCase().indexOf(texto.toLowerCase()) !== -1);
            let result = '';
             valorFiltrado.forEach(Element => {
                result += `<img class='cajas ' src="https://image.tmdb.org/t/p/original${Element.imagen}"/>`;
              });
              document.getElementById(
                "vista1"
              ).innerHTML = result
              console.log(result);
    }

    const busquedaPeliculaSeries = (resultadoPeliculasSeries) => {
         let nuevowArrayObj = [];
            resultadoPeliculasSeries.forEach(Element => {  
            nuevowArrayObj = nuevowArrayObj.concat(Element.results); 
        })
        const nuevoArrayString = nuevowArrayObj.map(Element => {
            /* let x = Element.title ? {titulo: Element.title, imagen: Element.poster_path} :
             Element.name ? {titulo: Element.name, imagen: Element.poster_path} : 'no se encontro';
console.log(x);*/
           if(Element.title){
            return{
                   titulo: Element.title,
                   imagen: Element.poster_path,
               }
           } else if(Element.name){
               return{
                   titulo: Element.name,
                   imagen: Element.poster_path,
               }
           }
        });
        document.getElementById('boton-buscar').addEventListener("click",()=>{
            const valorTexto = document.getElementById('miBusqueda');
            mostrarFiltro(nuevoArrayString, valorTexto.value);
         });
    }
    const optenerImagenesCarrousel = (ultimasPeliculas) => {
        const imagenes = ultimasPeliculas.results;
        let cont = 0;
        const idAdelante = document.getElementById("idAdelante");
        const idAtras = document.getElementById("idAtras");
        const img = document.getElementById("imagen");
        let titulo = document.getElementById("titulo-panel2");
        const descripcion = document.getElementById("descripcion-panel");

        img.src = "https://image.tmdb.org/t/p/original"+imagenes[cont].backdrop_path;
        titulo.innerHTML = `<h2>${imagenes[cont].title}</h2>`
         descripcion.innerHTML =`<p>${imagenes[cont].overview}</p>`
        idAdelante.addEventListener("click", () => {
            titulo.innerHTML = "";
            descripcion.innerHTML= "";
             if (cont < imagenes.length - 1) {
                cont++;
                img.src = "https://image.tmdb.org/t/p/original" + imagenes[cont].backdrop_path;
                let tituloDiv = document.createTextNode(imagenes[cont].title); 
                titulo.appendChild(tituloDiv)
                const descripcionText = document.createTextNode(imagenes[cont].overview);
                descripcion.appendChild(descripcionText);
              } else {
                cont = 0;
                img.src = "https://image.tmdb.org/t/p/original" +imagenes[0].backdrop_path;
                titulo.innerHTML = `<h2>${imagenes[0].title}</h2>`
                descripcion.innerHTML =`<p>${imagenes[0].overview}</p>`
              }
            });
        idAtras.addEventListener("click", () => {
           titulo.innerHTML = "";
           descripcion.innerHTML = "";
          if (cont > 0) {
            cont--;
            img.src = "https://image.tmdb.org/t/p/original"+imagenes[cont].backdrop_path;
            let tituloDiv = document.createTextNode(imagenes[cont].title); 
                titulo.appendChild(tituloDiv);
            let descripcionTextt = document.createTextNode(imagenes[cont].overview);
                descripcion.appendChild(descripcionTextt);
          } else {
            img.src = "https://image.tmdb.org/t/p/original" + imagenes[imagenes.length - 1].backdrop_path;
            titulo.innerHTML = `<h2>${imagenes[imagenes.length - 1].title}</h2>`;
            descripcion.innerHTML =`<p>${imagenes[imagenes.length - 1].overview}</p>` ;     
            cont = imagenes.length - 1;
          }
        });
      };


const contenedorP = document.getElementById("mostrarP");
const mostrarpeliculas = (peliculas)=>{
    for(let i = 0; i < 12; i ++){
         const divmostrarP = document.createElement("div");
        divmostrarP.style.backgroundImage = "url('https://image.tmdb.org/t/p/original" + peliculas.results[i].poster_path+"')";
        divmostrarP.setAttribute("class","cajas");
        contenedorP.appendChild(divmostrarP);
    }
};

const  contenedorS = document.getElementById("mostrarS");

const mostrarSeries = (series)=>{
    for(let i = 0; i < 12; i++){
        const divmostrarS = document.createElement("div");
        divmostrarS.style.backgroundImage= "url('https://image.tmdb.org/t/p/original" + series.results[i].poster_path + "')";
        divmostrarS.setAttribute("class","cajas");
        contenedorS.appendChild(divmostrarS);
    }
}

const todasPeliculas = document.getElementById("todasPeliculas");

const mostrarTodaspeliculas =(traeTodasPeliculas)=>{      
    traeTodasPeliculas.results.forEach((element) => {
          const divTodasPeliculas = document.createElement("div");
          divTodasPeliculas.style.backgroundImage = "url('https://image.tmdb.org/t/p/original" + element.poster_path +"')";
          divTodasPeliculas.setAttribute("class","cajas")
          todasPeliculas.appendChild(divTodasPeliculas);
      });
      };


const  contTodasSeries = document.getElementById("todasSeries");

const  mostrarTodasSeries = (todasSeries)=>{
    todasSeries.results.forEach((element)=> {
        const divTodasSeries = document.createElement("div");
        divTodasSeries.style.backgroundImage = "url('https://image.tmdb.org/t/p/original" + element.poster_path + "')";
        divTodasSeries.setAttribute("class","cajas")
        contTodasSeries.appendChild(divTodasSeries);
    });
}
const infoSeriePelicula = ()=>{

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


    
