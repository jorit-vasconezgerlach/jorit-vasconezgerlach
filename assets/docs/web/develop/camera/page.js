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