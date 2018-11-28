const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSpace);

function fetchSpace(e) { //e keeps page from reloading
    console.log(e)
    e.preventDefault();

    fetch(baseURL)

    .then(result => {
        return result.json(); //converted to JSON to it's readable
    })
    .then(json => {
        displayRockets(json);
        // console.log(json);
    })
    .catch(err => {
        console.log(err);
    })
}

    function displayRockets(json){
        let rockets = json.forEach(r =>{
            let rocket = document.createElement("li");
            rocket.innerText = r.name; //it's an object so don't use []
            spaceShips.appendChild(rocket); //take unordered list
        })
    }