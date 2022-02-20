const fs = require('fs');
const path = require('path');

// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл, в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так

// fs.writeFile(path.join(__dirname, 'task1', 'task1.txt'), 'Hello world\nreeeeeede', (err => {
//     if (err) {
//         console.log(err);
//     }
// }))
// fs.readFile(path.join(__dirname, 'task1', 'task1.txt'), 'utf8', (err, data)=>{
//     if (err) {
//         console.log(err);
//     }
//     fs.writeFile(path.join(__dirname, 'task1', 'task1test.txt'), `${data}`, (err1 => {
//         if (err1) {
//             console.log(err1);
//         }
//     }))
// })

// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній, старий файл видаліть після того як все завершиться. Також вийде callback hell

// fs.readFile(path.join(__dirname, 'task2', 'task2.txt'), 'utf8', (err, data)=>{
//     if (err) {
//         console.log(err);
//     }
//     fs.mkdir(path.join(__dirname, 'task2', 'newfolder'), (err1 => {
//         if (err1) {
//             console.log(err1);
//         }
//         fs.writeFile(path.join(__dirname, 'task2', 'newfolder', 'test.txt'), `${data}`, (err2 => {
//             if (err2) {
//                 console.log(err2);
//             }
//             fs.unlink(path.join(__dirname, 'task2', 'task2.txt'), (err3 => {
//                 if (err3) {
//                     console.log(err3);
//                 }
//             }))
//         }))
//     }))
// })


// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new

// fs.mkdir(path.join(__dirname, 'task3', 'newfolder1'), (err => {
//     if (err) {
//         console.log(err);
//     }
// }))
// fs.mkdir(path.join(__dirname, 'task3', 'newfolder2'), (err => {
//     if (err) {
//         console.log(err);
//     }
// }))
// fs.writeFile(path.join(__dirname, 'task3', 'test.txt'), 'data in task #3', (err => {
//     if (err) {
//         console.log(err);
//     }
// }))
// fs.writeFile(path.join(__dirname, 'task3', 'test2.txt'), 'red white black', (err => {
//     if (err) {
//         console.log(err);
//     }
// }))

// const foo = ()=>{
//     fs.readdir(path.join(__dirname, 'task3'), ((err, files) => {
//         for (let i = 0; i < files.length; i++) {
//             const file = files[i];
//             if (file.endsWith('.txt')) {
//                 fs.truncate(path.join(__dirname, 'task3', `${file}`), (err1 => {
//                     if (err1) {
//                         console.log(err1);
//                     }
//                 }));
//             } else {
//                 fs.rename(path.join(__dirname, 'task3', `${file}`), path.join(__dirname, 'task3', `${file}_new`), (err1 => {
//                     if (err1) {
//                         console.log(err1);
//                     }
//                 }))
//             }
//         }
//     }))
// }
// foo();