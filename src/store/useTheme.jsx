import { create } from "zustand";

const defaultColor = "red";
const defaultBgColor = "black";

export const useTheme = create((set) => ({
  color: defaultColor,
  bgColor: defaultBgColor,
  setColor: (data1, data2) => set({ color: data1, bgColor: data2 }),
  setDefault: () => {
    set({ color: defaultColor, bgColor: defaultBgColor });
  },
}));
