const Dog = require('../models/Dog');

exports.getDogs = async (req, res, next) => {
    try {
        const dogs = await Dog.find();

        return res.status(200).json({
            success: true,
            count: dogs.length,
            data: dogs
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Error Getting Dog: ${error.message}`
        })
    }
}

exports.getDogById = async (req, res, next) => {
    console.log('getDogById');
    console.log(req.params.id);
    
    try {
        const dog = await Dog.findById(req.params.id);
        if (!dog) {
            console.log(err);
            return res.status(404).json({
                success: false,
                error: 'Dog Not Found'
            })
        }
        else {
            console.log("First function call : ", dog);
            return res.status(200).json({
                success: true,
                data: dog
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Error Getting Dog ${req.params.id}: ${error.message}`
        })
    }
}

exports.addDog = async (req, res, next) => {
    try {
        const { name, breed, ownerId, birthday } = req.query;
        const dog = new Dog({
            name: req.query.name,
            breed: req.query.breed,
            ownerId: req.query.ownerId,
            birthday : req.query.birthday
        });

        const savedDog = await Dog.create(dog);
        return res.status(201).json({
            success: true,
            data: savedDog
        })
    } catch (error) {
        console.log(req);

        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            
            return res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: `Error Adding Dog: ${error.message}`
            })
        }
    }

}

exports.getDogByOwnerId = async (req, res, next) => {
    console.log('getDogByOwnerId');
    console.log(req.params.id);

    Dog.find({ ownerId: req.params.id }, function (err, dog) {
        if (err) {
            console.log(err);
            return res.status(404).json({
                success: false,
                error: 'Dog Not Found'
            })
        }
        else {
            console.log("First function call : ", dog);
            return res.status(200).json({
                success: true,
                data: dog
            })
        }
    }); 

}

exports.updateDogInfo = (req, res) => {

    const id = req.query.id;

    console.log(id);
    console.log(req.body);
    
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    Dog.findByIdAndUpdate(id, req.body, { useFindAndModify: true })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Dog with id=${id}. Maybe Tutorial was not found!`
                });
            } else res.send({ message: "Dog was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Dog with id=" + id
            });
        });
};

exports.deleteDog = (req, res) => {
    const id = req.query.id;
  
    Dog.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Dog with id=${id}. Maybe dog was not found!`
          });
        } else {
          res.send({
            message: "the Dog was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Dog with id=" + id
        });
      });
  };