const path = require('path');
const fs = require('fs');

let onlineUsers = [{name: "Andrii", age: '22', city: "Lviv"},
    {name: 'Roman', age: '25', city: 'Dnipro'},
    {name: 'Yura', age: '50', city: 'Kyev'}];

let inPersonUsers = [{name: "Denis", age: '27', city: "Lemberg"},
    {name: 'Ruslan', age: '19', city: 'Semenyvka'},
    {name: 'Bogdan', age: '30', city: 'Lany'}];


// // ---------- Створити папку main -----------------// //
// fs.mkdir(path.join(__dirname, 'main'), (err => {
//     if (err) {
//         console.log(err);
//     }
// }))
//
//
// // ---------- Створити папку online в папці main -----------------// //
// fs.mkdir(path.join(__dirname, 'main', 'online'), (err => {
//     if (err) {
//         console.log(err);
//     }
// }))
//
//
// // ---------- Створити папку inPerson в папці main -----------------// //
// fs.mkdir(path.join(__dirname, 'main', 'inPerson'), (err => {
//     if (err) {
//         console.log(err);
//     }
// }))
//
//
// //---------- створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів,
// // але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка -----------------// //
// for (let i = 0; i < onlineUsers.length; i++) {
//     const onlineUser = onlineUsers[i];
//     for (const onlineUserKey in onlineUser) {
//         fs.writeFileSync(
//             path.join(__dirname, 'main', 'online', 'online.txt'),
//             `${onlineUserKey} : ${onlineUser[onlineUserKey]}\n`,
//             {flag: 'a'},
//             (err => {
//                 if (err) {
//                     console.log(err);
//                 }
//             })
//         )
//     }
// }
//
// for (let i = 0; i < inPersonUsers.length; i++) {
//     const inPersonUser = inPersonUsers[i];
//     for (const inPersonUserKey in inPersonUser) {
//         fs.writeFileSync(
//             path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'),
//             `${inPersonUserKey} : ${inPersonUser[inPersonUserKey]}\n`,
//             {flag: 'a'},
//             (err => {
//                 if (err) {
//                     console.log(err);
//                 }
//             })
//         )
//     }
// }

// // ---------- напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу ---------// //
// fs.readFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     fs.readFile(path.join(__dirname, 'main', 'online', 'online.txt'), 'utf8', (err,data1)=>{
//         if (err) {
//             console.log(err);
//         }
//         fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), `${data1}`, {flag:'w'}, (err1 => {
//             if (err1) {
//                 console.log(err1);
//             }
//         }))
//     })
//     fs.writeFile(path.join(__dirname,'main', 'online', 'online.txt'), `${data}`, {flag:'w'}, (err1 => {
//         if (err1) {
//             console.log(err1);
//         }
//     }))
// });


