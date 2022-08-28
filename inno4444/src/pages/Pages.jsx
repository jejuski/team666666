import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import List from "../components/list/List";
import Detail from "../components/detail/Detail";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} exact />
      <Route path="/home" element={<List />} />
      <Route path="/detail" element={<Detail />} exact />
    </Routes>
  );
};

export default Pages;
