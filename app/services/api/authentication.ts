import api from "./api";

// export const registerForm = async ({
//   name,
//   email,
//   password,
//   number: [{ ddd, number }],
//   role,
//   act_area,
// }: UserRegister) => {
//   const user = {
//     name,
//     email,
//     password,
//     number: [{ ddd, number }],
//     act_area,
//     role,
//   };
//   try {
//     const response = await api(false).post("/register-user", user);
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };
export default {
  cadastro: (body: any) => {
    return api(false).post("/register-user", body);
  },
};
