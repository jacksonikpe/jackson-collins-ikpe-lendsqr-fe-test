import { Routes, Route } from "react-router-dom";
import LoginPage from "./routes/login-page/login-page.component";
import UsersPage from "./routes/users-page/users-page.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<UsersPage />} />
    </Routes>
  );
};

export default App;
