const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
       //resolve('This is my resolved data');
       reject('Something went wrong');
    }, 1500);
});

console.log('before');

promise
    .then((data) => {
        console.log(data);
        return 'some data'
    })
    .then((str) => {
        console.log(str);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
               resolve('This is my second promise');
            }, 5000);
        });
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
    console.log('error: ', error)
});

console.log('after');