import RELATION from './relation.model';
import { cleanResponse, coolResponses, handleError } from '../../helpers/resonses';
import { pagination } from '../../helpers/pagination';
import _c from '../../config/chalking';

// add relations
const addRelation = (req, res, next) => {
  // get data from database
  const { data } = req.body;

  // create new relation object from mongoose schema
  const newRelation = new RELATION(data);

  // save the data
  newRelation.save()
    .then((rel) => {
      // eslint-disable-next-line no-console
      console.log(_c.success(rel));
      cleanResponse(res, { code: 200, msg: 'لقد نجحت في اضافة علاقة جديدة' });
    })
    .catch((err) => {
      console.log(_c.error(err));
      next(err);
    });
};

// edit relation
const editRelation = (req, res, next) => {
  const { data } = req.body;
  const { id } = req.params;

  const updateThin = new RELATION(data);
  console.log(updateThin);
  RELATION.findByIdAndUpdate(id, data)
    .then((rel) => {
      console.log(_c.success(rel));
      cleanResponse(res, { code: 200, msg: 'لقد قمت بتعدبل هذا النموذج' });
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(_c.error(err));
      return next(err);
    });
};


// delete Relation
const deleteRelation = (req, res, next) => {
  const { id } = req.params;

  RELATION.findByIdAndDelete(id)
    .then(rel => coolResponses({ res, code: 200, msg: 'لقد قمت بمسح هذا العنصر' }, () => console.log(rel)))
    .catch(err => handleError(err, next, () => console.log(_c.error(err))));
};


// show  Relation
const getallRelation = (req, res, next) => {
  const { p, l } = req.query;
  const skip = pagination(p, l);

	RELATION.find({}, {
    id: 1, title: 1, status: 1, place: 1,
  }, { skip, limit: parseInt(l) }).then(rel => coolResponses({
    res, data: rel, code: 200, msg: 'لقد قمت باسترجاع البيانات',
  }, () => console.log(rel))).catch(err => handleError(err, next, () => console.log(_c.error(err))));
};

// get one Relation
const getRelation = (req, res, next) => {
  const { id } = req.params;
  console.log(_c.success(id));
	RELATION.findById(id)
    .then(rel => coolResponses({
      res, data: rel, code: 200, msg: 'لقد قمت باسترجاع البيانات',
    }, () => console.log(rel)))
		.catch(err => handleError(err, next, () => console.log(_c.error(err))));
};


export default {
	getallRelation,
	getRelation,
	editRelation,
	deleteRelation,
	addRelation
};
