var pool = require('./pool');
// تم عمل هذه الداله لتسهيل الوصول للبيانات من database
// بدلا من كتابة select * from * ... فقط نحصل على البيانات من خلال هذه الداله بشكل مباشر من ال database .

exports.dbQuery = (queryText, queryParams) => {
    return new Promise((resolve , reject) => {
        pool.query(queryText, queryParams)
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err);
        })
    });
}