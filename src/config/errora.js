/**
 * @class {fancyError} - extends from Error object
 * @param {number} status - error code
 * @param {BOOLEAN} isDebug - to check if we in debug or production server
 *
 */
export default class fancyError extends Error {
  constructor(args, { status, isDebug }) {
    super(args);
    this.status = status;
    this.isDebug = isDebug;
    this.name = this.constructor.name;
  }
}
