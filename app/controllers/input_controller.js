class InputController {
  constructor() {
  }

  render(template, selector){
    $(selector).empty()
    $(selector).append(template)
  }

  createInstrumentList(instrument_list){
    return `<ul>${instrument_list.map(instrument => '<li>' + instrument.name + '</li>').join("")}</ul>`
  }

  createCategoryList(){
    return `<ul>${Category.all.map(category => '<li>' + category.name + '</li>').join("")}</ul>`
  }

  createCategoryInstrumentList(){
    return `<ul>${Category.all.map(category => '<li>' + category.name + this.createInstrumentList(category.instruments) + '</li>').join("")}</ul>`
  }

  createNewInstrument(){
    $("#instrument-input").on("submit", function(event){
      event.preventDefault()
      let instrumentName = event.currentTarget[0].value
      let category = event.currentTarget[1].value
      let instrument = new Instrument(instrumentName, Category.find_or_create_by_name(category))
      $(".input-entry").val("")
      inputController.render(inputController.createCategoryInstrumentList(), "div.categories")
    })
  }

  init(){
    this.createNewInstrument()
    this.render(this.createCategoryInstrumentList(), "div.categories")
  }
}
