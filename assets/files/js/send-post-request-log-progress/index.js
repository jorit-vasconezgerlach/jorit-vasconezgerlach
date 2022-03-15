// Set Data as JSON
var data = {
          jsonVar1: exampleContent,
          jsonVar2: exampleContent,
          jsonVar3: exampleContent
};

// Set Data as FormData
file = fileInput.files[0];
var data = new FormData();
data.append('file', file);

// Create XHR Request
var xhr = new XMLHttpRequest();
// Setup XHR Request
var xhrURL = "{{URL_TO_SEND_REQUEST_TO}}}";
xhr.open("POST", xhrURL, true);
xhr.setRequestHeader("Accept", "application/json");
// On XHR Request Progress
xhr.upload.addEventListener("progress", e=>{
          // Log XHR send Progress
          console.log(e);
          // Use the functions below to convert the progress
});
// On XHR Request Change
xhr.onreadystatechange = function () {
          // On XHR Ready
          if (xhr.readyState === 4) {
                    // Log XHR Response
                    console.log(xhr.responseText);
                    // Log XHR Response as JSON
                    console.log(JSON.parse(xhr.responseText));
          }
};
// Send XHR Request
xhr.send(data);


// Some functions to convert upload progress
function xhrProgressToPercent(xhrProgress, digitsAfterDecimal) {
          digitsAfterDecimal = digitsAfterDecimal ? digitsAfterDecimal : 0;
          return ((xhrProgress.loaded / xhrProgress.total) * 100).toFixed(digitsAfterDecimal) + '%';
}