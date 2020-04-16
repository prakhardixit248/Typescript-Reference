import { heading } from "../util";

let x: string; // "abc" "" "hello-world"
// literal type
let str: 'hello'; // value becomes the type

type CartItem = {
    name: string;
    quantity: number;
}

// literal type - restrict to set of values
// union types - combine multiple literal types
// type alias - Make the type reusable

type PaymentTypes = 'cash' | 'online_payment' | 'credit_card';

function checkout(item: CartItem, paymentTypes: PaymentTypes) {
    // template  literal: ` asdfsdf ${} `
    console.log(`checking out ${item.name} via ${paymentTypes}`);
}

export function literalTypes() {
    heading('Literal types');
    checkout({name: 'pen', quantity: 1 }, 'cash');
    checkout({name: 'pencil', quantity: 1 }, 'online_payment');
    // checkout({name: 'laptop', quantity: 1 }, 'nowhere');
}