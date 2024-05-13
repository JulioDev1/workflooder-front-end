import { UserRegister } from "@/app/models/User";
import api from "./api";

export const registerForm = async ({
  name,
  email,
  password,
  number: [{ ddd, number }],
  role,
  act_area,
}: UserRegister) => {
  const user = {
    name,
    email,
    password,
    number: [{ ddd, number }],
    role,
    act_area,
  };
  try {
    await api.post("/register-user", user, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    console.log(error);
  }
};
