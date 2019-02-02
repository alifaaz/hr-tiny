import joi from 'joi';

const str = joi.string();
const ary = joi.array();
const num = joi.number();

export const getEditDeleteID = {
  params: {
    id: str.required(),
  },
};

export const pag = {
  query: {
    p: num.required(),
    l: num.required(),
  },
};

export const addEdit = {
  body: {
    data: {
      name: str.required(),
      type: str,
      job_title: str,
      note: str,
      who: str,
      where: str,
      phones: ary,
      dept: str,
    },
  },
};
