/**
 * @function pagination
 * 	@param {Number} page - page numper
 * 	@param {Number} limit - limitation on number of item per page
 */
export const pagination = (page, limit) => {
		return limit * (page-1)
}
