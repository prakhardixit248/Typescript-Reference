
const person = {
    name: 'Anup',
    city: 'Delhi',
    address: 'some random address',
    nestedObj: {
        x: 10
    }
};


export function rest() {
    // destructuring
    // let { name, address, city, nestedObj: { x } } = person;
    // console.log(name, address, city, x);

    // destructuring + rest
    let { name, ...location } = person;
    console.log(name, location);

}