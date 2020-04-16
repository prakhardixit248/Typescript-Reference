
// Browsers - window: global object
// NodeJS - global: global object
// COnverting a file to module enables STRICT MODE

// either using import or export statement will convert the file into a module, thus enabling strict mode.

// import { heading, separator } from "../util";

let todoItem: { id: number; text: string; completed: boolean; print: () => void } = {
    id: 1,
    text: 'Teach TypeScript',
    completed: false,
    print: function () {
        // this:todoItem
        console.log('is global: ', this === global);
        if (this === todoItem) {
            console.log('stringified result is: ', JSON.stringify(this));
        }
    }
};

// "this": runtime concept
// the value of this: determined by how a function gets called
console.log('\n\n\calling todoItem.print()');
todoItem.print();

console.log('\n\nreferencing todoItem.print in a variable and then calling it');
let printFn = todoItem.print;
printFn();


let finalTodoItem: { id: number; text: string; completed: boolean; print: () => void } = {
    id: 2,
    text: 'Teach Angular',
    completed: false,
    print: function () {
        // setTimeout(function () {
        //     // this:finalTodoItem
        //     console.log('is global: ', this === global);
        //     if (this === finalTodoItem) {
        //         console.log('stringified result is: ', JSON.stringify(this));
        //     }
        //     console.log('value of this: ', this);
        // }, 2000);

        // before setTimeout: value of this: finalTodoItem

        // preserves the value "this"
        setTimeout(() => {
            // this:finalTodoItem
            console.log('is global: ', this === global);
            if (this === finalTodoItem) {
                console.log('stringified result is: ', JSON.stringify(this));
            }
        }, 2000);
    }
}

console.log('\n\n\calling finalTodoItem.print() whose code is inside a timeout');
finalTodoItem.print();

// export default null;