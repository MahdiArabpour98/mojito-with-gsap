import { navLinks } from "@/constants";
import { logo } from "@/constants/images";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  useGSAP(() => {}, []);

  return (
    <nav>
      <div>
        <Link href="#home" className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={30} height={30} className="size-7" />
          <p>Velvet Pour</p>
        </Link>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
