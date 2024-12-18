// // DeleteStudent.tsx
// import { asyncDelete } from '../utils/fetch';
// import { api } from '../enum/api';

// function DeleteStudent({ studentId }: { studentId: string }) {
//   const handleDelete = async () => {
//     const res = await asyncDelete(`${api.delete}/${studentId}`);
//     if (res.code === 200) {
//       alert('刪除成功');
//     } else {
//       alert('刪除學生資料失敗');
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleDelete}>刪除</button>
//     </div>
//   );
// }

// export default DeleteStudent;
