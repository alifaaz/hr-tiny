import COURSE from './courses.model';
import { cleanResponse, coolResponses, handleError } from '../../helpers/resonses';
import { pagination } from '../../helpers/pagination';
import _c from '../../config/chalking';

// add coursr
const addCourse = (req, res, next) => {
  // get data from database
  const { data } = req.body;

  // create new course object from mongoose schema
  const newCourse = new COURSE(data);

  // save the data
  newCourse.save()
    .then((course) => {
      // eslint-disable-next-line no-console
      console.log(_c.success(course));
      cleanResponse(res, { code: 200, msg: 'لقد نجحت في اضافة كورس جديد' });
    })
    .catch((err) => {
      console.log(_c.error(err));
      next(err);
    });
};

// edit course
const editCourse = (req, res, next) => {
  const { data } = req.body;
  const { id } = req.params;

  const updateThin = new COURSE(data);
  console.log(updateThin);
  COURSE.findByIdAndUpdate(id, data)
    .then((course) => {
      console.log(_c.success(course));
      cleanResponse(res, { code: 200, msg: 'لقد قمت بتعدبل هذا النموذج' });
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(_c.error(err));
      return next(err);
    });
};


// delete courses
const deleteCourse = (req, res, next) => {
  const { id } = req.params;

  COURSE.findByIdAndDelete(id)
    .then(course => coolResponses({ res, code: 200, msg: 'لقد قمت بمسح هذا العنصر' },()=> console.log(course)))
    .catch(err => handleError(err, next, () => console.log(_c.error(err))));
};


// show  courses
const getallCourses = (req, res, next) => {
  const { p, l } = req.query;
  const skip = pagination(p, l);

  COURSE.find({}, {
    id:1, title:1, status:1, place:1,
  }, { skip, limit: parseInt(l) }).then(cousres => coolResponses({
      res, data: cousres, code: 200, msg: 'لقد قمت باسترجاع البيانات',
    }, () => console.log(cousres))).catch(err => handleError(err, next, () => console.log(_c.error(err))));
};

// get one course
const getCourse = (req, res, next) => {
  const { id } = req.params;
  console.log(_c.success(id));
	COURSE.findById(id)
		.then(course => coolResponses({
    res, data: course, code: 200, msg: 'لقد قمت باسترجاع البيانات',
	},()=> console.log(course)))
		.catch(err => console.log(_c.error(err)));
};


export default {
  getCourse,
  getallCourses,
  deleteCourse,
  editCourse,
  addCourse,
};
