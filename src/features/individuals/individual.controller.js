import INDE from './indivisual.model';
import _c from '../../config/chalking';

const cleanResponse = (res, { msg, code }) => res.status(code).send({ msg });


// add fuckers to database
const addIndivduals = (req, res, next) => {
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

      // handling error
      next(err);
    });
};

// delete fucker from database
const deleteIndivisual = (req, res, next) => {
  const { id } = req.params;

  INDE.findByIdAndDelete(id)
		.then(indi =>   // retrun http response after completion of the deletion of the object
			cleanResponse(res, { code: 200, msg: 'لقد قمت بنجاح بمسح هذا الكائن الحي' }))
    .catch((err) => ( { console.log(_c.error(err)); return next(err); });
};

// edit fucker upon the database
const editIndividual = (req, res, next) => ({
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

	INDE.findByIdAndUpdate(id,newInde)
	.then(indi => {

		// return response of http request
		return cleanResponse(res,{code:200,msg:'لقد قمت بتعديل الكائن الحي'})
	})
	.catch(err => ( {
			console.log(_c.error(err));
			return next(err)
    });
};


const getIndividuals = (req, res, next) => {



}


export default { editIndividual , addIndivduals, deleteIndivisual}
