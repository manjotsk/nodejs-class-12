const { default: mongoose } = require("mongoose");
const studentModel = require("../models/student.model");
const Address = require("../models/address.model");
const { createAddress } = require("./address.services");

const createStudent = async (student) => {
  const address = await createAddress(student.billingAddress);
  student.billingAddress = address._id;
  const newStudent = new studentModel(student);
  return await newStudent.save();
};

const listStudents = async ({ filterCriteria }) => {
  const {studentId} = filterCriteria; // studentId is of type string

  const searchCriteria = {
    isActive:false
  }
  if(studentId){
    searchCriteria._id = studentId
  }
  const students = await studentModel.find(searchCriteria);
  return students;
};

const getStudentById = async (studentId) => {
  const student = await studentModel.findById(studentId).populate('billingAddress');
  return student;
};

module.exports = {
  createStudent,
  listStudents,
  getStudentById,
};
