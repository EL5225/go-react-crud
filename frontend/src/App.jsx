import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import { ErrorBoundary } from "react-error-boundary";
const Router = lazy(() => import("./routers/Router"));
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const Error = lazy(() => import("./components/Error"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout>
        <ErrorBoundary fallback={<Error />} />
        <Suspense fallback={<Loading />}>
          <Router />
        </Suspense>
      </MainLayout>
    </Suspense>
  );
};

export default App;
