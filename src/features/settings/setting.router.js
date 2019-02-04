import { Router } from 'express';
import validate from 'express-validation';
import controller from './setting.controller';
import auth from '../users/user.controller';
import { addSetting, updateSetting } from './settings.validate';

const router = Router();
const autho = auth.authorizeServer;
// get settings
router.route('/settings').get(autho('setting'), controller.getSettings);


// add settings
router.route('/settings').post(autho('settting'), validate(addSetting), controller.addSettings);

// edit setting
router.route('/settings/:name').patch(autho('setting'), validate(updateSetting), controller.editSettings);


export default router;
