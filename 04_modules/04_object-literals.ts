
function objectLiterals() {
    // string literal
    let str = 'hello'

    // boolean literal
    let valid = false;

    // object literal
    // type inference
    let todo = {
        id: 1,
        text: 'Teach TypeScript',
        completed: false
    };

    let anotherTodo: { id: number, text: string, completed: boolean } = {
        id: 2,
        text: 'Teach Angular',
        completed: false
    };

    console.log('todo: ', todo);
    console.log('another todo: ', anotherTodo);
}

export default objectLiterals;
