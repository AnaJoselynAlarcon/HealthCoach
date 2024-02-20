import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logo-teal500.png" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <div>
        <a href="https://wa.me/+14037144087" target="_blank" rel="noreferrer">
          <Button
            type="button"
            title="FREE Discovery Call"
            icon="/wa_icon.png"
            variant="btn_dark_green"
            full
          />
        </a>
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
