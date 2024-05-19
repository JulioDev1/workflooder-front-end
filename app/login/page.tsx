"use client";
import { Input } from "@/app/components/Input";
import Email from "@/app/icons/Email";
import Password from "@/app/icons/Password";
import { Roboto } from "next/font/google";
import { useForm } from "react-hook-form";
import Button from "../components/Button";

interface FormLogin {
  email: string;
  password: string;
}

const roboto = Roboto({ weight: "500", subsets: ["latin"] });
const robotoExtraBold = Roboto({ weight: "900", subsets: ["latin"] });

export default function Login() {
  const { register } = useForm<FormLogin>();
  return (
    <form className="flex items-center justify-center p-1 gap-8 flex-col w-full h-screen">
      <div className="flex  justify-center flex-row w-full">
        <h1 className={`${roboto.className} text-4xl`}>Welcome</h1>
        <h1
          className={`${robotoExtraBold.className} text-5xl  text-transparent bg-gradient-to-r from-custom-gradient-start to-custom-gradient-end bg-clip-text`}
        >
          Back
        </h1>
      </div>

      <div
        className={`${roboto.className} w-2/12 flex items-center justify-center flex-col gap-y-3.5`}
      >
        <Input
          icons={<Email />}
          type="text"
          placeholder="Digite seu Email"
          {...register("email", { required: true })}
        />
        <Input
          icons={<Password />}
          type="password"
          placeholder="Digite seu Password"
          {...register("password", { required: true })}
        />
        <Button />
      </div>
    </form>
  );
}
