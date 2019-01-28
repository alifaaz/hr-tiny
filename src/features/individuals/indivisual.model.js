import mongoose, { Schema, SchemaType } from 'mongoose';

const ID = Schema.Types.ObjectId;

/**
 * @class {individual} -- object for individuals to identifies people i had
 * 	@param {object} basicInfo - human basic info which contain
 * 		@param {STRING} name - name of human being
 * 		@param {STRING} fatherName
 * 		@param {STRING} motherName
 * 		@param {STRING} nickName
			@param {STRING} familyName
			@param {DATE}  birthDate
			@param {ENUM}  gender -  ["ذكر "و"انثى","غير ذلك"]
		@param {object} contactInfo - contact info for people
			@param {ARRAYofOBJECT} phones -  [{service , num}] array of phones
			@param {ARRAY} emails - [] array of emails
			@param {ARRAYofOBJECT} socail [{type,url}]
		@param {OBJECT} address
			@param {STRING} city
			@param {STRING}  zqaq
			@param {STRING} homeNum
			@param {STRING} mahla
			@param {STRING} pointCenter - نقطة دالة
			@param {STRING} state -المنطقة
		@param {OBJECT} applicationInfo
			@param {DATE} applyDate
			@param {STRING} status
			@param {ID} byWho - المستقطب
			@param {ID} who - المعرف
		@param {OBJECT} skill -مهارات اصجاب العمل
			@param {ARRAYofSTRING} gifts - المهارات الاحترافية
			@param {ARRAY} extra - الاضافية
			@param {ARRAY} hobbies  - الهوايات
		@param {OBJECT} jonsInfo - معلومات العمل
			@param {DATE} hireDate - تاريج التعيين
			@param {STRING} workPlace - مكان العمل
			@param {STRING} majorJob
			@param {STRING} minorJob
		@param {OBJECT} generalInfo
			@param {ENUM} martialStaus - ["اعزب","متزوج"]
			@param {STRING} image
			@param {NUMBER} numOfChild
			@param {ARRAy} type
		@param {OBJECT} study
			@param {ENUM} grade - المرحلة
			@param {DATE} graduationDate
			@param {ARRAY} special - التخصص
			@param {ENUM} status - خريج او طالب
			@param {ENUM} type - ابتدائي اعدادي متوسط ثانوي

			*/

const genders = ['ذكر', 'انثى'];
const mstatus = ['متزوج', 'اعزب'];
const Sstatus = ['خريج', 'طالب', 'امي'];
const tstudy = ['ابتدائي', 'متوسط', 'اعدادي', 'ثانوي', 'دبلوم', 'بكلوريوس', 'ماجستير', 'دكتوراه'];
const indivisualSchema = new Schema({
  basicInfo: {
    name: { $type: String, required: true },
    fatherName: { $type: String },
    motherName: { $type: String },
    familyName: { $type: String },
    nickName: { $type: String },
    birthDate: Date,
    gender: { $type: String, enum: genders },
  },
  contactInfo: {
    phones: [{ service: String, num: String }],
    emails: [{ $type: String, unique: true }],
    social: [{ type: String, url: String }],

  },
  address: {
    city: String,
    state: String,
    zqaq: String,
    mahla: String,
    homeNum: String,
    pointCenter: String,
  },
  applicationInfo: {
    applyDate: Date,
    byWho: { $type: ID },
    who: { $type: ID },
    status: String,
  },
  skill: {
    gifts: [String],
    hobbies: [String],
    extra: [String],
  },
  jonsInfo: {
    majorJob: String,
    minorJob: String,
    workPlace: String,
    hireDate: Date,
  },
  generalInfo: {
    martialStaus: { $type: String, enum: mstatus },
    image: String,
    numOfChild: Number,
    type: [String],
    notes: String,
  },
  study: {
    grade: { $type: Number, enum: [1, 2, 3, 4, 5, 6] },
    graduationDate: Date,
    special: [String],
    status: { $type: String, enum: Sstatus },
    typeStudy: { $type: String, enum: tstudy },
  },

}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  collation: { locale: 'ar' },
  strictQuery: true,
  typeKey: '$type',
});


export default mongoose.model('Individuals', indivisualSchema);
