// react 
import { lazy, Suspense } from "react";

// react router
import { Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";

const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
