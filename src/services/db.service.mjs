import pkg from 'pg';
import db_config from '../configs/db.config.mjs';
const { Pool } = pkg;


const pool = new Pool(db_config);

async function getConnection() {
  return await pool.connect();
}

export default getConnection