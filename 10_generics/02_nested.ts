

function flatten<T>(array: (T | T[])[]) {
    let flattened: T[] = [];

    // for (let i = 0; i < 10; i++) {}
    for (let item of array) {
        if (Array.isArray(item)) {
            flattened.push(...item);
        } else {
            flattened.push(item);
        }
    }
    return flattened;
}

export function nested() {
    const numbers = [1, 2, [3, 4, 5], 6, 7, [8, 9, 10]];
    const strings = ['hello', ['world', 'bye'], 'again'];

    console.log(flatten<number>(numbers));
    console.log(flatten<string>(strings));
}