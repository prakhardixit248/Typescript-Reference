
// type annotation
let fruits: string[] = ['Apple', 'Mango'];

// type annotation
let todos: { id: number, text: string, completed: boolean }[] = [
    {  id: 1, text: 'Teach TypeScript', completed: false },
    {  id: 2, text: 'Teach Angular', completed: false }
];

// type inference
let evenNumbers = [2, 4, 6, 8, 10];

console.log('fruits: ', fruits);
console.log('todos: ', todos);
console.log('evenNumbers: ', evenNumbers);
