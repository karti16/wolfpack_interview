function simpleStateGeneric<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;

  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

const [getValGen, setValGen] = simpleStateGeneric<number | null>(null);
console.log(getValGen());
setValGen(98);
console.log(getValGen());
