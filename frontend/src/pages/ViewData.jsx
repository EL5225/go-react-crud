import { lazy } from "react";
import { Link } from "react-router-dom";
const ContentLayout = lazy(() => import("../layouts/ContentLayout"));
const Table = lazy(() => import("../components/Table"));

const ViewData = () => {
  return (
    <ContentLayout>
      <Table />
    </ContentLayout>
  );
};

export default ViewData;
