// Importamos la función `example`
import { busquedaPeliculaSeries, detalleP, detalleS } from '../src/data';

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
