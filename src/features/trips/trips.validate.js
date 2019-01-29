/* eslint-disable import/prefer-default-export */
import joi from 'joi';

const str = joi.string();
const ary = joi.array();

export const queryValidate = {
  query: {
    trips_ui: str.min(7).max(10).required(),
    l: joi.number(),
    p: joi.number(),

  },
  params: {
    id: str,
  },
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
      status: joi.number().min(1).max(10),
      date: joi.object({
        from: joi.date().min('1-1-2'),
        to: joi.date(),
      }),
      sby: ary.items(str),
      travelers: ary.items(str),
      by: str,
    },
  },

};
