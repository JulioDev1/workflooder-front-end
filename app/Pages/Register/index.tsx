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
  // repeatPassword?: string;
  number: [{ ddd: string; number: string }];
  act_area: string;
  role: string;
};

export default function Register() {
  const { register, handleSubmit } = useForm<FormValues>();

  const addData = useMutation({
    mutationFn: async (data: UserRegister) => {
      try {
        await registerForm(data);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const onSubmit = handleSubmit(async (data: FormValues) => {
    try {
      await addData.mutate(data);
    } catch (error) {
      console.log(error);
    }
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
        {/* <Input
          icons={<Password />}
          type="password"
          placeholder="Digite seu Password"
          {...register("repeatPassword", { required: true })}
        /> */}
        <Input
          type="text"
          placeholder="Digite seu ddd"
          {...register("number.0.ddd", { required: true })}
        />

        <Input
          type="text"
          placeholder="Digite seu numero"
          {...register("number.0.number", { required: true })}
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
