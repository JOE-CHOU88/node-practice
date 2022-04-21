const fs = require('fs');

// // reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     // // print '<Buffer 48 65 6c 6c 6f 20 4e 6f 64 65 21 21 21>'
//     // console.log(data);
//     console.log(data.toString());
// })

// console.log('last line');

// // writing files
// fs.writeFile('./docs/blog2.txt', 'Hello Joe ~~', () => {
//     console.log('file was written');
// });

// directories
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder created');
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder deleted');
//     })
// }

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}
