//declare baseURL
const baseURL = "https://swapi.co/api/people"

//results section
var starWarsPeopleList = document.querySelector('ul');

//click event
const submitBtn = document.querySelector('.click');


//event listener
submitBtn.addEventListener('click', fetchResults);

function fetchResults(e) {
    e.preventDefault();
    //console.log(e);

    url = baseURL;
    //console.log('URL:', url);

    fetch(url).then(function(result) {
        console.log(result)
        return result.json();
    }) .then(function(json) {
        //console.log(json);
       let people = json.results;

       for(p of people) {
           let listItem = document.createElement('li');
           listItem.innerHTML = '<p>' + p.name + '</p>';
           starWarsPeopleList.appendChild(listItem);
       }
    })
}





// fetch('https://swapi.co/api/people')
// .then(function(response) {
//     return response.json();
// })

// .then(function(json) {
//     let people = json.results;

//     for(p of people) {
//         let listItem = document.createElement('li');
//         listItem.innerHTML = '<p>' + p.name + '</p>';
//         starWarsPeopleList.appendChild(listItem);
//     }

   
// })



