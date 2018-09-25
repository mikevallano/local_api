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
let ui = new Ui()

const getOrSetInitialStorage = () => {
  storedKits = getKitsFromStorage();
  if (storedKits == null) {
    localStorage.setItem('kitData', JSON.stringify(starterKits))
    storedKits = getKitsFromStorage();
  }
  ui.showKits(storedKits)
  ui.populateColorSelect(storedKits)
}

const getKitsFromStorage = () => {
  let kits = JSON.parse(localStorage.getItem('kitData'))
  return kits
}

const addKitToStorage = (kit) => {
  storedKits.push(kit)
  localStorage.setItem('kitData', JSON.stringify(storedKits))
}

newKitForm.addEventListener('submit', (e) =>{
  e.preventDefault()
  let newKit = {name: kitNameField.value, color: kitColorField.value}
  addKitToStorage(newKit)
  storedKits = getKitsFromStorage()
  ui.showKits(storedKits)
  ui.populateColorSelect(storedKits)
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

const filterKitsByColor = () => {
  color = kitColorSelect.value
  console.log('color: ', color)
  kits = color == 'all-kits' ? storedKits : storedKits.filter(kit => kit.color == color)
  ui.showKits(kits)
}

document.addEventListener('DOMContentLoaded', getOrSetInitialStorage)
addNewKitLink.addEventListener('click', showForm)
kitColorSelect.addEventListener('change', filterKitsByColor)


// select color and return names that match the color
// select age range
// add kit
// refactor to use classes
