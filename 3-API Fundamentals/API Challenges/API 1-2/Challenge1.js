//declare baseURL
const baseURL = "https://swapi.co/api/people"

//results section
// const section = document.querySelector('section')
//let starWarsPeopleList = document.querySelectorAll('.class');
const ul = document.getElementById("people")
const ulp = document.getElementById("planets")
const uls = document.getElementById("starships")
const ulsp = document.getElementById("species")


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
        let people = json.results;

        for(p of people) {
            let listItem = document.createElement('li');
            listItem.innerHTML = '<p>' + p.name + '</p>';
            ul.appendChild(listItem);
        }
     })
 }



//  function createNode(element) {
//     return document.createElement(element); // Create the type of element you pass in the parameters
//   }

//   function append(parent, el) {
//     return parent.appendChild(el); // Append the second parameter(element) to the first one
//   }





