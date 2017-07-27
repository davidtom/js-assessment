function createCategory(){

  let categoryId = 0

  return class Category {
    constructor(name) {
      this.id = ++categoryId
      this.name = name
      store.categories.push(this)
    }

    static get all(){
      return store.categories
    }

    static find(id){
      return this.all.filter(category => category.id === id)
    }

    static find_by_name(name){
      return this.all.filter(category => category.name.toLowerCase() === name.toLowerCase())
    }

    static find_or_create_by_name(name){
      let match = this.find_by_name(name)[0]
      if (match){
        return match
      } else {
        return new Category(name)
      }
    }

    get instruments(){
      return Instrument.all.filter(instrument => instrument.category_id === this.id)
    }


  }
}

let Category = createCategory()
