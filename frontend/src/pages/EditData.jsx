import { lazy, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const ContentLayout = lazy(() => import("../layouts/ContentLayout"));

const EditData = () => {
  const [name, setName] = useState("");
  const [kls, setKls] = useState("");
  const [smt, setSmt] = useState("");
  const [prd, setPrd] = useState("");
  const [nomorWa, setNomorWa] = useState("");

  const { id } = useParams();

  useEffect(() => {
    getProductId();
  }, []);

  const navigate = useNavigate();

  const update = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.put(
        `http://localhost:8000/api/update/${id}`,
        {
          nama: name,
          kelas: kls,
          semester: smt,
          prodi: prd,
          wa: nomorWa,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response);
      navigate("/viewData");
    } catch (error) {
      console.log(error);
    }
  };

  const getProductId = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/read/${id}`);
      console.log(response);
      const res = await response.data.data;
      setName(res.nama);
      setKls(res.kelas);
      setSmt(res.semester);
      setPrd(res.prodi);
      setNomorWa(res.wa);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContentLayout>
      <div className="mt-5">
        <form
          onSubmit={update}
          className="flex flex-col justify-center w-[80vw] md:w-[70vw] lg:w-[40vw] py-7 items-center gap-3 rounded-md shadow-md shadow-blue-200 text-[14px] md:text-[15px]"
        >
          <span className="flex items-center justify-center font-bold brd rounded-lg w-[30vw] md:w-[20vw] lg:w-[10vw] my-5 text-slate-700">
            Edit Data
          </span>
          <div className="flex flex-col">
            <label htmlFor="nama">Nama</label>
            <input
              value={name}
              required
              type="text"
              id="nama"
              placeholder="masukan nama"
              className="border-2 border-gray-500 px-2 h-7 md:h-9 rounded-md w-[60vw] md:w-[40vw] lg:w-[25vw] hover:border-black hover:bg-slate-100 "
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="kelas">Kelas</label>
            <input
              value={kls}
              required
              type="text"
              id="kelas"
              placeholder="masukan kelas"
              className="border-2 border-gray-500 px-2 h-7 md:h-9 rounded-md w-[60vw] md:w-[40vw] lg:w-[25vw] hover:border-black hover:bg-slate-100 "
              onChange={(e) => setKls(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="semester">Semester</label>
            <input
              value={smt}
              required
              type="text"
              id="semester"
              placeholder="masukan semester"
              className="border-2 border-gray-500 px-2 h-7 md:h-9 rounded-md w-[60vw] md:w-[40vw] lg:w-[25vw] hover:border-black hover:bg-slate-100 "
              onChange={(e) => setSmt(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="prodi">Program Studi</label>
            <input
              value={prd}
              required
              type="text"
              id="prodi"
              placeholder="masukan prodi"
              className="border-2 border-gray-500 px-2 h-7 md:h-9 rounded-md w-[60vw] md:w-[40vw] lg:w-[25vw] hover:border-black hover:bg-slate-100 "
              onChange={(e) => setPrd(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="wa">Nomor WA</label>
            <input
              value={nomorWa}
              required
              type="text"
              id="wa"
              placeholder="masukan nomor WA"
              className="border-2 border-gray-500 px-2 h-7 md:h-9 rounded-md w-[60vw] md:w-[40vw] lg:w-[25vw] hover:border-black hover:bg-slate-100 "
              onChange={(e) => setNomorWa(e.target.value)}
            />
          </div>
          <button className="w-[30vw] sm:w-[25vw] md:w-[20vw] lg:w-[10vw] h-[6vh] md:h-[5vh] bg-green-500 mt-5 font-bold text-white hover:bg-green-700 hover:text-gray-300 rounded-md">
            Save Changes
          </button>
        </form>
      </div>
    </ContentLayout>
  );
};

export default EditData;
