import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import WaitSpinner from "./components/WaitSpinner";
import RegistrationPage from "./components/Page/Registration";

const App = () => {
  return (
    <Suspense fallback={<WaitSpinner />}>
      <Routes>
        <Route path="/registration" element={<RegistrationPage />} /> 
      </Routes>
    </Suspense>  
  );
}

export default App;