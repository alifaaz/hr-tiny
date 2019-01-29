/* eslint-disable no-dupe-keys */
/* eslint-disable import/prefer-default-export */
import joi from 'joi';

const str = joi.string();
const ary = joi.array();
const phoneObject = joi.object({
  service: str,
  num: str.max(14).min(8),
});
const mstatus = ['متزوج', 'اعزب'];
const Sstatus = ['خريج', 'طالب', 'امي'];
const tstudy = ['ابتدائي', 'متوسط', 'اعدادي', 'ثانوي', 'دبلوم', 'بكلوريوس', 'ماجستير', 'دكتوراه'];
const socialObject = joi.object({
  type: str,
  url: str.uri(),
});

export const ID = {
  params: {
    id: str.required(),
  },
};

export const indi = {

  body: {
    data: joi.object({
    // name must be string between > 3 character and < 40 and it is a must value
      name: str.min(2).max(30).required(),
      // father name string  > 3 character and < 20
      fatherName: str.min(2).max(30),

      //  name string  > 3 character and < 20
      motherName: str,

      //  name string  > 3 character and < 20
      familyName: str.min(2).max(30),

      // father name string  > 3 character and < 20
      nickName: str.min(2).max(30),

      // birth date must be less than 1-1-2018
      birthDate: joi.date().max('1-1-2018'),
      // gender must be one of these spc values
      gender: str.valid('ذكر', 'انثى'),

      // phones is array of objects
      phones: ary.items(phoneObject),

      // email must be lower case
      emails: ary.items(str.email().lowercase()),

      // soicl is array of object must type be  strign and url is uri
      social: ary.items(socialObject),

      // city string between 3 and 20
      city: str.min(3).max(20),
      state: str.min(3).max(20),

      zqaq: str.max(4),
      mahla: str.max(4),

      homeNum: str.max(10),
      // string between 3 and 30
      pointCenter: str.min(3).max(30),

      applyDate: joi.date(),

      byWho: str,
      who: str,
      status: str,


      gifts: ary.items(str),
      hobbies: ary.items(str),
      extra: ary.items(str),


      majorJob: str,
      minorJob: str,
      workPlace: str,
      hireDate: joi.date().max('now'),


      martialStaus: str.allow(mstatus),
      image: str,
      numOfChild: joi.number().min(1).max(20),
      type: ary.items(str),
      notes: str,


      grade: str,
      graduationDate: joi.date().max('now'),
      special: ary.items(str),
      status: str.allow(Sstatus),
      typeStudy: str.allow(tstudy),
    }),
  },
};
