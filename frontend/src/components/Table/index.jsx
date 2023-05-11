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
      <div className="w-[80vw] overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-[15px] text-center">
            <thead className="bg-blue-500">
              <tr className="tracking-wide font-semibold text-slate-100 ">
                <th className="p-2">Nama</th>
                <th className="p-2">Kelas</th>
                <th className="p-2">Semester</th>
                <th className="p-2">Program Studi</th>
                <th className="p-2">Nomor WA</th>
                <th className="text-center p-2">Action</th>
              </tr>
            </thead>
            <tbody className=" bg-slate-100">
              {users.map((users) => (
                <tr
                  className="h-[5vh] md:h-[5.5vh] lg:h-[5vh] font-semibold "
                  key={users.id}
                >
                  <td className="border-slate-300 border-r-2 p-2">
                    {users.nama}
                  </td>
                  <td className="border-slate-300 border-r-2 p-2">
                    {users.kelas}
                  </td>
                  <td className="border-slate-300 border-r-2 p-2">
                    {users.semester}
                  </td>
                  <td className="border-slate-300 border-r-2 p-2">
                    {users.prodi}
                  </td>
                  <td className="border-slate-300 border-r-2 p-2">
                    {users.wa}
                  </td>
                  <td className="flex justify-evenly items-center text-center p-5 gap-2 mx-2">
                    <Link
                      to={`/editData/${users.id}`}
                      className=" bg-green-500 rounded-md w-[13vw] md:w-[6vw] lg:w-[4vw] hover:bg-green-600 hover:text-slate-200 md:mt-1 lg:mt-0.5"
                    >
                      Edit
                    </Link>
                    <button
                      className="w-[12vw] md:w-[8vw] lg:w-[4vw] bg-red-500 rounded-md hover:bg-red-600 hover:text-slate-200 md:mt-1 lg:mt-0.5"
                      onClick={() => deleteUsers(users.id)}
                    >
                      Del
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ContentLayout>
  );
};

export default Table;
