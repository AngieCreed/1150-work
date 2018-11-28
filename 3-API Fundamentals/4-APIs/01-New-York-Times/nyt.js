// declare the baseURL of the API
const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

// declare the API key that we requested online (check gmail)
const key = '2c5e810583784d87967a5603ab959431';
let url;  //will use this to make a dynamic search url

//set up variables that reference all the DOM elements we will be manipulating;

// Search Form

const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION

const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

//set initial style to none - hide it before the search begins
nav.style.display = 'none';

//pagination and display
let pageNumber = 0;
console.log('PageNumber:', pageNumber);
let displayNav = false;

//add event listener
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage)


//fetch results
//must create a target URL to access the API - search is in the html file
function fetchResults(e) {
    e.preventDefault();
    // console.log(e);

    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    console.log('URL:', url);



    if(startDate.value !== '') {
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value;
    };

    if(endDate.value !=='') {
        url += '&end_date=' + endDate.value;
    };

    
    

    fetch(url).then(function(result) {
            console.log(result)
            return result.json();
    })  .then(function(json) {
            // console.log(json);
            displayResults(json);

    })
}

function displayResults(json) { 
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    let articles = json.response.docs; //stores all of the returned data into a new variable "articles"
    // console.log("DisplayResults", json); 
    // response.docs varies by API - console log to find out

    if(articles.length === 10){
        nav.style.display = 'block';
    }   else {
        nav.style.display = 'none';
    }

    if(articles.length === 0) {
        console.log("No results");
    } else {
      for(let i = 0; i <articles.length; i++) {
          let article = document.createElement('article');
          let heading = document.createElement('h2');
          let link = document.createElement('a');
          let img = document.createElement('img');
          let para = document.createElement('p');
          let clearfix = document.createElement('div');

          let current = articles[i];
          console.log('Current:', current);

          link.href = current.web_url;
          link.textContent = current.headline.main;

          para.textContent = 'Keywords: ';

          for(let j = 0; j < current.keywords.length; j++) {
              let span = document.createElement('span');
              span.textContent += current.keywords[j].value + ' ';
              para.appendChild(span);
          }

          if(current.multimedia.length > 0) {
              img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
              img.alt = current.headline.main;
          }

          clearfix.setAttribute('class','clearfix');

          article.appendChild(heading);
          heading.appendChild(link);
          article.appendChild(img);
          article.appendChild(para);
          article.appendChild(clearfix);
          section.appendChild(article);
      }
    }
}; 

function nextPage(e) {
    pageNumber++;
    fetchResults(e);
    console.log('Page number:', pageNumber);
}
function previousPage(e) {
    if(pageNumber > 0) {
        pageNumber--;
    }   else {
        return;    
    }
    fetchResults(e);
    console.log('Page:', pageNumber);
};
