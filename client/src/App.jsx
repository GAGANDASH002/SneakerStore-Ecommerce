import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./Layouts/Layouts"; // Import Layout
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Checkout from "./pages/Checkout";
import PlaceOrder from "./pages/PlaceOrder";
import OrderConfirmation from "./pages/OrderConfirm";
import { OrderHistory } from "./pages/OrderHistory";

function App() {
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;

  return (
    <Router>
      <Routes>
        {/* Wrap pages with Layout */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/products/:id" element={<Layout><ProductDetail /></Layout>} />
        <Route path="/order/:id" element={<Layout><OrderConfirmation /></Layout>} />
        <Route path="/order-history" element={<Layout><OrderHistory /></Layout>} />
        <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
        <Route path="/placeorder" element={<Layout><PlaceOrder /></Layout>} />

        {/* Login and Register without Layout (Optional) */}
        <Route path="/login" element={userInfo ? <Navigate to="/" /> : <Layout><Login /></Layout>} />
        <Route path="/register" element={userInfo ? <Navigate to="/" /> : <Layout><Register /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
