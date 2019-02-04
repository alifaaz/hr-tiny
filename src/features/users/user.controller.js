import JWT from 'jsonwebtoken';
import bycrpt from 'bcrypt-nodejs';
import USER from './user.model';
import { handleError, coolResponses } from '../../helpers/resonses';
import { pagination } from '../../helpers/pagination';
import _C from '../../config/chalking';
import { jwt_scret } from '../../config/conf';
// add users

const log = console.log;
const addUser = (req, res, next) => {
  const { data } = req.body;

  // create new user
  const newUser = new USER(data);
  log(_C.yelo('hello iam her'));
  // save the user
  newUser.save()
    .then(user => coolResponses({ res, code: 200, msg: 'لقد قمت باضافة انسان جديد بنجاح' }, () => log(_C.bgreen(user))))
    .catch(err => handleError(err, next, () => log(err)));
};


// edit user
const editUser = (req, res, next) => {
  const { id } = req.params;
  const { data } = req.body;

  USER.findByIdAndUpdate(id, data)
    .then(user => coolResponses({ res, code: 200, msg: 'لقد قمت بتعديل انسان  بنجاح' }, () => log(_C.bgreen(user))))
    .catch(err => handleError(err, next, () => log(_C.error(err))));
};

const getUser = (req, res, next) => {
  const { id } = req.params;

  USER.findById(id).then(user => coolResponses({
    res, code: 200, msg: 'لقد قمت باحضار انسان جديد بنجاح', data: user,
  }, () => log(_C.bgreen(user))))
    .catch(err => handleError(err, next, () => log(_C.error(err))));
};

const login = (req, res, next) => {
  const { email, pwd } = req.body;
  log(_C.yelo(email, pwd));
  USER.findOne({ email }).then((user) => {
    if (!user) {
      return coolResponses({ res, code: 401, msg: 'عفوا لكن غير مصرح لك بالدخول' }, () => log(user));
    }
    const isValid = bycrpt.compareSync(pwd, user.pwd);

    log(`okay iam here ${isValid}`);
    if (isValid) {
      const jwt = JWT.sign({ email: user.email, per: user.permissions, role: user.role }, jwt_scret, { expiresIn: '2h' });
      log(_C.yelo(jwt));
      return coolResponses({
        res, code: 200, msg: 'تم تسجيل الدخول ', data: jwt,
      }, () => log(_C.bgreen(user)));
    }
    return coolResponses({ res, code: 401, msg: '  عفوا لكن غير مصرح لك بالدخول' }, () => log(_C.yelo('It\'s not about doing it\'s about tryin')));
  }).catch(err => handleError(err, next, () => log(_C.error(err))));
};


// get all users
const getAllUsers = (req, res, next) => {
  const { l, p } = req.query;
  const skip = pagination(p, l);
  log(skip);
  // get all users
  USER.find({}, {
    id: 1, email: 1, name: 1,
  }, { skip, limit: parseInt(l) }).then(users => coolResponses({
    res, data: users, code: 200, msg: 'لقد نجحت في اسييراد البيانات',
  }, () => log(users))).catch(err => handleError(err, next, () => log('invalid jwt')));
};

// authorizations server
const authorizeServer = rolea => (req, res, next) => {
  const jwt = req.headers.authorization.split(' ')[1];
  log(jwt);
  JWT.verify(jwt, jwt_scret, (err, decode) => {
    if (err) {
      handleError(err, next, () => log('invalid jwt'));
    }
    const { permissions, role, email } = decode;
    console.log(_C.yelo(decode.email, decode.per));

    USER.findOne({ email }).then((user) => {
      if (!user) {
        return coolResponses({ res, code: 401, msg: 'عفوا لكن غير مصرح لك بالدخول' }, () => log(user));
      }
      if (user.permissions.includes(rolea) || user.role === 'admin') {
        return next();
      }
      return coolResponses({ res, code: 401, msg: '  عفوا لكن غير مصرح لك بالدخول' }, () => log('out of here'));
    }).catch(err => handleError(err, next, () => log('error at database level')));
  });
};


export default {
  authorizeServer,
  login,
  addUser,
  getUser,
  editUser,
  getAllUsers,
};
