import mongoose, { Schema, Document } from 'mongoose';

const db = mongoose.connection.useDb('Users');

const UserSchema: Schema = new Schema(
  {
    _id: {type: String },
    name: { type: String },
    token: { type: String },
    sorted: { type: String || null}
  },
  {
    collection: 'users',
  },
);

UserSchema.set('toJSON', {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  transform(__: any, ret: any, _: any) {
    ret.id = ret._id;
    delete ret.__v;
  },
});

const modelUsers = db.model('users', UserSchema);

export default modelUsers;