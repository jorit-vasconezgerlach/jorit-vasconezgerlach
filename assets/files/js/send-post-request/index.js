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