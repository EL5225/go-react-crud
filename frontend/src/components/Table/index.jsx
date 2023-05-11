import axios from "axios";
import { lazy, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const ContentLayout = lazy(() => import("../../layouts/ContentLayout"));

const Table = () => {
  const [users, setUsers] = useState([]);

  // const { id } = useParams();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/reads");
      console.log(response.data.data);
      const res = await response.data.data;
      setUsers(res);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUsers = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/delete/${id}`
      );
      getUsers();
    } catch (error) {}
  };

  return (
    <ContentLayout>
      <table className="shadow-lg w-[88vw] md:w-[90vw] lg:w-[60vw] text-[12px] md:text-[16px] text-center">
        <thead className="bg-blue-200">
          <tr>
            <th>Nama</th>
            <th>Kelas</th>
            <th>Semester</th>
            <th>Program Studi</th>
            <th>Nomor WA</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody className=" bg-slate-200">
          {users.map((users) => (
            <tr className="h-[5vh] md:h-[5.5vh] lg:h-[5vh] " key={users.id}>
              <td>{users.nama}</td>
              <td>{users.kelas}</td>
              <td>{users.semester}</td>
              <td>{users.prodi}</td>
              <td>{users.wa}</td>
              <td className="flex justify-evenly items-center text-center mt-2 md:mt-1">
                <Link
                  to={`/editData/${users.id}`}
                  className=" bg-green-500 rounded-md w-[7vw] md:w-[6vw] lg:w-[4vw] hover:bg-green-600 hover:text-slate-200 md:mt-1 lg:mt-0.5"
                >
                  Edit
                </Link>
                <button
                  className="w-[6vw] md:w-[6vw] lg:w-[4vw] bg-red-500 rounded-md hover:bg-red-600 hover:text-slate-200 md:mt-1 lg:mt-0.5"
                  onClick={() => deleteUsers(users.id)}
                >
                  Del
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ContentLayout>
  );
};

export default Table;
