class Ui {
  constructor() {
    this.storedKits = storedKits
  }

  logKits() {
    console.log('storedKits: ', this.storedKits)
  }

  showKits(kits) {
    let output = ''
    kits.forEach(kit => {
      output += `<li>Name: ${kit.name}, Color: ${kit.color}</li>`
    })
    kitDiv.innerHTML = output
  }

  populateColorSelect(kits) {
    let colors = kitColors(kits)
    let options = "<option value='all-kits'>All Kits</option>"
    colors.forEach(color => {
      options += `<option value='${color}'>${color}</option>`
    })
    kitColorSelect.innerHTML = options
  }

  filterKitsByColor(color) {
    let kits = color == 'all-kits' ? storedKits : storedKits.filter(kit => kit.color == color)
    this.showKits(kits)
  }

}
