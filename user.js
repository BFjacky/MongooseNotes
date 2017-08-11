const db = require('./db.js')
let Schema = db.Schema

const UserSchema = new Schema({
    password: String,
    wxOpenId: String,
    wechat: {
      nickName: String,
      avatar: String,
    },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

module.exports = db.model('User',UserSchema)