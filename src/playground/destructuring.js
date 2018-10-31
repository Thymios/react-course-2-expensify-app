//
// Object Destructuring
//

const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Athens',
        temp: 92
    }
};

const {name: firstName = 'Anonymous', age} = person;
//const name = person.name;
//const age = person.age;

console.log(`${firstName} is ${age}.`);

const {city, temp: temperature} = person.location;

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}.`);
}


const book = {
    tittle: 'Ego is the Enemey',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName); // Penguin or Self-Published

//
// Array desructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, town, state = 'New York'] = address;

console.log(`You are in ${town} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , medium] = item;

console.log(`A medium ${itemName} costs ${medium}`);