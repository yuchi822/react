// CreateStudent.tsx
// import { useState } from 'react';
import React, { useState } from 'react'; // 引入 React
import { asyncPost } from '../utils/fetch';
import { api } from '../enum/api';
import { Student } from '../interface/Student';

function CreateStudent() {
  const [newStudent, setNewStudent] = useState<Student>({
    userName: '',
    sid: '',
    name: '',
    department: '',
    grade: '',
    class: '',
    Email: '',
    absences: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleCreate = async () => {
    const res = await asyncPost(api.insertOne, newStudent);
    if (res.code === 200) {
      alert('新增成功');
      setNewStudent({
        userName: '',
        sid: '',
        name: '',
        department: '',
        grade: '',
        class: '',
        Email: '',
        absences: 0
      });
    } else {
      alert('新增學生失敗');
    }
  };

  return (
    <div className="student-form">
      <h2>新增學生</h2>
      <input
        type="text"
        name="userName"
        value={newStudent.userName}
        onChange={handleChange}
        placeholder="帳號"
      />
      <input
        type="text"
        name="sid"
        value={newStudent.sid as string}
        onChange={handleChange}
        placeholder="座號"
      />
      <input
        type="text"
        name="name"
        value={newStudent.name}
        onChange={handleChange}
        placeholder="姓名"
      />
      <input
        type="text"
        name="department"
        value={newStudent.department}
        onChange={handleChange}
        placeholder="院系"
      />
      <input
        type="text"
        name="grade"
        value={newStudent.grade}
        onChange={handleChange}
        placeholder="年級"
      />
      <input
        type="text"
        name="class"
        value={newStudent.class}
        onChange={handleChange}
        placeholder="班級"
      />
      <input
        type="text"
        name="Email"
        value={newStudent.Email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="number"
        name="absences"
        value={newStudent.absences}
        onChange={handleChange}
        placeholder="缺席次數"
      />
      <button onClick={handleCreate}>新增</button>
    </div>
  );
}

export default CreateStudent;
