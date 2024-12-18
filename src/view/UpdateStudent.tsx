// // UpdateStudent.tsx
// import { useState } from 'react';
// import { asyncPut } from '../utils/fetch';
// import { api } from '../enum/api';
// import { Student } from '../interface/Student';

// function UpdateStudent({ studentId }: { studentId: string }) {
//   const [updatedStudent, setUpdatedStudent] = useState<Student>({
//     userName: '',
//     sid: '',
//     name: '',
//     department: '',
//     grade: '',
//     class: '',
//     Email: '',
//     absences: 0
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setUpdatedStudent({ ...updatedStudent, [name]: value });
//   };

//   const handleUpdate = async () => {
//     const res = await asyncPut(`${api.update}/${studentId}`, updatedStudent);
//     if (res.code === 200) {
//       alert('更新成功');
//     } else {
//       alert('更新學生資料失敗');
//     }
//   };

//   return (
//     <div className="student-form">
//       <h2>更新學生資料</h2>
//       <input
//         type="text"
//         name="userName"
//         value={updatedStudent.userName}
//         onChange={handleChange}
//         placeholder="帳號"
//       />
//       <input
//         type="text"
//         name="sid"
//         value={updatedStudent.sid}
//         onChange={handleChange}
//         placeholder="座號"
//       />
//       <input
//         type="text"
//         name="name"
//         value={updatedStudent.name}
//         onChange={handleChange}
//         placeholder="姓名"
//       />
//       <input
//         type="text"
//         name="department"
//         value={updatedStudent.department}
//         onChange={handleChange}
//         placeholder="院系"
//       />
//       <input
//         type="text"
//         name="grade"
//         value={updatedStudent.grade}
//         onChange={handleChange}
//         placeholder="年級"
//       />
//       <input
//         type="text"
//         name="class"
//         value={updatedStudent.class}
//         onChange={handleChange}
//         placeholder="班級"
//       />
//       <input
//         type="text"
//         name="Email"
//         value={updatedStudent.Email}
//         onChange={handleChange}
//         placeholder="Email"
//       />
//       <input
//         type="number"
//         name="absences"
//         value={updatedStudent.absences}
//         onChange={handleChange}
//         placeholder="缺席次數"
//       />
//       <button onClick={handleUpdate}>更新</button>
//     </div>
//   );
// }

// export default UpdateStudent;
