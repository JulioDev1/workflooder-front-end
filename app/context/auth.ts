import { create } from "zustand";

type State = {
  token: string;
};
type Action = {
  token: string;
  isValid: boolean;
  validateToken: (state: State) => void;
};
export const useAuthentaction = create<State & Action>((setToken) => ({
  token: "",
  isValid: false,

  validateToken: (state) => {
    const acessToken = state.token;
    if (!acessToken) {
      setToken({ isValid: false });
    }
    return;
  },
}));
