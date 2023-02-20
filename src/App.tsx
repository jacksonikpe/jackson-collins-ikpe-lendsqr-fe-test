import { Routes, Route } from "react-router-dom";
import LoginPage from "./routes/login-page/login-page.component";
import UsersPage from "./routes/users-page/users-page.component";
import UserPage from "./routes/user-page/user-page.components";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/user" element={<UserPage />} />
    </Routes>
  );
};

export default App;
