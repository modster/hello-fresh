const sharp = require('sharp');
const images = [];

for (let i = 0; i < 9; i++) {
  sharp('input.jpg')
    .raw()
    .rotate(36)
    .resize(500)
    .composite([
      { input: 'input.jpg', gravity: 'center' }
    ])
    .sharpen()
    .withMetadata()
    .toBuffer()
    .then((data) => {
      images[i] = data;
      console.info(data);
    })
    sharp(input)
    .png()
    .toBuffer({ resolveWithObject: true })
    .then(({ data, info }) => { console.log( data, info ); })
    .catch(err => { console.error(err); });
//     composite([{ 
//       images: images[i].OverlayOptions.input,
//         width: images[i].raw.width,
//         height: images[i].raw.height,
//         channels: images[i].raw.channels,
//       }])
//     .toFile('output.jpg')
//     .then(() => {images[i].sharp().toBuffer()})
//     .then((data) => {
//       images[i].push(data);
      


//     });
// }