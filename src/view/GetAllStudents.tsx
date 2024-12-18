// GetAllStudents.tsx
import { useState, useEffect } from 'react';
import { asyncGet } from '../utils/fetch';
import { api } from '../enum/api';
import { Student } from '../interface/Student';

function GetAllStudents() {
  const [students, setStudents] = useState<Array<Student>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    asyncGet(api.findAll)
      .then((res: { code: number; body: Array<Student> }) => {
        if (res.code === 200) {
          setStudents(res.body);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>資料載入中...</div>;

  return (
    <div className="student-list">
      {students.map((student) => (
        <div key={student._id} className="student">
          <p>帳號: {student.userName}</p>
          <p>座號: {student.sid}</p>
          <p>姓名: {student.name}</p>
          <p>院系: {student.department}</p>
          <p>年級: {student.grade}</p>
          <p>班級: {student.class}</p>
          <p>Email: {student.Email}</p>
          <p>缺席次數: {student.absences}</p>
        </div>
      ))}
    </div>
  );
}

export default GetAllStudents;
