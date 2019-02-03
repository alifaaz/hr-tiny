import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
const status = ['active', 'disable', 'suspended']
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  pwd: { type: String, required: true },
  permissions: [String],
  role: String,
	status:{type: String, enum: status}
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },

});


userSchema.pre('save', (next) => {
  if (!this.isModified('pwd')) return next();

  this.pwd = bcrypt.hashSync(this.pwd, bcrypt.genSaltSync(10));

  return next();
});


export default model('User', userSchema);
