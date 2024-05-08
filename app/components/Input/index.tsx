import { Roboto } from "next/font/google";
import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icons?: React.ReactNode;
};
const roboto = Roboto({ weight: "300", subsets: ["latin"] });

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, type, icons, ...rest }, ref) => {
    return (
      <div className="w-full flex flex-row items-center relative">
        <div className="w-full flex flex-row items-center justify-center">
          {icons}
          <input
            {...rest}
            type={type}
            name={name}
            ref={ref}
            className={`${roboto.className}peer w-full border-2  rounded-lg h-14 pl-12 transition ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-color-hover focus:border-transparent placeholder-gray-400 pr-4 py-2  border-gray-300`}
          />
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";
