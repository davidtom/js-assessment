function createInstrument(){

  let instrumentId = 0

  return class Instrument {
    constructor(name, category) {
      this.id = ++instrumentId
      this.name = name
      this.category_id = category.id
      store.instruments.push(this)
    }

    static get all(){
      return store.instruments
    }

    static find(id){
      return store.instrument.filter(instrument => instrument.id === id)
    }

    get category(){
      return Category.all.filter(category => category.id === this.category_id)[0]
    }


  }
}

let Instrument = createInstrument()
