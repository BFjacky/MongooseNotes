let MongoClient = require('mongodb').MongoClient;
let DB_CONN_STR = 'mongodb://localhost:27017/demodb';

let obj = [{ "name": "cyf", "stuId": "A19150185" }, { "name": "ccyf", "stuId": "A1923132" }, { "name": "cc123yf", "stuId": "A1923123132" }, { "name": "c123cyf", "stuId": "A19212343132" }];
let collectionName = 'student';

function runConnect() {
    let p = new Promise(function (resolve, reject) {
        MongoClient.connect(DB_CONN_STR, function (err, db) {
            console.log("连接成功！");
            resolve(db);
        });
    })

    return p;
}
function runInsert(db, collectionName, obj) {
    let p = new Promise(function (resolve, reject) {
        let collection = db.collection(collectionName);
        collection.insert(obj, function (err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            resolve(result);
        });
    })
    return p;
    var addresses = db.address.find(
        {
            "_id": {
                "$in": result["address_ids"]
            }
        }
    )
}
function runUpdate(db, collectionName) {
    let p = new Promise(function (resolve, reject) {
        let collection = db.collection(collectionName);
        let whereStr = { "name": '菜鸟教程' };
        let updateStr = { $set: { "url": "https://www.runoob.com" } };
        let cond = { upsert: false, multi: true }
        collection.update(whereStr, updateStr, cond, function (err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            resolve(result)
        })
    })
}
function runDelete(db, collectionName) {
    let p = new Promise(function (resolve, reject) {
        let collection = db.collection(collectionName);
        let whereStr = { "name": '菜鸟工具' };
        collection.remove(whereStr, function (err, result) {
            if (err) {
                console.log('Error:' + err);
                return
            }
            resolve(result)
        })
    })
    return p;
}
function runQuery(db, collectionName) {
    let p = new Promise(function (resolve, reject) {
        let collection = db.collection(collectionName);
        let whereStr = { 'name': 13431 };
        collection.find(whereStr).toArray(function (err, result) {
            if (err) {
                console.log('Error:' + err);
                return
            }
            resolve(result)
        })
    })
    return p;
}
runConnect().then(
    function (data) {
        runInsert(data, collectionName,obj).then(
            function (data) {
                console.log(data);
                data.close()
            }
        )
    }
)