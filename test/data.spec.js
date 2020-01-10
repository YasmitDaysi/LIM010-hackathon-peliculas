import fetchMock from 'fetch-mock';
import {
  detalleS, detalleP, expobusqueda, expormostrarPelicula, expormostrarTodaspeliculas,
  expormostrarSeries, expormostrarTseries, exopImagenesCarrousel, busquedaPeliculaSeries,
} from '../src/data';


describe('busquedaPeliculaSeries', () => {
  it('debería ser una función', () => {
    expect(typeof busquedaPeliculaSeries).toBe('function');
  });
  it('deberia retornar un array de objetos', () => {
    const input = [
      {
        results: [{
          title: 'Ad Astra',
          poster_path: '/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg',
        }],
      },
      {
        results: [{
          name: 'Doctor Who',
          poster_path: '/cDDb7WA2i7cENhkEEjXEDrXGyNL.jpg',
        }],

      },
    ];
    const output = [
      {
        titulo: 'Ad Astra',
        imagen: '/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg',
      },
      {
        titulo: 'Doctor Who',
        imagen: '/cDDb7WA2i7cENhkEEjXEDrXGyNL.jpg',
      },
    ];
    expect(busquedaPeliculaSeries(input)).toEqual(output);
  });
});

describe('detalleP', () => {
  it('debería ser una función', () => {
    expect(typeof detalleP).toBe('function');
  });
  it('deberia retornar un array de objeto que cumple la condicion', () => {
    const inputArraObj = [
      {
        title: 'Ad Astra',
        poster_path: '/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg',
        id: 419704,
      },
      {
        title: 'The Grudge',
        poster_path: '/7OtwQv5BLIelqJ0JU3AwcDR0hjz.jpg',
        id: 465086,
      },
    ];
    const idPelicula = '419704';


    const output = [{
      title: 'Ad Astra',
      poster_path: '/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg',
      id: 419704,
    }];
    expect(detalleP(idPelicula, inputArraObj)).toEqual(output);
  });
});

describe('detalleS', () => {
  it('debería ser una función', () => {
    expect(typeof detalleS).toBe('function');
  });
  it('deberia retornar un array de objeto que cumple con la condicion', () => {
    const inputArraObjet = [
      {
        name: 'Doctor Who',
        poster_path: '/cDDb7WA2i7cENhkEEjXEDrXGyNL.jpg',
        id: 57243,
      },
      {
        name: 'The Simpsons',
        poster_path: '/yTZQkSsxUFJZJe67IenRM0AEklc.jpg',
        id: 456,
      }];
    const idSerie = '456';

    const output = [
      {
        name: 'The Simpsons',
        poster_path: '/yTZQkSsxUFJZJe67IenRM0AEklc.jpg',
        id: 456,
      }];
    expect(detalleS(idSerie, inputArraObjet)).toEqual(output);
  });
});

describe('expobusqueda', () => {
  it('debería ser una funcion', () => {
    expect(typeof expobusqueda).toBe('function');
  });
  it('deberia retornar una un array de objetos', (done) => {
    const data1 = {
      results: [
        {
          poster_path: '/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg',
          id: 512200,
        },
      ],
    };
    const data2 = {
      results: [
        {
          poster_path: '/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg',
          id: 512200,
        },
      ],
    };
    fetchMock.get('https://api.themoviedb.org/3/movie/upcoming?api_key=b8902142fac2162fc1931948fcaaa1af&language=en-US&page=1', data1);
    fetchMock.get('https://api.themoviedb.org/3/tv/popular?api_key=b8902142fac2162fc1931948fcaaa1af&language=en-US&page=1', data2);
    return expobusqueda().then((respuesta) => {
      expect(respuesta).toEqual([data1, data2]);
      done();
    });
  });
});

