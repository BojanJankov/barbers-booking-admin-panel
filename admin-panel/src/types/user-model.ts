export interface User {
  id: string;
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  role: string;
  refreshToken: string[];
}
