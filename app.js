// core module
// file system
const fs = require('fs');

// menuliskan string ke file (synchronous)
// try {
//     fs.writeFileSync('data/test.txt', 'Hello world secara synchronous!');  
// } catch(e) {
//     console.log(e);
// }

// // menuliskan string ke file (asynchronous)
// fs.writeFile('data/test.txt', 'Hello world secara Asynchronous', (err) => {
//     console.log(err);
// });

// // membaca isi file  (synchronous)
// const data =  fs.readFileSync('data/contacts.json', 'utf-8');
// console.log(data);

// // membaca file (asynchronous)
// fs.readFile('data/test.txt', 'utf-8', (err,data) => {
//     if (err) throw err;
//     console.log(data);
// });


// Readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukan nama kamu : ', (nama) => {
    rl.question('Masukan no HP kamu : ', (noHP) => {
        const contact = { nama, noHP };
        const file = fs.readFileSync('data/contacts.json', 'utf-8');
        const contacts = JSON.parse(file);

        contact.push(contact);

        fs.writeFileSync('data/contacts.json', JSON.stringify(contact));

        console.log('Terimakasih sudah memasukan data.');
        
    rl.close();
    });
});


