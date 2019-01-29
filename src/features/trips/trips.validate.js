/* eslint-disable import/prefer-default-export */
import joi from 'joi';

const str = joi.string();
const ary = joi.array();
export const tripValidate = {
  body: {
    title: str.min(2).max(200).required(),
    type: str.min(2).max(100),
    note: str,
    place: str,
    date: joi.object({
      from: joi.date(),
      to: joi.date(),
    }),
    sby: ary.items(str),
    travelers: ary.items(str),
    by: str,
  },
};
