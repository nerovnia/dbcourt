const cn = require('better-sqlite3');
var http = require('../modules/http.js');
var cfg = require('../cfg/cfg');

let db = cn(cfg.db_path);  // { verbose: console.log }
function create_tables() {
  cfg.sql_create_tables.forEach(sql => {
    let stmt = db.exec(sql);
  });
}

module.exports.fill__db = (rec_arr) => {
  create_tables();
  const insert = db.prepare(`INSERT INTO edrsr 
    (doc_id, court_code, judgment_code, justice_kind, category_code, cause_num, adjudication_date, receipt_date, judge, doc_url, status, date_publ) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);

  const insertMany = db.transaction((ra) => {
    for (const rec of ra) insert.run(rec);
  });

  insertMany(rec_arr);
}

module.exports.fill__doc_size = () => {
  const stmt = db.prepare('SELECT doc_id, doc_url FROM edrsr');
  let count = 0;
  for (const doc of stmt.iterate()) {
    setTimeout(() => { http.getFileSize(doc.doc_url); console.log(count);count++;}, 2000);
    //    console.log(http.getFileSize(doc.doc_url));
  }
}