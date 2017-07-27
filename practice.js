// musical instrument
  // belongs to a category
// categories
  // has many musical instruments

// xylophone.category
// percussion.instruments()
  // snare drum, bass drum, steel drum

// make a form that creates an instrument
//  1. creates a musical instrument
//  2. associates instrument with the category
//  3. A category should not be created twice! Categories are unique (multiple instruments can be associated with the same category)

// create store
// create models
// create event listeners on form submit

// new Instrument()

$("document").ready(function(){
  inputController = new InputController()
  inputController.init()
})

// SEED DATA
let brass = new Category("Brass")
let percussion = new Category("Percussion")
let woodwind= new Category("Woodwind")
let string= new Category("String")

new Instrument("trumpet", brass)
new Instrument("trombone", brass)
new Instrument("snare drum", percussion)
new Instrument("clarinet", woodwind)
new Instrument("violin", string)
new Instrument("guitar", string)
