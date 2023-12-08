import { pool } from "../../db/database_connection.js";

export async function getQuestionsById(id) {
  const queryText = "SELECT * FROM questions WHERE id = $1";
  const result = await pool.query(queryText, [id]);
  return result.rows[0] || null;
}
