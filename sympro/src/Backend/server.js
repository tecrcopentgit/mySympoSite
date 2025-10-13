import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString:'postgresql://render_tzbw_user:ABKyD2PpOdbaLTqEP5lW45MAfbRSwtxf@dpg-d3m5ofu3jp1c73fmu48g-a.oregon-postgres.render.com/render_tzbw',
  ssl: { rejectUnauthorized: false },
});

const createTableQuery = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS participants (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      phonenumber TEXT NOT NULL,
      department TEXT NOT NULL,
      college TEXT NOT NULL,
      year TEXT NOT NULL
    );
  `;

  try {
    await pool.query(query);
    console.log("Table created successfully or already exists.");
  } catch (err) {
    console.error("Error creating table:", err);
  }
};

app.post('https://mysymposite.onrender.com/api/register', async (req, res) => {
  const { name, phonenumber, department, college, year } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO participants (name, phonenumber, department, college, year) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, phonenumber, department, college, year]
    );
    res.status(201).json({ message: "Registration successful", participant: result.rows[0] });
  } catch (err) {
    console.error("Error inserting data:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(4000, async () => {
  await createTableQuery();
  console.log("Server is running on port 4000");
});