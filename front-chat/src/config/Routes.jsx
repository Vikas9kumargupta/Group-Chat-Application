import React from "react";
import { Route, Routes } from "react-router";
import App from "../App";

const AppRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/about" element={<h1>This is about Page !! </h1>} />
          <Route path="/contact" element={<h1>This is Contact Page !!</h1>} />
          <Route path="*" element={<h1>Error 404 ! Page Not Found</h1>}/>
        </Routes>
    );
};

export default AppRoutes;