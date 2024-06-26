import { UserAuthentication, UserRegister } from "@/app/models/User";
import api from "./api";

export const registerForm = async (data: UserRegister) => {
  const response = await api(false).post("/register-user", data);
  console.log(response);
};

export const authenticationForm = async (data: UserAuthentication) => {
  try {
    const response = await api(true).post("/authenticate-user", data);

    return response;
  } catch (error) {
    console.log(error);
  }
};
