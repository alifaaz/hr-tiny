import validate from 'express-validation';
import { Router } from 'express';
import controller from './user.controller';
import { validateUser, login, validateEditUser } from './user.validate';

const router = Router();


// add user
router.route('/user').post(controller.authorizeServer('user'), validate(validateUser), controller.addUser);

// login user
router.route('/login').post(validate(login), controller.login);

//
// edit user
router.route('/user/:id').patch(controller.authorizeServer('user'), validate(validateEditUser), controller.editUser);

// get user by id
router.route('/user/:id').get(controller.authorizeServer('user'), controller.getUser);

// get all users
router.route('/users').get(controller.authorizeServer('user'), controller.getAllUsers);

export default router;
