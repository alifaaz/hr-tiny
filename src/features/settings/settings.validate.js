/* eslint-disable import/prefer-default-export */
import joi from 'joi';

const str = joi.string();
export const addSetting = {
  body: {
    data: {
      name: str.required(),
      options: joi.array().items(str),
      by: str,
    },
  },
};

