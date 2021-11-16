const apiURL = 'https://dog.ceo/api/breeds/image/random';

fetch(apiURL)                                 // Step 1 FETCH REQUEST FROM AN API's URL
  .then(response => response.json())          // Step 2 HANDLE THE RESPONSE
  .then(data => showImage(data.message))    // Step 3 HANDLE THE DATA
  .catch(error => console.log(error));        // Step 4 HANDLE THE ERROR (if any)

  function showImage(url){
      const image = document.createElement('img');
      image.src = url;
      image.alt = 'Cute dog';
      document.body.appendChild(image);
  }