import { Moon, Sun } from 'lucide-react'
import React, { useCallback, useState } from 'react'
import { cn } from '../lib/utils';
import { useEffect } from 'react';
function ThemeToggle() {
    const [isDarkMode, setisDarkMode]=useState(false)



    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
          setisDarkMode(true);
          document.documentElement.classList.add("dark");
        } else {
          localStorage.setItem("theme", "light");
          setisDarkMode(false);
        }
      }, []);

      const toggleBtn = () => {
        if (isDarkMode) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
          setisDarkMode(false);
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
          setisDarkMode(true);
        }
      };
  return (
    <button onClick={toggleBtn} className={cn("fixed max-sm-hidden top-5 right-5 z-50 p-2 rounded-full   transition-colors duration-300",
        "focus :outline-hidden"
    )}>
        {" "}
        {isDarkMode?(<Sun  className=' h-6 w-6 text-yellow-300'/>) :(<Moon className=' h-6 w-6 text-blue-300'/>)}
    </button>
  )
}

export default ThemeToggle