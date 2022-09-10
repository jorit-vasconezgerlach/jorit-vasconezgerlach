### Camera

#### Content Files

HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Camera Access</title>
          <link rel="stylesheet" href="page.css">
          <script src="page.js"> </script>
</head>
<body>
          <video  autoplay></video>
</body>
</html>
```

CSS
```css
* {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
}

video {
          width: 100vw;
          height: 100vh;
}
```

JS
```js
window.addEventListener('load', ()=>{

          var video = document.querySelector('video');
          
          /* Setting up the constraint */
          var facingMode = "user"; // Can be 'user' or 'environment' to access back or front camera (NEAT!)
          var constraints = {
                    audio: false,
                    video: {
                    facingMode: facingMode
                    }
          };
          
          /* Stream it to video element */
          navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
                    video.srcObject = stream;
          });

});
```