import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PATH } from "consts";
import { DashboardPage } from "pages";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.DASHBOARD} element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};