describe('expormostrarPelicula', () => {
  it('debería ser una funcion', () => {
    expect(typeof expormostrarPelicula).toBe('function');
  });
  it('deberia retornar un objeto', (done) => {
    const promesa1 = {
      results: [
        {
          poster_path: '/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg',
          id: 512200,
        },
      ],
    };
    fetchMock.get('https://api.themoviedb.org/3/movie/upcoming?api_key=b8902142fac2162fc1931948fcaaa1af&language=en-US&page=1', promesa1, { overwriteRoutes: true });
    return expormostrarPelicula().then((respuesta) => {
      expect(respuesta).toEqual(promesa1);
      done();
    });
  });
});

describe('expormostrarTodaspeliculas', () => {
  it('debería ser una funcion', () => {
    expect(typeof expormostrarTodaspeliculas).toBe('function');
  });
  it('deberia retornar un objeto', (done) => {
    const promesa2 = {
      results: [
        {
          poster_path: '/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg',
          id: 512200,
        },
      ],
    };
    fetchMock.get('https://api.themoviedb.org/3/movie/upcoming?api_key=b8902142fac2162fc1931948fcaaa1af&language=en-US&page=1', promesa2, { overwriteRoutes: true });
    return expormostrarTodaspeliculas().then((resolved) => {
      expect(resolved).toEqual(promesa2);
      done();
    });
  });
});

describe('expormostrarSeries', () => {
  it('debería ser una funcion', () => {
    expect(typeof expormostrarSeries).toBe('function');
  });
  it('deberia retornar un objeto', (done) => {
    const promesa3 = {
      results: [
        {
          poster_path: '/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg',
          id: 512200,
        },
      ],
    };
    fetchMock.get('https://api.themoviedb.org/3/tv/popular?api_key=b8902142fac2162fc1931948fcaaa1af&language=en-US&page=1', promesa3, { overwriteRoutes: true });
    return expormostrarSeries().then((resolved) => {
      expect(resolved).toEqual(promesa3);
      done();
    });
  });
});

describe(' expormostrarSeries', () => {
  it('debería ser una funcion', () => {
    expect(typeof expormostrarSeries).toBe('function');
  });
  it('deberia retornar un objeto', (done) => {
    const promesa4 = {
      results: [
        {
          poster_path: '/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg',
          id: 512200,
        },
      ],
    };
    fetchMock.get('https://api.themoviedb.org/3/tv/popular?api_key=b8902142fac2162fc1931948fcaaa1af&language=en-US&page=1', promesa4, { overwriteRoutes: true });
    return expormostrarSeries().then((resolved) => {
      expect(resolved).toEqual(promesa4);
      done();
    });
  });
});

describe(' expormostrarTseries', () => {
  it('debería ser una funcion', () => {
    expect(typeof expormostrarTseries).toBe('function');
  });
  it('deberia retornar un objeto', (done) => {
    const promesa5 = {
      results: [
        {
          poster_path: '/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg',
          id: 512200,
        },
      ],
    };
    fetchMock.get('https://api.themoviedb.org/3/tv/popular?api_key=b8902142fac2162fc1931948fcaaa1af&language=en-US&page=1', promesa5, { overwriteRoutes: true });
    return expormostrarTseries().then((resolved) => {
      expect(resolved).toEqual(promesa5);
      done();
    });
  });
});

describe('exopImagenesCarrousel', () => {
  it('debería ser una funcion', () => {
    expect(typeof exopImagenesCarrousel).toBe('function');
  });
  it('deberia retornar un objeto', (done) => {
    const promesa6 = {
      results: [
        {
          poster_path: '/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg',
          id: 512200,
        },
      ],
    };
    fetchMock.get('https://api.themoviedb.org/3/tv/popular?api_key=b8902142fac2162fc1931948fcaaa1af&language=en-US&page=1', promesa6, { overwriteRoutes: true });
    return exopImagenesCarrousel().then((resolved) => {
      expect(resolved).toEqual(promesa6);
      done();
    });
  });
});
