import {
  detalleS, detalleP, expobusqueda, expormostrarPelicula, expormostrarTodaspeliculas,
  expormostrarSeries, expormostrarTseries, exopImagenesCarrousel, busquedaPeliculaSeries,
} from './data.js';

const vista1 = document.getElementById('vista1');
const verMasPeliculas = document.getElementById('verMasPeliculas');
const secPeliculas = document.getElementById('secPeliculas');
const verMasSeries = document.getElementById('verMasSeries');
const secSeries = document.getElementById('secSeries');
const todasPeliculas = document.getElementById('todasPeliculas');
const contTodasSeries = document.getElementById('todasSeries');
const vistaCaracteristicas = document.getElementById('vistaCaracteristicas');
const contenedorS = document.getElementById('mostrar-serie');
const contenedorP = document.getElementById('mostrarP');
const idAdelante = document.getElementById('id-adelante');
const idAtras = document.getElementById('id-atras');
const img = document.getElementById('imagen');
const titulo = document.getElementById('titulo-panel2');
const descripcion = document.getElementById('descripcion-panel');
const titulo1 = document.getElementById('titulo1');
const Movies = document.getElementById('Movies');
const TvSeries = document.getElementById('TvSerie');


const optenerImagenesCarrousel = (ultimasPeliculas) => {
  const imagenes = ultimasPeliculas.results;
  let cont = 0;

  img.src = `https://image.tmdb.org/t/p/original${imagenes[cont].backdrop_path}`;
  titulo.innerHTML = `<h2>${imagenes[cont].title}</h2>`;
  descripcion.innerHTML = `<p>${imagenes[cont].overview}</p>`;
  idAdelante.addEventListener('click', () => {
    titulo.innerHTML = '';
    descripcion.innerHTML = '';
    if (cont < imagenes.length - 1) {
      cont += 1;
      img.src = `https://image.tmdb.org/t/p/original${imagenes[cont].backdrop_path}`;
      const tituloDiv = document.createTextNode(imagenes[cont].title);
      titulo.appendChild(tituloDiv);
      const descripcionText = document.createTextNode(imagenes[cont].overview);
      descripcion.appendChild(descripcionText);
    } else {
      cont = 0;
      img.src = `https://image.tmdb.org/t/p/original${imagenes[0].backdrop_path}`;
      titulo.innerHTML = `<h2>${imagenes[0].title}</h2>`;
      descripcion.innerHTML = `<p>${imagenes[0].overview}</p>`;
    }
  });
  idAtras.addEventListener('click', () => {
    titulo.innerHTML = '';
    descripcion.innerHTML = '';
    if (cont > 0) {
      cont -= 1;
      img.src = `https://image.tmdb.org/t/p/original${imagenes[cont].backdrop_path}`;
      const tituloDiv = document.createTextNode(imagenes[cont].title);
      titulo.appendChild(tituloDiv);
      const descripcionTextt = document.createTextNode(imagenes[cont].overview);
      descripcion.appendChild(descripcionTextt);
    } else {
      img.src = `https://image.tmdb.org/t/p/original${imagenes[imagenes.length - 1].backdrop_path}`;
      titulo.innerHTML = `<h2>${imagenes[imagenes.length - 1].title}</h2>`;
      descripcion.innerHTML = `<p>${imagenes[imagenes.length - 1].overview}</p>`;
      cont = imagenes.length - 1;
    }
  });
};

const mostrarFiltro = (arrayObjetc, texto) => {
  const valorFiltrado = arrayObjetc.filter((element) => (
    element.titulo.toLowerCase().indexOf(texto.toLowerCase()) !== -1));
  let result = '';
  valorFiltrado.forEach((Element) => {
    result += `<img class='cajas ' src="https://image.tmdb.org/t/p/original${Element.imagen}"/>`;
  });
  vista1.classList.add('hide');
  vistaCaracteristicas.classList.remove('hide');
  vistaCaracteristicas.innerHTML = result;
};

const mostraPelicula = (arrayObjetc) => {
  let resultadoS = '';
  arrayObjetc.forEach((element) => {
    resultadoS
      += `
      <div class="divContenedor">
      <div class="divTituloDisc">
      <h2 class="titulo">${element.title}</h2>
<p class="descripcion">${element.overview}</p>
</div> 
<img class="imagenes" src="https://image.tmdb.org/t/p/original${element.poster_path}"/>
</div>`;
    vista1.classList.add('hide');
    vistaCaracteristicas.classList.remove('hide');
    vistaCaracteristicas.innerHTML = resultadoS;
  });
};

const mostrarpeliculas = (peliculas) => {
  for (let i = 0; i < 12; i += 1) {
    const divmostrarP = document.createElement('div');
    divmostrarP.style.backgroundImage = `url('https://image.tmdb.org/t/p/original${peliculas.results[i].poster_path}')`;
    divmostrarP.setAttribute('class', 'cajas');
    divmostrarP.setAttribute('id', peliculas.results[i].id);
    contenedorP.appendChild(divmostrarP);
    divmostrarP.addEventListener('click', (e) => {
      const identificadorP = (e.target.id);
      const arrayObjetosP = peliculas.results;
      mostraPelicula(detalleP(identificadorP, arrayObjetosP));
    });
  }
};
const mostrarSerie = (arrayObject) => {
  let resultadoS = '';
  arrayObject.forEach((element) => {
    resultadoS
      += `
      <div class="divContenedor">
    <div class="divTituloDisc">
      <h2 class="titulo">${element.name}</h2>
<p class="descripcion">${element.overview}</p>
</div> 
<img  class="imagenes" src="https://image.tmdb.org/t/p/original${element.poster_path}"/>
</div> `;
    vista1.classList.add('hide');
    vistaCaracteristicas.classList.remove('hide');
    vistaCaracteristicas.innerHTML = resultadoS;
  });
};

