import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Error404 from "./components/Error404";
import LoginPass from "./components/LoginPass";
import Main from "./components/main/Main";
// import MyArticle from "./components/MyArticle/MyArticle";

function App() {
  const [inputValue, setInputField] = useState({
    login: "",
    password: "",
    name: "",
  });

  return (
    <Routes>
      <Route path="*" element={<Error404 />} />
      <Route
        path="/"
        element={
          <Main inputValue={inputValue} setInputField={setInputField} />
        }
      />
      <Route path="/main" element={<Main />} />
      {/* <Route path="/my-article" element={<MyArticle />} /> */}
      <Route path="/login-pass" element={<LoginPass />} />

    </Routes>
  );
}

export default App;
