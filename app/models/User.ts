type Number = {
  id?: string;
  ddd: string;
  number: string;
};
export type UserRegister = {
  name: string;
  email: string;
  password: string;
  number: Number[];
  role: string;
  act_area: string;
};

export type UserAuthentication = {
  email: string;
  password: string;
};
