import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const EditData = lazy(() => import("../pages/EditData"));
const ViewData = lazy(() => import("../pages/ViewData"));
const Home = lazy(() => import("../pages/Home"));
const AddData = lazy(() => import("../pages/AddData"));
const Navbar = lazy(() => import("../components/Navbar"));
// const Loading = lazy(() => import("../components/Loading"));

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/addData" element={<AddData />} />
        <Route path="/viewData" element={<ViewData />} />
        <Route path="/editData" element={<EditData />} />
        {/* <Route path="/loading" element={<Loading />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
