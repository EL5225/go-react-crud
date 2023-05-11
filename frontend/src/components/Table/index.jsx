import axios from "axios";
import { lazy, useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ContentLayout = lazy(() => import("../../layouts/ContentLayout"));

const Table = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:9090//api/reads");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContentLayout>
      <table className="brd w-[88vw] md:w-[90vw] lg:w-[60vw] text-[12px] md:text-[16px] text-center">
        <thead className="brd bg-blue-300">
          <tr>
            <th>Nama</th>
            <th>Kelas</th>
            <th>Semester</th>
            <th>Program Studi</th>
            <th>Nomor WA</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody className="brd bg-slate-200">
          <tr className="h-[5vh]">
            <td>Rian</td>
            <td>A2</td>
            <td>4</td>
            <td>Teknik Informtika</td>
            <td>0821237846</td>
            <td className="flex justify-evenly items-center text-center mt-2 md:mt-1">
              <Link
                to="/editData"
                className="brd bg-green-500 rounded-md w-[7vw] md:w-[6vw] lg:w-[4vw] hover:bg-green-600 hover:text-slate-200"
              >
                Edit
              </Link>
              <button className="brd w-[6vw] md:w-[6vw] lg:w-[4vw] bg-red-500 rounded-md hover:bg-red-600 hover:text-slate-200">
                Del
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </ContentLayout>
  );
};

export default Table;
