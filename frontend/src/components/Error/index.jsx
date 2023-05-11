import { lazy } from "react";
const ContentLayout = lazy(() => import("../../layouts/ContentLayout"));

const Error = () => {
  return (
    <ContentLayout>
      <div>
        <h1 className="font-bold">Error! Something Wrong!</h1>
      </div>
    </ContentLayout>
  );
};

export default Error;
