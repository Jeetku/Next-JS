"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Login</h1>
      <div>
        <Link href="/">Go to Home Page</Link>
        <br/>
        <br/>
        <button onClick={() => router.push("/")}>Go to Home page</button>
      </div>
    </div>
  );
};

export default LoginPage;
