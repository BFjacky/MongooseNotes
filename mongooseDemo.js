let User = require('./user.js');
const students = require('./students.js')
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




function findByName(name) {
    let p = new Promise(function (resolve, reject) {
        wherestr = { 'originInfo.姓名': name };
        students.find(wherestr, function (err, res) {
            if (err) {
                console.log('err: ' + err)
            }
            else {
                resolve(res);
            }
        })
    })
    return p;
}
function findByClass(className) {
    let p = new Promise(function (resolve, reject) {
        wherestr = { 'className': className };
        students.find(wherestr, function (err, res) {
            if (err) {
                console.log('err: ' + err)
            }
            else {
                resolve(res);
            }
        })
    })
    return p;
}

function findByHome(Homename) {
    let p = new Promise(function (resolve, reject) {
        wherestr = { 'originInfo.考区': Homename };
        students.find(wherestr, function (err, res) {
            if (err) {
                console.log('err: ' + err)
            }
            else {
                resolve(res);
            }
        })
    })
    return p;
}
async function findSameClass(name) {
    let res = await findByName(name);
    if (res.length === 1) {
        let className = res[0].className
        let resClassmates = await findByClass(className)
        console.log(resClassmates.length)
        for (let i = 0; i < resClassmates.length; i++) {
            console.log(resClassmates[i].name);
        }
    }
    else {
        console.log('有重名!!!')
    }
}
async function findSameHome(name) {
    let res = await findByName(name);
    if (res.length === 1) {
        let homeName = res[0].originInfo['考区']
        let resHomeMates = await findByHome(homeName)
        console.log(resHomeMates.length)
        for (let i = 0; i < resHomeMates.length; i++) {
            console.log(resHomeMates[i].name,
                resHomeMates[i].gender,
                resHomeMates[i].className,
                resHomeMates[i].originInfo['毕业中学'],
                resHomeMates[i].originInfo['宿舍地址'],
            );
        }
    }
    else {
        console.log('有重名!!!')
    }
}

insert();
