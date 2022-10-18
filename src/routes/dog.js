const express = require('express');
const router = express.Router();

const dogs = require("../controllers/dog-controller.js");

router.get("/", dogs.getDogs);
router.get("/:id", dogs.getDogById);
router.get("/owner/:id", dogs.getDogByOwnerId);

router.post("/", dogs.addDog);
router.put("/", dogs.updateDogInfo);
router.delete("/", dogs.deleteDog)



module.exports = router;
//const express = require('express');
// const router = express.Router();


// /**Toy Car Controller */
// const { getDogs, getDogById, getDogByOwnerId, addDog, updateDogInfo, deleteDog} = require('../controllers/dog-controller');

// router
//     .route('/')
//     .get(getDogs)
//     .post(addDog)
//     .put(updateDogInfo)
//     .delete(deleteDog)

// router
//     .route('/:ownerId')
//     .get(getDogByOwnerId)

// router 
//     .route('/:dogId')
//     .get(getDogById)

// module.exports = router;