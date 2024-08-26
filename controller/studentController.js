const studentService = require('../service/studentService');

// Get student by ID
exports.getAllStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await studentService.getAllStudentById(id);
    res.status(200).json({ message: 'Fetched student successfully', data: result });
  } catch (error) {
    res.status(400).json({ message: `Error fetching student with ID ${id}: ${error.message}` });
  }
};

// Get all students
exports.getAllStudent = async (req, res) => {
  try {
    const result = await studentService.getAllStudent();
    res.status(200).json({ message: 'Data fetched successfully', data: result });
  } catch (error) {
    res.status(400).json({ message: 'Failed to fetch data', error: error.message });
  }
};

// Delete student by ID
exports.deletStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await studentService.deletStudentById(id);
    res.status(200).json({ message: 'Deleted student successfully', data: result });
  } catch (error) {
    res.status(400).json({ message: `Failed to delete student with ID ${id}: ${error.message}` });
  }
};

// Create a new student
exports.createStudent = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const result = await studentService.createStudent({ name, email, age });
    res.status(201).json({ message: 'Student inserted successfully', student: result });
  } catch (error) {
    res.status(400).json({ message: 'Error in inserting data', error: error.message });
  }
};

// Update student by ID
exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;
    const updatedStudent = await studentService.updateStudent(id, { name, email, age });

    if (!updatedStudent) {
      return res.status(404).json({ message: `Student with ID ${id} not found` });
    }

    res.status(200).json({
      message: 'Student updated successfully!',
      data: updatedStudent,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating student',
      error: error.message,
    });
  }
};
