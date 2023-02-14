import { Routes, Route } from "react-router-dom";
import LoginPage from "./routes/login-page/login-page.component";
import DashboardPage from "./routes/dashboard-page/dashboard-page.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export default App;
