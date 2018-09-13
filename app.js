const kitDiv = document.getElementById('kit-div')

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




document.addEventListener('DOMContentLoaded', fetchKits())
