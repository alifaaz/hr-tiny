/* eslint-disable import/no-named-as-default-member */
import INDE from './indivisual.model';
import _c from '../../config/chalking';
import _E from '../../config/errora';
// const e = new _E()

const cleanResponse = (res, { msg, code, data }) => {
  if (data) {
    return res.status(code).send({ msg, data });
  }
  return res.status(code).send({ msg });
};


// add fuckers to database
const addIndivduals = (req, res, next) => {
  console.log('add individual');
  // extract data from body request of http
  // data hold all form data of peoples

  const { data } = req.body;
  const newInde = new INDE();

  // construct schema object again
  newInde.basicInfo = {
    name: data.name,
    fatherName: data.fatherName,
    motherName: data.motherName,
    familyName: data.familyName,
    nickName: data.nickName,
    birthDate: data.birthDate,
    gender: data.gender,
  };
  newInde.contactInfo = {
    phones: data.phones,
    emails: data.emails,
    social: data.social,
  };
  newInde.address = {
    city: data.city,
    state: data.state,
    zqaq: data.zqaq,
    mahla: data.mahla,
    homeNum: data.homeNum,
    pointCenter: data.pointCenter,
  };
  newInde.applicationInfo = {
    applyDate: data.applyDate,
    byWho: data.byWho,
    who: data.who,
    status: data.status,
  };
  newInde.skill = {
    gifts: data.gifts,
    hobbies: data.hobbies,
    extra: data.extra,
  };
  newInde.jonsInfo = {
    majorJob: data.majorJob,
    minorJob: data.minorJob,
    workPlace: data.workPlace,
    hireDate: data.hireDate,
  };
  // eslint-disable-next-line no-unused-expressions
  newInde.generalInfo = {
    martialStaus: data.martialStatus,
    image: data.image,
    numOfChild: data.children,
    type: data.gtype,
    notes: data.notes,
  };
  newInde.study = {
    grade: data.grade,
    graduationDate: data.graduationDate,
    special: data.special,
    status: data.Sstatus,
    typeStudy: data.tstudy,
  };

  newInde.save()
    .then(ind => cleanResponse(res, { code: 200, msg: 'لقد قمت باضافه انسان جديد للنظان ^__^' }))
    .catch((err) => {
    // debuging error
      console.log(_c.error(err));
      return res.send({ msg: err.message, code: err.code });
      // handling error
      // next(err);
    });
};

// delete fucker from database
const deleteIndivisual = (req, res, next) => {
  const { id } = req.params;
  console.log('delete individual');
  INDE.findByIdAndDelete(id)
    .then(indi => cleanResponse(res, { code: 200, msg: 'لقد قمت بنجاح بمسح هذا الكائن الحي' }))
    .catch((err) => {
      console.log(_c.error(err.message));
      // res.send({msg:err.message})
      return next(err);
    });
};

// edit fucker upon the database
const editIndividual = (req, res, next) => {
  console.log('edit individual');
  const { data } = req.body;
  const { id } = req.body;
  const newInde = new INDE();

  // construct schema object again
  newInde.basicInfo = {
    name: data.name,
    fatherName: data.fatherName,
    motherName: data.motherName,
    familyName: data.familyName,
    nickName: data.nickName,
    birthDate: data.birthDate,
    gender: data.gender,
  };
  newInde.contactInfo = {
    phones: data.phones,
    emails: data.emails,
    social: data.social,
  };
  newInde.address = {
    city: data.city,
    state: data.state,
    zqaq: data.zqaq,
    mahla: data.mahla,
    homeNum: data.homeNum,
    pointCenter: data.pointCenter,
  };
  newInde.applicationInfo = {
    applyDate: data.applyDate,
    byWho: data.byWho,
    who: data.who,
    status: data.status,
  };
  newInde.skill = {
    gifts: data.gifts,
    hobbies: data.hobbies,
    extra: data.extra,
  };
  newInde.jonsInfo = {
    majorJob: data.majorJob,
    minorJob: data.minorJob,
    workPlace: data.workPlace,
    hireDate: data.hireDate,
  };
  // eslint-disable-next-line no-unused-expressions
  newInde.generalInfo = {
    martialStaus: data.martialStatus,
    image: data.image,
    numOfChild: data.children,
    type: data.gtype,
    notes: data.notes,
  };
  newInde.study = {
    grade: data.grade,
    graduationDate: data.graduationDate,
    special: data.special,
    status: data.Sstatus,
    typeStudy: data.tstudy,
  };

  INDE.findByIdAndUpdate(id, newInde)
    .then(indi => cleanResponse(res, { code: 200, msg: 'لقد قمت بتعديل الكائن الحي' }))
    .catch((err) => {
      console.log(_c.error(err));
      return next(err);
    });
};


const getIndividuals = (req, res, next) => {
  const {
 p, l, pt, id
} = req.query;

  console.log(pt);
  // pagination formla
  const skip = l * (p - 1);
  // one api for all individuals and for one
  if (pt === 'indi_tables') {
    const data = {}
    INDE.find({}, { contactInfo: 1, basicInfo: 1, id: 1, created_at:1}, { skip, limit: parseInt(l) })
      .then((indis) => {
        data.indis = indis
        console.log(indis);
        return INDE.countDocuments()

      }).then(counts => { data.pages = counts })
      .then(() => cleanResponse(res, { code: 200, msg: "لقد قمت ب البحث ", data }))
      .catch((err) => {
        console.log(_c.error(err));
      });
  } else if (pt === 'indi_one' && id) {

    INDE.findById(id)
      .then(indi => cleanResponse(res, {code: 200, msg:"لقد احضرت الانسان", data: { indi }}))
      .catch(err => console.log(_c.error(err)))


  }else {
    // return next(e)
    console.log('noTHin here');
  }
};


export default {
  editIndividual, addIndivduals, deleteIndivisual, getIndividuals,
};
