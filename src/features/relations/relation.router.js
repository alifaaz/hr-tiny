import { Router } from 'express';
import validate from 'express-validation';
import controller from './relation.controller';
import { getEditDeleteID, addEdit, pag } from './relation.validate';

const router = Router();


// add relation
router.route('/relation').post(validate(addEdit), controller.addRelation);

// edit relation
router.route('/relation/:id').patch(validate(getEditDeleteID), validate(addEdit), controller.editRelation);

// delete relation
router.route('/relation/:id').delete(validate(getEditDeleteID), controller.deleteRelation);

// get all relations
router.route('/relations').get(validate(pag), controller.getallRelation);

// get one relation
router.route('/relation/:id').get(validate(getEditDeleteID), controller.getRelation);


export default router
;
