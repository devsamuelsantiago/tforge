import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavItem({ href, children }: any) {
  const [isActive, setIsActive] = useState(false);

  const pathname = window?.location.pathname;

  useEffect(() => {
    console.log(window?.location.pathname);

    if (window && pathname == href) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [href, pathname]);

  return (
    <Link
      className={`flex items-center gap-3 rounded-lg
        px-3 py-2 text-zinc-900 transition-all hover:text-zinc-900
        ${isActive ? "bg-zinc-100 dark:bg-zinc-800" : ""} 
         dark:text-zinc-50 dark:hover:text-zinc-50`}
      href={href}
    >
      {children}
    </Link>
  );
}
