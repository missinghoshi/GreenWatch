import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Reports from "./pages/Reports";

import Layout from "./components/Layout";

export default function App() {

  return (

    <Layout>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/reports"
          element={<Reports />}
        />

      </Routes>

    </Layout>
  );
}