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
  user: User;
  users: User[];
  loading: boolean;
  getUser?: (id: number) => Promise<void>;
}>({
  user: {
    createdAt: "",
    orgName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    lastActiveDate: "",
    profile: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      avatar: "",
      gender: "",
      bvn: "",
      address: "",
      currency: "",
    },
    guarantor: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      gender: "",
      address: "",
    },
    accountBalance: "",
    accountNumber: "",
    socials: {
      facebook: "",
      instagram: "",
      twitter: "",
    },
    education: {
      level: "",
      employmentStatus: "",
      sector: "",
      duration: "",
      officeEmail: "",
      monthlyIncome: [],
      loanRepayment: "",
    },
    id: "",
  },
  users: [],
  loading: true,
});

export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [userId, setUserId] = useState<string>("");
  const [user, setUser] = useState<User>({
    createdAt: "",
    orgName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    lastActiveDate: "",
    profile: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      avatar: "",
      gender: "",
      bvn: "",
      address: "",
      currency: "",
    },
    guarantor: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      gender: "",
      address: "",
    },
    accountBalance: "",
    accountNumber: "",
    socials: {
      facebook: "",
      instagram: "",
      twitter: "",
    },
    education: {
      level: "",
      employmentStatus: "",
      sector: "",
      duration: "",
      officeEmail: "",
      monthlyIncome: [],
      loanRepayment: "",
    },
    id: "",
  });
  // const [userId, setUserId] = useState<string>("");
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

  const getUser = async (id: number) => {
    try {
      setLoading(true);
      const response = await axios.get<User>(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      );
      const { data } = response;

      await localStorage.setItem("user", JSON.stringify(data));
      setUserId(data.id);
      await setUser(JSON.parse(localStorage.getItem("user") || "{}"));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") || "{}"));
  }, [userId]);

  useEffect(() => {
    fetchUsers();
    // let localStoredUser = localStorage.getItem("user");
    // if (localStoredUser) {
    //   setUser(JSON.parse(localStoredUser));
    // }
  }, []);

  return (
    <usersContext.Provider value={{ user, users, loading, getUser }}>
      {children}
    </usersContext.Provider>
  );
};

export default usersContext;
