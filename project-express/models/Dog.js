const mongoose = require('mongoose');

const Breed = {
	SHIBA_INU: Symbol("Shiba Ini"),
	AKITA_INU: Symbol("Akita Inu"),
  BULLDOG: Symbol("Bulldog"),
  BEAGLE: Symbol("Beagle"),
  YORKSHIRE_TERRIER: Symbol("Yorkshire Terrier"),
}

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  breed: {
    type: Breed,
    required: true
  },
  ownerId: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  }
});


const Dog = mongoose.model('Dog', DogSchema);

module.exports = Dog;