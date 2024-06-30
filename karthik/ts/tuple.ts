type ThreeCord = [x: number, y: number, z: number];

function add3Cord(c1: ThreeCord, c2: ThreeCord): ThreeCord {
  return [c1[0] + c2[0], c2[1] + c2[1], c2[2] + c2[2]];
}

console.log(add3Cord([1, 2, 3], [10, 20, 20]));

function simpleState(initial: string): [() => string, (v: string) => void] {
  let str: string = initial;

  return [
    () => str,
    (v: string) => {
      str = v;
    },
  ];
}

const [getVal, setVal] = simpleState('ttrr');
console.log(getVal());
setVal('ooooo');
console.log(getVal());
