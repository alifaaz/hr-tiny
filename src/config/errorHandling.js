import { env } from './conf';
/**
 * @function handler
 * @param {OBJECT} error - which is {message , code, trace }
 */

const handler = (err, req, res, next) => {
  const response = {
    message: err.message,
    code: err.status,
    trace: err.stack,
  };

  if (env !== 'development') {
    delete response.trace;
  }
  res.status(response.code).send(response);
  res.end();
};


export default {
  handler,
};
