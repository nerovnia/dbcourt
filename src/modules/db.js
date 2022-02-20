/*
let sql = `CREATE TABLE IF NOT EXISTS edrsr (
  doc_id INTEGER,
  court_code TEXT,
  judgment_code INTEGER,
  justice_kind INTEGER,
  category_code INTEGER,
  cause_num TEXT,
  adjudication_date NUMERIC,
  receipt_date NUMERIC,
  judge TEXT,
  doc_url TEXT,
  status INTEGER,
  date_publ NUMERIC
);`;
*/


const cn = require('better-sqlite3');
let sql = `CREATE TABLE IF NOT EXISTS edrsr (
  doc_id INTEGER,
  court_code TEXT,
  judgment_code INTEGER,
  justice_kind INTEGER,
  category_code INTEGER,
  cause_num TEXT,
  adjudication_date TEXT,
  receipt_date TEXT,
  judge TEXT,
  doc_url TEXT,
  status INTEGER,
  date_publ TEXT
);`;

module.exports.filldb = (path) => {
  let arr_convpos = [6, 7, 11];
//  let arr = [86740127,"0713",2,5,41080,"309 3690 19","2019-12-24 00:00:00+02","2020-01-01 00:00:00+02","Довжанин М. М.","http:  od.reyestr.court.gov.ua files 43 fac178ca20d41d88a699d8ef1948a0e2.rtf",1,"2020-01-02 00:00:00+02"];
  let arr = [86740127,"0713",2,5,41080,"309/3690/19","2019-12-24 00:00:00+02","2020-01-01 00:00:00+02","Довжанин М. М.","http://od.reyestr.court.gov.ua/files/43/fac178ca20d41d88a699d8ef1948a0e2.rtf",1,"2020-01-02 00:00:00+02"];
  //arr_convpos.forEach(function(pos) {
  //  arr[pos] = new Date(arr[pos]);
  //  console.log(arr[pos]);
  //});
  console.log(path);
  let db = cn(path, { verbose: console.log });  
  let stmt = db.exec(sql);
  console.log(stmt);
  /*
  stmt = db.prepare(`
    INSERT INTO edrsr 
      (doc_id, court_code, judgment_code, justice_kind, category_code, cause_num, adjudication_date, receipt_date, judge, doc_url, status, date_publ) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).run(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9], arr[10], arr[11]);
      //).run(arr);
      */
   
}









//const stmt = db.prepare('INSERT INTO cats (name, age) VALUES (?, ?)');
//const row = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
//console.log(row.firstName, row.lastName, row.email);
/*
TEXT
NUMERIC
INTEGER
REAL
BLOB
*/
