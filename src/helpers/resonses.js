export const cleanResponse = (res, { msg, code, data }) => {
  if (data) {
    return res.status(code).send({ msg, data });
  }
  return res.status(code).send({ msg });
};


export const coolResponses = ({
  res, code, msg, data,
}, callback) => {
  callback();
  if (data) {
    return res.status(code).send({ msg, data });
  }
  return res.status(code).send({ msg });
};

export const  handleError = (err, next, callback) => {
	callback()


	next(err)
}

export default {
  cleanResponse, coolResponses,
};
