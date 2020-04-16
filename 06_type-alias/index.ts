// interface
interface ItodoItem {
    id: number;
    text: string;
    completed: boolean;
    // print(): void;
    print: () => void;
};

//TS will merge multiple interface definitions
interface ItodoItem {
    description: string;
}

// type alias
// union types
type TodoItem = {
    id: number;
    text: string;
    completed: boolean;
    // print: () => void;
    print(): void;
}

let todoItem: ItodoItem = {
    id: 1,
    text: 'Teach TypeScript',
    completed: false,
    print: function () {},
    description: 'Teach TypeScript'
};

let finalTodoItem: TodoItem = {
    id: 2,
    text: 'Teach Angular',
    completed: false,
    print: function () {}
}

export default null;