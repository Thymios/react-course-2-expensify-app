// import * as firebase from 'firebase';

// // Initialize Firebase
// const config = {
//     apiKey: "AIzaSyAFdePvP9Wlt39U0SewUhJTdsYWzHt_k5Y",
//     authDomain: "expensify-bfb69.firebaseapp.com",
//     databaseURL: "https://expensify-bfb69.firebaseio.com",
//     projectId: "expensify-bfb69",
//     storageBucket: "expensify-bfb69.appspot.com",
//     messagingSenderId: "805824018024"
//   };
// firebase.initializeApp(config);

// const database = firebase.database();


// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// }, (e) => console.log('Error: ', e));

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// }, (e) => console.log('Error: ', e));

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// }, (e) => console.log('Error: ', e));

// // database
// //     .ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {
// //         const expenses = [];

// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });

// //         console.log(expenses);
// //     })
// //     .catch((e) => console.log('Error: ', e));


// // database
// //     .ref('expenses')
// //     .on('value', (snapshot) => {
// //         const expenses = [];

// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });

// //         console.log(expenses);
// //     }, (e) => console.log('Error: ', e));



// // database.ref('expenses').push({
// //     description: 'Gum',
// //     note: 'note 1',
// //     amount: 195,
// //     createdAt: 0
// // });





// /// List data

// // database.ref('notes').push({
// //     title: 'Course Topics',
// //     body: 'React, Angular, Python'
// // });

// // database.ref('notes/-LQOfheaP5tLa4nF58Uz').update({
// //     body: 'React, Java'
// // });

// /// Read data

// //// Subscribe
// // const onValueChange = database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job} at ${val.location.city}`);
// // }, (e) => {
// //     console.log('Error: ', e);
// // });

// // setTimeout(() => {
// //     database.ref('job').set('Manager');
// // }, 3500);

// // //// Unsubscribe
// // setTimeout(() => {
// //     database.ref().off('value', onValueChange);
// // }, 7000);


// // setTimeout(() => {
// //     database.ref('location/city').set('Boston');
// // }, 10500);

// //// Fetch once

// // database
// //     .ref()
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     })
// //     .catch((e) => console.log('Error fetching data: ', e));


// /// Create data

// //   database.ref().set({
// //       name: 'Thymios',
// //       age:34,
// //       job: 'Software Developer',
// //       location: {
// //           city: 'Philadelphia',
// //           country: 'United States'
// //       }
// //   }).then(() => {
// //       console.log('Data is saved');
// //   }).catch((error) => {
// //     console.log('error: ', error);
// //   });

// /// Update data

// // database.ref().update({
// //     job: 'Manager',
// //     location: {
// //         city: 'Boston'
// //     }
// // });

// // database.ref().update({
// //     job: 'Manager',
// //     'location/city': 'Boston'
// // });


// /// Remove data

// //database.ref('isSingle').set(null);

// // database
// //     .ref()
// //     .remove()
// //     .then(() => console.log('Removed data'))
// //     .catch((e) => console.log('error: ', e));