import controller from './trips.controller';
import { tripValidate, queryValidate, edtiDeleteValidate } from './trips.validate';
import validate from 'express-validation';
import { Router } from 'express';

const router = Router();

// add trips to database
router.route('/trip').post(validate(tripValidate), controller.addTrips);

// edit trips
router.route('/trip/:id').patch(validate(edtiDeleteValidate), controller.editTrip)


// delete trip by id
router.route('/trip/:id').delete(validate(edtiDeleteValidate), controller.deleteTrip)

//get trip
router.route('/trip').get(validate(queryValidate), controller.getTrips)

export default router