const mostrarSeries = (series) => {
  for (let i = 0; i < 12; i += 1) {
    const divmostrarS = document.createElement('div');
    divmostrarS.style.backgroundImage = `url('https://image.tmdb.org/t/p/original${series.results[i].poster_path}')`;
    divmostrarS.setAttribute('class', 'cajas');
    divmostrarS.setAttribute('id', series.results[i].id);
    contenedorS.appendChild(divmostrarS);
    divmostrarS.addEventListener('click', (e) => {
      const identificadorS = e.target.id;
      const arrayObjetosS = series.results;
      mostrarSerie(detalleS(identificadorS, arrayObjetosS));
    });
  }
};

const mostraObjetoTodaP = (objetoTodasP) => {
  let creaElemento = '';
  creaElemento
    += `
    <div class="divContenedor">
    <div class="divTituloDisc">
    <h2 class="titulo">${objetoTodasP.title}</h2>
       <p class="descripcion">${objetoTodasP.overview}</p>
       </div> 
       <img  class="imagenes" src="https://image.tmdb.org/t/p/original${objetoTodasP.poster_path}"/> 
       </div>  `;
  secPeliculas.classList.add('hide');
  vistaCaracteristicas.classList.remove('hide');
  vistaCaracteristicas.innerHTML = creaElemento;
};


const mostrarTodaspeliculas = (traeTodasPeliculas) => {
  traeTodasPeliculas.results.forEach((element) => {
    const divTodasPeliculas = document.createElement('div');
    divTodasPeliculas.style.backgroundImage = `url('https://image.tmdb.org/t/p/original${element.poster_path}')`;
    divTodasPeliculas.setAttribute('class', 'cajas');
    divTodasPeliculas.setAttribute('id', element.id);
    todasPeliculas.appendChild(divTodasPeliculas);
    divTodasPeliculas.setAttribute('id', element.id);
    divTodasPeliculas.addEventListener('click', () => {
      mostraObjetoTodaP(element);
    });
  });
};


const mostraObjetoTodaS = (objetoTodasS) => {
  let creaElemento = '';
  creaElemento
    += `
    <div class="divContenedor">
    <div class="divTituloDisc">
    <h2 class="titulo">${objetoTodasS.name}</h2>
       <p class="descripcion">${objetoTodasS.overview}</p>
       </div> 
       <img  class="imagenes" src="https://image.tmdb.org/t/p/original${objetoTodasS.poster_path}"/> 
       </div>`;
  secSeries.classList.add('hide');
  vistaCaracteristicas.classList.remove('hide');
  vistaCaracteristicas.innerHTML = creaElemento;
};


const mostrarTodasSeries = (todasSeries) => {
  todasSeries.results.forEach((element) => {
    const divTodasSeries = document.createElement('div');
    divTodasSeries.style.backgroundImage = `url('https://image.tmdb.org/t/p/original${element.poster_path}')`;
    divTodasSeries.setAttribute('class', 'cajas');
    divTodasSeries.setAttribute('id', element.id);
    contTodasSeries.appendChild(divTodasSeries);
    divTodasSeries.addEventListener('click', () => {
      mostraObjetoTodaS(element);
    });
  });
};

expobusqueda().then((responseText) => {
  const data = busquedaPeliculaSeries(responseText);
  document.getElementById('boton-buscar').addEventListener('click', () => {
    const valorTexto = document.getElementById('mi-Busqueda');
    vista1.classList.add('hide');
    vistaCaracteristicas.classList.remove('hide');
    mostrarFiltro(data, valorTexto.value);
  });
});


expormostrarPelicula().then((data) => mostrarpeliculas(data));
expormostrarTodaspeliculas().then((data) => mostrarTodaspeliculas(data));
expormostrarSeries().then((data) => mostrarSeries(data));
expormostrarTseries().then((contenido) => mostrarTodasSeries(contenido));
exopImagenesCarrousel().then((resultado) => optenerImagenesCarrousel(resultado));

verMasPeliculas.addEventListener('click', () => {
  vista1.classList.add('hide');
  secPeliculas.classList.remove('hide');
});

verMasSeries.addEventListener('click', () => {
  secSeries.classList.remove('hide');
  vista1.classList.add('hide');
});
Movies.addEventListener('click', () => {
  vista1.classList.add('hide');
  vistaCaracteristicas.classList.add('hide');
  secPeliculas.classList.remove('hide');
  secSeries.classList.add('hide');
});
TvSeries.addEventListener('click', () => {
  vista1.classList.add('hide');
  vistaCaracteristicas.classList.add('hide');
  secSeries.classList.remove('hide');
  secPeliculas.classList.add('hide');
});

titulo1.addEventListener('click', () => {
  secSeries.classList.add('hide');
  secPeliculas.classList.add('hide');
  vistaCaracteristicas.classList.add('hide');
  vista1.classList.remove('hide');
});
