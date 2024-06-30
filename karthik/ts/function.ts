function addNumber(a: number, b: number) {
  return a + b;
}

export default addNumber;

export const addString = (str1: string, str2: string = ''): string => `${str1} ${str2}`;

export const format = (title: string, param: string | number): string => `${title} ${param}`;

export const fetchData = (url: string): Promise<string> => Promise.resolve('Data fetched');

export function introduce(salutation: string, ...name: string[]) {
  return `${salutation} ${name.join(', ')}`;
}

export function getName(user: { first: string; last: string }): string {
  return `${user?.first} ${user?.last}`;
}
