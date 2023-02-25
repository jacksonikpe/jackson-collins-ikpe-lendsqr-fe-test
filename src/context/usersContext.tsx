import { useEffect, useState, createContext } from "react";
import axios from "axios";

export interface User {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
  accountBalance: string;
  accountNumber: string;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
  };
  id: string;
}

const usersContext = createContext<{
  users: User[];
  loading: boolean;
  getUsers?: (id: number) => Promise<void>;
}>({
  users: [],
  loading: true,
});

export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  // const [user, setUser] = useState<User | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get<User[]>(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`
      );
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getUsers = async (id: number) => {
    try {
      setLoading(true);
      const response = await axios.get<User>(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      );
      const { data } = response;
      // setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
    // let localStoredUser = localStorage.getItem("user");
    // if (localStoredUser) {
    //   setUser(JSON.parse(localStoredUser));
    // }
  }, []);

  return (
    <usersContext.Provider value={{ users, loading, getUsers }}>
      {children}
    </usersContext.Provider>
  );
};

export default usersContext;
