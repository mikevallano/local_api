const kitDiv = document.getElementById('kit-div'),
      newKitForm = document.getElementById('add-kit'),
      kitNameField = document.getElementById('kit-name'),
      kitColorField = document.getElementById('kit-color'),
      addNewKitLink = document.getElementById('add-new-kit-link'),
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

const getOrSetInitialStorage = () => {
  let storedKits = getKitsFromStorage();
  if (storedKits == null) {
    localStorage.setItem('kitData', JSON.stringify(starterKits))
    storedKits = getKitsFromStorage();
  }
  showKits(storedKits)
}

const getKitsFromStorage = () => {
  return JSON.parse(localStorage.getItem('kitData'))
}


const addKitToStorage = (kit) => {
  let currentKits = getKitsFromStorage()
  currentKits.push(kit)
  localStorage.setItem('kitData', JSON.stringify(currentKits))
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
  let allKits = getKitsFromStorage()
  showKits(allKits)
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

document.addEventListener('DOMContentLoaded', getOrSetInitialStorage)
addNewKitLink.addEventListener('click', showForm)
