"use client";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/Bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="cursor-pointer hover:text-amber-500">
      {mounted &&
        (currTheme === "dark" ? (
          <BsFillSunFill onClick={() => setTheme("light")} />
        ) : (
          <BsFillMoonFill onClick={() => setTheme("dark")} />
        ))}
    </div>
  );
};

export default DarkModeSwitch;
