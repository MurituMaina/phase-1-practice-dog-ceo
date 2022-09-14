// // console.log('%c HI', 'color: firebrick')
// window.addEventListener('DOMContentLoaded', dogImages)
// window.addEventListener('DOMContentLoaded', dogBreeds)
// // /Challenge 1

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

// // // // Challenge 2
// // let names =[];
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
            addBreedSelectListener();
        }
    })
}

// // Challenge 3

function clicked(event){
    event.target.style.color ="red"
}

// //Challenge 4
// function sortNameList(){
// dropDown(names.filter(name => name.startsWith(letter)))
// }

// function dropDown(){
//     // dogBreeds()
// }


let breeds = [];

document.addEventListener('DOMContentLoaded', function () {
    dogImages();
  loadBreedOptions();
});


function loadBreedOptions() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
    .then(res => res.json())
    .then(results => {

      breeds = Object.keys(results.message);
      updateBreedList(breeds);
      addBreedSelectListener();
    });
}

function updateBreedList(breeds) {
  let ul = document.getElementById('dog-breeds');
  removeChildren(ul);
  breeds.forEach(breed => dogBreeds(breed));
}
// function addBreed(breed) {
//     let ul = document.querySelector('#dog-breeds');
//     let li = document.createElement('li');
//     li.innerText = breed;
//     li.style.cursor = 'pointer';
//     ul.appendChild(li);
//     li.addEventListener('click', clicked);
//   }
  

function removeChildren(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}

function selectBreedsStartingWith(letter) {
  updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}

function addBreedSelectListener() {
  let breedDropdown = document.querySelector('#breed-dropdown');
  breedDropdown.addEventListener('change', function (event) {
    selectBreedsStartingWith(event.target.value);
  });
}


