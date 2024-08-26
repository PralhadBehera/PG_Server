const pool = require('../db');

// Fetch all students
const getAllStudent = async () => {
  try {
    const result = await pool.query('SELECT * FROM student_data');
    return result.rows;
  } catch (error) {
    throw new Error(`Failed to fetch all students: ${error.message}`);
  }
};

// Fetch student by ID
const getAllStudentById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM student_data WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      throw new Error('Student not found');
    }
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error fetching student with ID ${id}: ${error.message}`);
  }
};

// Delete student by ID
const deletStudentById = async (id) => {
  try {
    const result = await pool.query('DELETE FROM student_data WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      throw new Error('Student not found');
    }
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error deleting student with ID ${id}: ${error.message}`);
  }
};

// Create a new student
const createStudent = async ({ name, email, age }) => {
  try {
    const result = await pool.query(
      'INSERT INTO student_data (name, email, age) VALUES ($1, $2, $3) RETURNING *',
      [name, email, age]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error in inserting data: ${error.message}`);
  }
};

// Update student by ID
const updateStudent = async (id, { name, email, age }) => {
  try {
    const result = await pool.query(
      'UPDATE student_data SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *',
      [name, email, age, id]
    );
    if (result.rows.length === 0) {
      return null; // No student found to update
    }
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error updating student with ID ${id}: ${error.message}`);
  }
};

module.exports = {
  getAllStudent,
  getAllStudentById,
  deletStudentById,
  createStudent,
  updateStudent
};
