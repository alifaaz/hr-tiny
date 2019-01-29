import {
  Schema, model, SchemaType, SchemaTypes,
} from 'mongoose';

/**
 *  {TRIP_SCHEMA}
 * @param {STRING}  title - name of trip
 * @param {STRING} type - type of trips
 * @param {STRING} note - notes for the string
 * @param {OBJECT}  date - consiste of
 * 	@param {DATE} from - date.from start date for the trips
 * 	@param {DATE} to -  date.to end date of trip
 * @param {STRING} place - where we go on this trip
 * @param {ARRAY} sby - supervise by so person fromindividual
 * @param {ARRAY} travelers  - individuals who would like to travel for long run
 *
 */

const tripsSchema = new Schema({
  title: { $type: String,	required:	true },
  type: String,
  note: String,
  date: { from: Date, to: Date },
  place: String,
  sby: [{ $type: Schema.Types.ObjectId, ref: 'Individuals' }],
  travelers: [{ $type: Schema.Types.ObjectId, ref: 'Individuals' }],
  by: Schema.Types.ObjectId,
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  collation: { locale: 'ar' },
  strictQuery: true,
  typeKey: '$type',
});


export default model('Trip', tripsSchema);
