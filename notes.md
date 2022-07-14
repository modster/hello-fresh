
```js
images[].raw Object ? describes overlay when using raw pixel data.

images[].raw.width Number ?
images[].raw.height Number ?
images[].raw.channels Number ?
```

```js

images[].gravity
images[].blend

```

```js

const { data, info } = await sharp('my-image.jpg')
  // output the raw pixels
  .raw()
  .toBuffer({ resolveWithObject: true });

// create a more type safe way to work with the raw pixel data
// this will not copy the data, instead it will change `data`s underlying ArrayBuffer
// so `data` and `pixelArray` point to the same memory location
const pixelArray = new Uint8ClampedArray(data.buffer);

// When you are done changing the pixelArray, sharp takes the `pixelArray` as an input
const { width, height, channels } = info;
await sharp(pixelArray, { raw: { width, height, channels } })
  .toFile('my-changed-image.jpg');

```


```js

sharp(input)
  .toBuffer((err, data, info) => { ... });

 ```

 ```js
 // Read image data from readableStream,
// resize to 300 pixels wide,
// emit an 'info' event with calculated dimensions
// and finally write image data to writableStream
var transformer = sharp()
  .resize(300)
  .on('info', function(info) {
    console.log('Image height is ' + info.height);
  });
readableStream.pipe(transformer).pipe(writableStream);

```

```js
sharp(input)
  .png()
  .toBuffer({ resolveWithObject: true })
  .then(({ data, info }) => { ... })
  .catch(err => { ... });

```

```js

sharp(inputBuffer)
  .resize(320, 240)
  .toFile('output.webp', (err, info) => { ... });

```
