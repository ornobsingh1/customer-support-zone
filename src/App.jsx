import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Suspense } from "react";
import IssuesManagement from "./components/IssuesManagement";
import { ToastContainer } from "react-toastify";

const initialPromise = fetch("/data.json").then((res) => res.json());

const App = () => {
  return (
    <div>
      <Navbar />

      <Suspense fallback={<h2>Loading....</h2>}>
        <IssuesManagement initialPromise={initialPromise} />
      </Suspense>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default App;
