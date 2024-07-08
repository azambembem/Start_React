import React, { useReducer, useState } from "react";
import Student from "./Student";

const reducer = (state, action) => {
  switch (action.type) {
    case "add-student":
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent]
      };
    case "delete-student":
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload.id
        )
      };
    case "mark-student":
      return {
        count: state.count,
        students: state.students.map((student) =>
          student.id === action.payload.id
            ? { ...student, isHere: !student.isHere }
            : student
        )
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  students: []
};

const App = () => {
  const [name, setName] = useState("");
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수: {studentsInfo.count}</p>
      <input
        type="text"
        name="name"
        placeholder="입력하세요...."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => dispatch({ type: "add-student", payload: { name } })}
      >
        Add
      </button>
      {studentsInfo.students.map((student) => {
        return (
          <Student
            key={student.id}
            name={student.name}
            dispatch={dispatch}
            id={student.id}
            isHere={student.isHere}
          />
        );
      })}
    </div>
  );
};

export default App;
