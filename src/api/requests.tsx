import { BoardData, Boards, User } from "../Interfaces";

const baseUrl = "http://localhost:3000";

/**
 * Função que devolve o único usuário cadastrado
 * @returns 
 */
const fetchUser = async (): Promise<User | null> => {
  const response = await fetch(`${baseUrl}/user`);
  if (!response.ok) {
    return null;
  }
  return response.json();
};

/**
 * função para realizar login do usuário
 * @param email 
 * @param password 
 * @returns 
 */
export const login = async (
  email: string,
  password: string
): Promise<User | false> => {
  try {
    const data = await fetchUser();

    if (!data) {
      return false;
    }

    if (password === data.password && email === data.email) {
      return data;
    }

    return false;

  } catch (error) {
    return false;
  }
};

export const getBoards = async (): Promise<BoardData[]> => {
  const user = await fetchUser();
  return user!.boards;
}

export const updateUserBoards = async (boards: Boards[]): Promise<User> => {
  const user = await fetchUser();
  const updatedUser = { ...user, boards };
  
  const response = await fetch(`${baseUrl}/user`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedUser),
  });

  if (!response.ok) {
    throw new Error('Failed to update user boards');
  }

  return response.json();
};