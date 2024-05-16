import { UserRegister } from "@/app/models/User";
import api from "./api";

export const registerForm = async (data: UserRegister) => {
  try {
    const response = await api(false).post("/register-user", data);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
// export default {
//   cadastro: (body: any) => {
//     return api(false).post("/register-user", body);
//   },
// };
