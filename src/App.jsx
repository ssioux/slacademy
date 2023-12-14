import { Routes, Route } from "react-router-dom";

// Components
import Layout from "./pages/layout/Layout";
import Error from "./pages/error/Error";
import NotFound from "./pages/error/NotFound";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}

          {/* Error Pages */}
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
