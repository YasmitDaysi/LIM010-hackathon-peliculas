
export const busquedaPeliculaSeries = (resultadoPeliculasSeries) => {
  let nuevowArrayObj = [];
  resultadoPeliculasSeries.forEach((Element) => {
    nuevowArrayObj = nuevowArrayObj.concat(Element.results);
  });

  const nuevoArrayString = nuevowArrayObj.map((Element) => {
    let obj;
    if (Element.title) {
      obj = {
        titulo: Element.title,
        imagen: Element.poster_path,
      };
    } if (Element.name) {
      obj = {
        titulo: Element.name,
        imagen: Element.poster_path,
      };
    }
    return obj;
  });
  return nuevoArrayString;
};

export const detalleP = (identifId, arrayObjetosP) => {
  const filtroDetalleP = arrayObjetosP.filter((element) => element.id === parseInt(identifId, 10));
  return filtroDetalleP;
};

export const detalleS = (detalleId, arrayObjetosS) => {
  const filtroDetalleS = arrayObjetosS.filter((element) => element.id === parseInt(detalleId, 10));
  return filtroDetalleS;
};

export const expobusqueda = () => Promise.all([
  fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=b8902142fac2162fc1931948fcaaa1af&language=en-US&page=1'),
  fetch('https://api.themoviedb.org/3/tv/popular?api_key=b8902142fac2162fc1931948fcaaa1af&language=en-US&page=1'),
]).then(([resultadoPeliculas, resultadoSeries]) => {
  const peliculas = resultadoPeliculas.json();
  const series = resultadoSeries.json();
  return Promise.all([peliculas, series]);
});

export const expormostrarPelicula = () => fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=b8902142fac2162fc1931948fcaaa1af&language=en-US&page=1')
  .then((response) => response.json())
  .then((resultado) => resultado);

export const expormostrarTodaspeliculas = () => fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=b8902142fac2162fc1931948fcaaa1af&language=en-US&page=1')
  .then((response) => response.json());

export const expormostrarSeries = () => fetch('https://api.themoviedb.org/3/tv/popular?api_key=b8902142fac2162fc1931948fcaaa1af&language=en-US&page=1')
  .then((response) => response.json());

export const expormostrarTseries = () => fetch('https://api.themoviedb.org/3/tv/popular?api_key=b8902142fac2162fc1931948fcaaa1af&language=en-US&page=1')
  .then((response) => response.json());
export const exopImagenesCarrousel = () => fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=b8902142fac2162fc1931948fcaaa1af&language=en-US&page=1')
  .then((response) => response.json());
