import { Schema, model } from 'mongoose';

/** the metas of the name
 * @param {ARRAY} c_type - course type
 * @param {ARRAY} t_type - trip type
 * @param {ARRAY} r_type - relation type
 * @param {ARAAY} depts  - deparments
 * @param {ARRAY} jobs   - jobs type
 * @param {ARRAY} state  - baghdada regions
 * @param {ARRAY} status_type - status of indiv if he [متذبذب منقطع متردد ]
 * @param {ARRAY} p_type -   people type
 * @param {ARRAY} seciality  - speciality of people
 *
 */


const settingSchema = new Schema({
  name: String,
  options: [String],
  by: Schema.Types.ObjectId,
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  collation: { locale: 'ar' },
});


export default model('Setting', settingSchema);
