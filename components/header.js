import DarkMode from "./dark-mode";
import Navigation from "./navigation";
import useServerDarkMode from "@/hooks/use-server-dark-mode";
import Link from "next/link";

export default function Header() {
  const theme = useServerDarkMode();

  return (
    <>
      <header className='flex justify-between md: items-center'>
        <div className='hidden md:block'>
          <Link href='/' className='text-xl font-mono'>
            Omar Zaatari
          </Link>
        </div>
        <div className='flex items-center md:space-x-12'>
          <Navigation></Navigation>
        </div>
        <div>
          <DarkMode defaultTheme={theme} />
        </div>
      </header>
    </>
  );
}
