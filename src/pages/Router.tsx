import { Route, Routes } from "react-router-dom";
import { CatalogPage, CheckoutPage } from ".";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </>
  );
};

export default Router;
