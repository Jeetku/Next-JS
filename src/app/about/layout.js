import Link from "next/link";
import "./about.css";
export default function Layout({ children }) {
  return (
    <>
      <div>
        <ul className="login-menu">
          <li>
            <h4>About Navbar</h4>
          </li>
          <li>
            <Link href="/about">About main</Link>
          </li>
          <li>
            <Link href="/login/studentLogin">About Students </Link>
          </li>
          <li>
            <Link href="/login/teacherLogin">About College</Link>
          </li>
        </ul>

        {children}
      </div>
    </>
  );
}
