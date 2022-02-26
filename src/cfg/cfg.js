// Application
module.exports.app_name = 'DBCourt';

// CSV
module.exports.csv_path = 'data/edrsr_data_2020/a.txt';

// Database
module.exports.db_path = 'db/edrsr.sqlite';
module.exports.sql_create_tables = [
  `CREATE TABLE IF NOT EXISTS edrsr (
    doc_id INTEGER,
    court_code TEXT,
    judgment_code INTEGER,
    justice_kind INTEGER,
    category_code INTEGER,
    cause_num TEXT,
    adjudication_date DATETIME,
    receipt_date DATETIME,
    judge TEXT,
    doc_url TEXT,
    status INTEGER,
    date_publ DATETIME
  );`, `CREATE TABLE IF NOT EXISTS edrsr_mod (
    doc_id INTEGER,
    doc_size INTEGER
  );`
]
