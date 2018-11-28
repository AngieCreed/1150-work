var randomImage = document.querySelector('.random-image');
console.log('randomImage;', randomImage);

fetch('https://source.unsplash.com/random')
.then(function(response) {  //we get the info and create a promise  - response is the success argument
    if (!response.ok) {  //if everything "isn't" okay, return an error message, otherwise return a response
        console.log(response);
        return new Error(response);
    }
    console.log('Response:', response);
    return response.blob(); //blob replaces json in this exercise - typical in handling images
})
.then(function(photoBlob) {  //now we do something with the promise
    console.log('My Blob:', photoBlob)
    var objectURL = URL.createObjectURL(photoBlob);  //cretaing a URL for the photoBlob
    console.log('Object URL:', objectURL);
    randomImage.src = objectURL; // assigns the URL

    console.log('randomImage.src:', randomImage.src);
})
.catch(function(err) {  //catches errors 
    console.log(err);
})