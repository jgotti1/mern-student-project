import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  regNo: Number,
  studentName: String,
  grade: String,
  section: {
    type: String,
    default: "Section Here",
  },
});

const student = mongoose.model("student", studentSchema);

export default student;
