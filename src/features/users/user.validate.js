import joi from 'joi';

const str = joi.string();

const status = ['active', 'disable', 'suspended'];


// edit user
export const validateEditUser = {
  body: {
    data: {
      name: str,
      email: str.email(),
      pwd: str.regex(/^[a-zA-Z0-9]{6,30}$/),
      role: str,
      permissions: joi.array().items(str),
      status: str.allow(status),
    },
  },
  params: {
    id: str,
  },
};


// eslint-disable-next-line import/prefer-default-export
export const validateUser = {
  body: {
    data: {
      name: str.required(),
      email: str.email().required(),
      pwd: str.regex(/^[a-zA-Z0-9]{6,30}$/).required(),
      role: str,
      permissions: joi.array().items(str),
      status: str.allow(status),
    },
  },
};

export const login = {
  body: {
    email: str.email().required(),
    pwd: str.regex(/^[a-zA-Z0-9]{5,30}$/).required(),
  },
};

export const pagination = {

  query: {

    l: joi.number().required(),

    p: joi.number().required(),

  },

};
