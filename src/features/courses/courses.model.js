import { Schema, model } from 'mongoose';

/**
 * {CoursesSchema}
 * @param {String} title - course title
 * @param {String} type - courses type
 * @param {String} note
 * @param {String} place - where the course held
 * @param {Object} Date - conssit of 2 property
 * 	@param {Date} from
 * 	@param {Date} to
 * @param {BOOLEAN} status -  is the trip is finished or not
 * @param {ENUMstring} interaction - [جيد , متوسط , سيء]
 * @param {ARRAY} individuals - ids of people who will partcipate in this course
 * @param {ArrayOfObject}  research
 * 	@param {STRING} title
 *@param {ARRAY}  by
 @param {String} editBy

 *  */
const inter = ['جيد', 'سيء', 'متوسط', 'مقبول'];
const courseSchema = new Schema({
  title: { $type: String, required: true },
  type: String,
  note: String,
  place: String,
  date: {
    from: Date,
    to: Date,
  },
  status: String,
  interaction: { $type: String, enum: inter },
  research: [{ title: String }],
  individuals: { $type: Schema.Types.ObjectId, ref: 'Individuals' },
  by: { $type: Schema.Types.ObjectId, ref: 'Individuals' },
  editBy: { $type: Schema.Types.ObjectId, ref: 'User' },

}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  typeKey: '$type',
  collation: { locale: 'ar' },
  strictQuery: true,
});

export default model('Courses', courseSchema);
