const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zip: String,
}, { _id: false });

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  aboutMe: String,
  birthdate: String,
  address: AddressSchema,
  currentStep: { type: Number, default: 1 },
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
export default User;
