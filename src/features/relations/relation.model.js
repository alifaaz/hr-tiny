import { Schema, model } from 'mongoose';

/**
 * @param {String} name - name of relation
 * @param {String} type - type of relation
 * @param {String} job_title
 * @param {String} note
 * @param {String} who - id for the one who bring u
 * @param {String} where -
 * @param {String} phone
 * @param {String} dept  -
 */
const realtionSchema = new Schema({
  name: { $type: String, required: true },
  type: String,
  job_title: String,
  note: String,
  who: String,
  Where: String,
  Phones: [String],
  dept: String,
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  collation: { locale: 'ar' },
  typeKey: '$type',
  strictQuery: true,
});

export default model('Relation', realtionSchema);
