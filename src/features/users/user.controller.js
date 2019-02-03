import JWT from 'jsonwebtoken';
import bycrpt from 'bcrypt-nodejs';
import USER from './user.model';
import {  handleError, coolResponses } from '../../helpers/resonses';
import _C from '../../config/chalking';
import { jwt_scret } from '../../config/conf';
// add users

const addUser = (req, res, next) => {
  const { data } = req.body;

  // create new user
  const newUser = new USER(data);

  // save the user
  newUser.save()
    .then(user => coolResponses({ res, code: 200, msg: 'لقد قمت باضافة انسان جديد بنجاح' }, () => console.log(_C.bgreen(user))))
    .catch(err => handleError(err, next, () => console.log(err)));
};

const login = (req, res, next) => {
  const { email, pwd } = req.body;

  USER.findOne(email).then((user) => {
    if (!user) {
      return coolResponses({ res, code: 401, msg: 'عفوا لكن غير مصرح لك بالدخول' });
    }
    const isValid = bycrpt.compareSync(pwd, user.pwd);
    if (isValid) {
      const jwt = JWT.sign({ name: user.name, per: user.permissions, role: user.role }, jwt_scret, { expiresIn: '2h' });
      return coolResponses({
        res, code: 200, msg: 'لقد نجحت في العبور', data: jwt,
      });
    }
    return coolResponses({ res, code: 401, msg: '  عفوا لكن غير مصرح لك بالدخول' });
  });
};


// authorizations server
const authorizeServer = rolea => (req, res, next) => {
  const jwt = req.headers.authorization.split(' ')[1];
  JWT.verify(jwt, jwt_scret, (err, decode) => {
    if (err) {
      handleError(err, next, () => console.log('invalid jwt'));
    }
    const { permissions, role } = decode;

    if (permissions.includes(rolea) || role === 'admin') {
      next();
    }

    return coolResponses({ res, code: 401, msg: '  عفوا لكن غير مصرح لك بالدخول' });
  });
};

export default {
  authorizeServer,
  login,
  addUser,
};
