import SETT from './settings.model';
import { coolResponses, handleError } from '../../helpers/resonses';

const log = console.log

const addSettings = (req, res, next) => {
  const { data } = req.body;

  const newSet = new SETT(data);

  newSet.save()
    .then(set => coolResponses({ res, msg: 'لقد قمت باضافة اعدادت جديدة', code: 200 }, () => console.log(set)))
    .catch(err => handleError(err, next, () => console.log(err)));
};


// edit settings
const editSettings = (req, res, next) => {
  const { data } = req.body;
  const {name} = req.params;

		SETT.findOne({name})
			.then(setting => {

				if(!setting){
					return coolResponses({ res, msg: 'لا يوجد اعدادت كهذه', code: 404 }, () => console.log("no setting"))
				}
				setting.set(data)
				return setting.save()

			}).then(sett => coolResponses({res, data:sett, msg:"لقد قمت بتعديل بنجاح",code: 200},() => console.log("you succeded uit ")))
				.catch(err => handleError(err, next, () => console.log(err)))

};

// get settings
const getSettings = (req, res, next) => {
  SETT.find({}).then(sets => coolResponses({
    res, data: sets, msg: 'لقد قمت بشيء جيد', code: 200,
  }, () => console.log(sets))).catch(err => handleError(err, next, () => console.log(err)));
};

export default {
  getSettings,
  addSettings,
  editSettings,
};
