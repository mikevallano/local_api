const kitDiv = document.getElementById('kit-div'),
      newKitForm = document.getElementById('add-kit')

const fetchKits = () => {
  fetch('kits.json')
    .then(data => data.json())
    .then(data => {
      let output = ''
      data.forEach(kit => {
        output += `<li>Name: ${kit.name}, Color: ${kit.color}</li>`
      })
      kitDiv.innerHTML = output
    })
};


newKitForm.addEventListener('submit', (e) =>{
  e.preventDefault()
  console.log('form submitted')
  // add kit to array
  // display all kits
})


document.addEventListener('DOMContentLoaded', fetchKits())
