import { Router } from 'express';
import validate from 'express-validation';
import controller from './courses.controller';
import { getDeleteCourse, getallCourses, courseValidate } from './course.validate';

const router = Router();


// add courses
router.route('/course').post(validate(courseValidate), controller.addCourse);

// edit courses
router.route('/course/:id').patch(validate(getDeleteCourse), validate(courseValidate), controller.editCourse);

// delete course
router.route('/course/:id').delete(validate(getDeleteCourse), controller.deleteCourse);

// get all courses
router.route('/course').get(controller.getallCourses);

// get one course
router.route('/course/:id').get(validate(getDeleteCourse), controller.getCourse);


export default router
;
