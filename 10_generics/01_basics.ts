
// generics
// type parameter T, K

function addToCollection<T>(item: T, collection: T[]) {
    let isAValidItem = true; // assume we write some logic to check validity

    if (isAValidItem) {
        collection.push(item);
    }
    console.log('collection: ', collection);
}

type User = {
    name: string;
    age: number;
}

export function basics() {
    let usersCollection: User[] = [];
    let user = { name: 'Anup', age: 20 };
    addToCollection<User>(user, usersCollection);

    let fruitsCollection = ['apple', 'mango'];
    let fruit = 'banana';
    addToCollection<string>(fruit, fruitsCollection);
}