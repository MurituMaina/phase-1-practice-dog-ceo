document.addEventListener('DOMContentLoaded',() => {
  dogImages();
  loadBreedOptions();
  dogBreeds();
});

// // Challenge 1

const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
function dogImages(){
fetch(imgUrl)
.then((response)=> response.json())
.then((data) =>{
    
    const container = document.getElementById('dog-image-container');
    for(let img in data.message){
        const images = document.createElement('img');
        images.src = `${data.message[img]}`;
        images.width = 200;
        container.append(images)
    }
})
}

// // Challenge 2
function dogBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then((resp) => resp.json())
    .then((data) => {
        const dogBreed = document.getElementById('dog-breeds');
       let names =Object.keys(data.message)
        for(let nam in names){
            const dogList = document.createElement('li');
            dogList.setAttribute("id", `${nam}`)
            dogList.innerHTML = `${names[nam]}`
            dogList.addEventListener('click', clicked)    
            dogBreed.append(dogList)
            filterBreed();
        }
    })
}

// // Challenge 3

function clicked(event){
    event.target.style.color ="red";
}

// //Challenge 4
let breeds = [];

function loadBreedOptions() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
    .then(res => res.json())
    .then(results => {

      breeds = Object.keys(results.message);
      updateBreedList(breeds);
      filterBreed();
    });
}

function updateBreedList(breeds) {
  let ul = document.getElementById('dog-breeds');
  removeBreeds(ul);
  breeds.forEach(breed => newBreedList(breed));
}

function removeBreeds(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}

function selectBreedStartingWith(letter) {
  updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}

function filterBreed() {
  let breedDropdown = document.getElementById('breed-dropdown');
  breedDropdown.addEventListener('change', function (event) {
    selectBreedStartingWith(event.target.value);
  })}


function newBreedList(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', clicked);
  }