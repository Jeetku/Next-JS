import Link from "next/link";
import "./login.css";
export default function Layout({ children }) {
  return (
    <>
      <div>
        <ul className="login-menu">
          <li>
            <h4>Login Navbar</h4>
          </li>
          <li>
            <Link href="/login">Login main</Link>
          </li>
          <li>
            <Link href="/login/studentLogin">Student Login</Link>
          </li>
          <li>
            <Link href="/login/teacherLogin">Teacher Login</Link>
          </li>
        </ul>

        {children}
      </div>
    </>
  );
}
