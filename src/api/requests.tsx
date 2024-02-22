import { User } from "../Interfaces";

const baseUrl = "http://localhost:3000";

export const login = async (email: string, parseword: string): Promise<User | false> => {
  try {
    const response = await fetch(`${baseUrl}/user`);
    const data: User = await response.json();

    if (parseword === data.password && email === data.email) {
      return data;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
