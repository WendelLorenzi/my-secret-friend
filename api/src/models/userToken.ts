import mongoose, { Schema } from "mongoose";

const db = mongoose.connection.useDb('Users');

const UserTokenSchema: Schema = new Schema(
  {
    user: { type: String },
    token: { type: String },
  },
  {
    collection: 'userTokens',
  },
);

UserTokenSchema.set('toJSON', {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  transform(__: any, ret: any, _: any) {
    ret.id = ret._id;
    delete ret.__v;
  },
});

const modelUsersToken = db.model('userTokens', UserTokenSchema);

export default modelUsersToken;