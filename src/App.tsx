import { Routes, Route } from "react-router-dom";
import LoginPage from "./routes/login-page/login-page.component";
import UsersPage from "./routes/users-page/users-page.component";
import UserPage from "./routes/user-page/user-page.components";
import { UsersProvider } from "./context/usersContext";
const App = () => {
  return (
    <UsersProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </UsersProvider>
  );
};

export default App;
//app
