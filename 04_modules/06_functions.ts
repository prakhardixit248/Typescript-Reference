
export function sum(x: number, y: number): number {
    return x + y;
}

export function createTodo(): { id: number, text: string, completed: boolean } {
    return {
        id: 1,
        text: 'Teach TypeScript',
        completed: true
    };
}

// signature of callback:
// 1. paramater: {data: string}
// 2. return type: string
export let callback: (x: string, y: {data: string}) => string;
// after some lines of code....
// structure of repsonse is:
//    response = string and  { data: 'hello' }
callback = function (message, response): string {
    return message + ' ' + response.data;
};