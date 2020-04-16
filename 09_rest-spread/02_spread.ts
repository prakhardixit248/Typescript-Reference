
const defaultStyles = {
    fontFamily: 'Arial',
    fontWeight: 'bold'
};

const userStyles = {
    color: 'blue',
    fontWeight: 700
};

// spread
const finalStyles = {
    ...defaultStyles,
    ...userStyles
};

const arr = [10, 20, 30];
const anotherArr = [40, 50, 60];

const newArr = [...arr, ...anotherArr];

export function spread() {
    console.log('user styles: ', finalStyles);
    console.log('new array: ', newArr);
}