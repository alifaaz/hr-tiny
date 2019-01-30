/* eslint-disable import/prefer-default-export */
import joi from 'joi';

const str = joi.string();
const ary = joi.array();

export const queryValidate = {
  query: {
    trips_ui: str.min(6).max(10).required(),
    l: str.min(1).max(3),
    p: str.min(1).max(3),
    id: str
  }
};
export const edtiDeleteValidate = {
  params: {
    id: str.required(),
  },
};

export const tripValidate = {
  body: {
    data: {
      title: str.min(2).max(200).required(),
      type: str.min(2).max(100),
      note: str,
      place: str,
      status: str.max(1),
      date: joi.object({
        from: joi.date(),
        to: joi.date(),
      }),
      sby: ary.items(str),
      travelers: ary.items(str),
      by: str,
    },
  },

};
