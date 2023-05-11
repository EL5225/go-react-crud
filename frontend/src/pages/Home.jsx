import { lazy } from "react";
const ContentLayout = lazy(() => import("../layouts/ContentLayout"));
const Home = () => {
  return (
    <ContentLayout>
      <div className="w-[60vw] border-2 border-white hover:border-black text-center rounded-md bg-blue-200 mb-20 hover:scale-110 duration-500 ease-in-out mt-40">
        <span className="text-[60px] md:text-[80px] lg:text-[90px] text-gray-500">
          Struck
        </span>
        <span className="text-[12px] md:text-[15px] lg:text-[17px] opacity-50">
          University
        </span>
      </div>
    </ContentLayout>
  );
};

export default Home;
