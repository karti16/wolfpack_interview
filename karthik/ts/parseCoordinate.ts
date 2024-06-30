interface Coordinate {
  x: number;
  y: number;
}

function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(str: string): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === 'string') {
    (arg1 as string).split(',').forEach((i) => {
      const [key, val] = i.split(':');
      coord[key as 'x' | 'y'] = parseInt(val, 10);
    });
  } else if (typeof arg1 === 'object') {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}

console.log(parseCoordinate(1, 2));
console.log(parseCoordinate({ x: 34, y: 55 }));
console.log(parseCoordinate('x:34,y:100'));
