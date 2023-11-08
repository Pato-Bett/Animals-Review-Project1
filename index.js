document.addEventListener("DOMContentLoaded", ()=> { 
     //fetch and convert animals object from JSON:
   
        fetch('http://localhost:3000/animals')
        .then( res => res.json())
        .then( animals =>{
            // console.log(animals)
            animals.forEach((animal)=>{renderAnimal(animal)})   
    })

})


   //Function for creating card
   function renderAnimal(animal){
    const card = document.createElement('div')
  card.className="card";
    card.innerHTML = `
    <div class = "details">
            <img src = "${animal.image_url}" alt = "${animal.name}.jpg"/>
            <p><span><strong>Name      : ${animal.name}</strong></span></p>
            <p><span><strong>Continent : ${animal.continent}</strong></span></p>
            <p><span><strong>Habitat   : ${animal.habitat}</strong></span></p>
            <p><span><strong>Diet      : ${animal.diet}</strong></span></p>
    </div>
    `
    //Add card to DOM
    document.querySelector('.cards-container').appendChild(card)
}

//handle search button click
const form = document.getElementById('search-form');
form.addEventListener("submit", (event) => {
event.preventDefault();
const searchInput = document.getElementById('search-bar').value.toLowerCase().trim();
console.log(searchInput);

animalDetails.forEach((animal) => {
    if (searchInput === animal.name.toLowerCase()) {
        console.log(`Matching animal name: ${animal.name}`);

        // overlay
        // const overlay = document.getElementById('overlay')
        // overlay.style.display = 'block'

        // Create modal for matching animal
        const modal = document.createElement('div');
        modal.classList.add("modal");
        modal.innerHTML = `
            <div class="image">
                <img src="${animal.image_url}" alt="${animal.name} ">
            </div>
            <div class="descriptions">
                <p><strong>Name     : ${animal.name}</strong></p>
                <p><strong>Continent: ${animal.continent}</strong></p>
                <p><strong>Habitat  : ${animal.habitat}</strong></p>
                <p><strong>Diet     : ${animal.diet}</strong></p>
            </div>
        `;
        // Append to DOM
        const containerDiv = document.querySelector('#modal-container');
        containerDiv.appendChild(modal);

        // Show the modal
        // modal.style.display = 'block';
    }
});
});
