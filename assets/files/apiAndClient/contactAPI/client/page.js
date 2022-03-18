window.addEventListener('load', ()=>{

          const contactForm = document.querySelector('#contactForm');

          contactForm.onsubmit = ()=>{
          
                    // Set Data as JSON
                    const data = {
                              "mail": contactForm.querySelector('.formMail').value,
                              "fName": contactForm.querySelector('.formFirstName').value,
                              "lName": contactForm.querySelector('.formLastName').value,
                              "message": contactForm.querySelector('.formMessage').value
                    };

                    // Create XHR Request
                    var xhr = new XMLHttpRequest();

                    // Setup XHR Request
                    var xhrURL = "{{POST_URL_WITH_SLASH_AT_END}}"; //! Your Server Script URL
                    xhr.open("POST", xhrURL, true);
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.setRequestHeader("Accept", "application/json");

                    // On XHR Request Change
                    xhr.onreadystatechange = function () {
                              // On XHR Ready
                              if (xhr.readyState === 4) {
                                        // response
                                        var response = JSON.parse(xhr.responseText);
                                        if(response['error']) {
                                                  // not send
                                        } else {
                                                  // send
                                                  contactForm.reset();
                                        }
                              }
                    };
                    // Send XHR Request
                    xhr.send(JSON.stringify(data));
          
          }

});