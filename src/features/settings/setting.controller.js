import SET from './settings.model';
import { coolResponses, handleError } from '../../helpers/resonses';

const addSettings = (req, res, next) => {
  const { data } = req.body;

  const newSet = new SET(data);

  newSet.save()
    .then(set => coolResponses({ res, msg: 'لقد قمت باضافة اعدادت جديدة', code: 200 }, () => console.log(set)))
    .catch(err => handleError(err, next, () => console.log(err)));
};


// edit settings
const editSettings = (req, res, next) => {
  const { data } = req.body;
  const { name } = req.query;

  SET.findOne({ name })
    .then(function (set) {
      if (!set) {
        coolResponses({ res, msg: ' لا يوجداعدادت كهذه ', code: 404 }, () => console.log(set));
      }
      this.set(data);
      return this.save();
    })
    .then(set => coolResponses({ res, msg: 'لقد قمت بتعديل الاعدادات ', code: 200 }, () => console.log(set)))
    .catch(err => handleError(err, next, () => console.log(err)));
};

// get settings
const getSettings = (req, res, next) => {
  SET.find({})
    .then(sets => coolResponses({res, data: sets, msg: 'لقد قمت بشيء جيد', code: 200 }, () => console.log(sets)))
    .catch(err => handleError(err, next, () => console.log(err)));
};
