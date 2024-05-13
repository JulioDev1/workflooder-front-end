"use client";
import Button from "@/app/components/Button";
import { Input } from "@/app/components/Input";
import Email from "@/app/icons/Email";
import Password from "@/app/icons/Password";
import User from "@/app/icons/User";
import Work from "@/app/icons/Work";
import { UserRegister } from "@/app/models/User";
import { registerForm } from "@/app/services/api/authentication";
import { useMutation } from "@tanstack/react-query";
import { Roboto } from "next/font/google";
import { useForm } from "react-hook-form";

const roboto = Roboto({ weight: "500", subsets: ["latin"] });
const robotoExtraBold = Roboto({ weight: "900", subsets: ["latin"] });

type FormValues = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
  cellphone: string;
  role: string;
  act_area: string;
};

export default function Register() {
  const { register, handleSubmit } = useForm<FormValues>();

  const addData = useMutation({
    mutationFn: async (data: UserRegister) => {
      try {
        await registerForm(data);
      } catch (error) {
        throw error;
      }
    },
  });

  const onSubmit = handleSubmit((data: FormValues) => {
    const dd = data.cellphone.slice(0, 2);

    const number = data.cellphone.slice(2, data.cellphone.length);

    const dataToSend = {
      name: data.name,
      email: data.email,
      password: data.password,
      number: [{ ddd: dd, number: number }],
      role: data.role,
      act_area: data.act_area,
    };

    console.log(dataToSend);
  });

  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center justify-center p-1 gap-8 flex-col w-2/12"
    >
      <div className="flex items-center justify-center flex-col w-full">
        <h1 className={`${roboto.className} text-4xl`}>Welcome to</h1>
        <h1
          className={`${robotoExtraBold.className} text-5xl  text-transparent bg-gradient-to-r from-custom-gradient-start to-custom-gradient-end bg-clip-text`}
        >
          Workflooder
        </h1>
      </div>

      <div
        className={`${roboto.className} w-full flex items-center justify-center flex-col gap-y-3.5`}
      >
        <Input
          icons={<User />}
          type="text"
          placeholder="Digite seu Nome"
          {...register("name")}
        />

        <Input
          icons={<Email />}
          type="text"
          {...register("email", { required: true })}
        />
        <Input
          icons={<Password />}
          type="password"
          placeholder="Digite seu Password"
          {...register("password", { required: true })}
        />
        <Input
          icons={<Password />}
          type="password"
          placeholder="Digite seu Password"
          {...register("repeatPassword", { required: true })}
        />
        <Input
          type="text"
          placeholder="Digite seu Numero"
          {...register("cellphone", { required: true })}
        />
        <Input
          icons={<Work />}
          type="text"
          placeholder="Digite seu area de atuação"
          {...register("role", { required: true })}
        />
        <Input
          icons={<Work />}
          type="text"
          placeholder="Digite o cargo desejado"
          {...register("act_area", { required: true })}
        />

        <Button />
        <div className="flex w-full">
          <span className="bg-transparent"> Você ja tem conta? </span>{" "}
          <h1>Login</h1>
        </div>
      </div>
    </form>
  );
}
