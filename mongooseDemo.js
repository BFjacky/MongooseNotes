let User = require('./user.js');
/*
{
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
}
*/

function insert() {
    let user = new User({
        password: '2341',
        wxOpenId: '2341',
        wechat: {
            nickName: '2341',
            avatar: '2341',
        },
    });

    user.save(function (err, res) {

        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }

    });
}

function update() {
    let whereStr = { username: 'Tracy McGrady' }
    let updatesStr = {
        userage: 38,
    }
    let cond = { upsert: false, multi: true }
    User.update(whereStr, updatesStr, cond, function (err, res) {
        if (err) {
            console.log('err' + err);
        }
        else {
            console.log('res' + res)
        }
    })
}

function find() {
    let whereStr = { username: 'Tracy McGrady' }
    User.find(whereStr, function (err, res) {
        if (err) {
            console.log('err: ' + err)
        }
        else {
            console.log('res:  ' + res)
        }
    })
}

function del() {
    let whereStr = { username: 'Tracy McGrady' }
    User.remove(whereStr, function (err, res) {
        if (err) {
            console.log('err: ' + err)
        }
        else {
            console.log('res: ' + res)
        }
    })
}

insert();