const houses = [
  { name: 'Atreides', planets: 'Calladan' },
  { name: 'Corrino', planets: ['Kaitan', 'Salusa Secundus'] },
  { name: 'Harkonnen', planets: ['Giedi Prime', 'Arrakis'] },
];

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

function findHouses(houses: string | House[], filter: (house: House) => boolean): HouseWithID[];

function findHouses(input: unknown, filter?: (h: House) => boolean): HouseWithID[] {
  const houses: House[] = typeof input === 'string' ? JSON.parse(input) : input;

  return (filter ? houses.filter(filter) : houses).map((house) => ({ id: houses.indexOf(house), ...house }));
}

console.log(findHouses(JSON.stringify(houses), ({ name }) => name === 'Atreides'));

console.log(findHouses(houses, ({ name }) => name === 'Harkonnen'));
