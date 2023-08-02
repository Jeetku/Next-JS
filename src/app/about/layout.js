"use client";
import Link from "next/link";
import "./about.css";
import { usePathname } from "next/navigation";
export default function Layout({ children }) {
  const pathName = usePathname();
  return (
    <>
      <div>
        {pathName !== "about/aboutCollege" ? (
          <ul className="login-menu">
            <li>
              <h4>About Navbar</h4>
            </li>
            <li>
              <Link href="/about">About main</Link>
            </li>
            <li>
              <Link href="/about/aboutStudent">About Students </Link>
            </li>
            <li>
              <Link href="/about/aboutStudent">About College</Link>
            </li>
          </ul>
        ) : null}

        {children}
      </div>
    </>
  );
}
