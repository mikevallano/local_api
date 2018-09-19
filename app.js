const kitDiv = document.getElementById('kit-output-div'),
      newKitForm = document.getElementById('add-kit'),
      kitNameField = document.getElementById('kit-name'),
      kitColorField = document.getElementById('kit-color'),
      addNewKitLink = document.getElementById('add-new-kit-link'),
      kitColorSelect = document.getElementById('kit-color-select'),
      starterKits = [ {
                        name: "windowkitter",
                        color: "mask"
                      },
                      {
                        name: "cassie",
                        color: "grey"
                      },
                      {
                        name: "alburrt",
                        color: "orange"
                      }
                    ]
let storedKits;

const getOrSetInitialStorage = () => {
  storedKits = getKitsFromStorage();
  if (storedKits == null) {
    localStorage.setItem('kitData', JSON.stringify(starterKits))
    storedKits = getKitsFromStorage();
  }
  showKits(storedKits)
}

const getKitsFromStorage = () => {
  let kits = JSON.parse(localStorage.getItem('kitData'))
  populateColorSelect(kits)
  return kits
}

const addKitToStorage = (kit) => {
  storedKits.push(kit)
  localStorage.setItem('kitData', JSON.stringify(storedKits))
}

const showKits = (kits) => {
  let output = ''
  kits.forEach(kit => {
    output += `<li>Name: ${kit.name}, Color: ${kit.color}</li>`
  })
  kitDiv.innerHTML = output
}

newKitForm.addEventListener('submit', (e) =>{
  e.preventDefault()
  console.log('form submitted')
  let newKit = {name: kitNameField.value, color: kitColorField.value}
  addKitToStorage(newKit)
  storedKits = getKitsFromStorage()
  showKits(storedKits)
  newKitForm.reset()
  hideForm()
})

const showForm = () => {
  newKitForm.classList.remove('hidden')
  addNewKitLink.classList.add('hidden')
}

const hideForm = () => {
  newKitForm.classList.add('hidden')
  addNewKitLink.classList.remove('hidden')
}

const kitNames = (kits) => {
  return storedKits.map(kit => kit.name)
}

const kitColors = (kits) => {
  return kits.map(kit => kit.color)
}

const populateColorSelect = (kits) => {
  let colors = kitColors(kits)
  console.log({colors})
  let options = ''
  colors.forEach(color => {
    options += `<option value='${color}'>${color}</option>`
  })
  kitColorSelect.innerHTML = options
}

document.addEventListener('DOMContentLoaded', getOrSetInitialStorage)
addNewKitLink.addEventListener('click', showForm)


// select color and return names that match the color
// select age range
// add kit
// refactor to use classes
