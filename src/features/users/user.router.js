import controller from "./user.controller";
import { validateUser, login } from "./user.validate";
import validate from "express-validation";
import { Router } from "express";
const router = Router()


// add user
router.route('/user').post( validate(validateUser), controller.addUser)

// login user
router.route('/login').post(validate(login), controller.login)



// edit user
router.route('/user/:id').patch(validate(validateUser, controller.editUser))

// get user by id
router.route('/user/:id').get(controller.getUser)
