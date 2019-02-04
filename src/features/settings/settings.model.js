import { Schema, model } from 'mongoose';

/**
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
  c_type: [String],
  t_type: [String],
  r_type: [String],
  depts:  [String],
  jobs:   [String],
  state:  [String],
  status_type: [String],
  p_type: [String],
  peciality: [String],
  by: Schema.Types.ObjectId,
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  collation: { locale: 'ar' },
});


export default model('Setting', settingSchema)
