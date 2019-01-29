/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-named-as-default */
import { Router } from 'express';
import validate from 'express-validation';
import { indi, ID } from './individual.validation';
import controller from './individual.controller';

const router = Router();

// first rest urli for adding individual
router.route('/individual').post(validate(indi), controller.addIndivduals);

// editing individual
router.route('/individual/edit').patch(validate(indi), controller.editIndividual);


// deletting individual

router.route('/individual/:id').delete(validate(ID), controller.deleteIndivisual);

// get individuals

router.route('/individuals').get(controller.getIndividuals)
export default router;
