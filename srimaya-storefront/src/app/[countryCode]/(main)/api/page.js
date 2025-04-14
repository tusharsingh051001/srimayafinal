
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { data } = req.body;
    const { name, email, phoneNumber, reason } = data;
    const query = `
      INSERT INTO enquiries (name, email, phone_number, reason)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    const values = [name, email, phoneNumber, reason];
    const { rows } = await pool.query(query, values);
    return res.status(201).json({ enquiry: rows[0] });
  } catch (error) {
    // Log error details to the server console for debugging
    console.error("Error inserting enquiry:", error);
    console.error("Error details:", error.detail || error);

    return res.status(500).json({ error: "Internal Server Error" });
  }
}
