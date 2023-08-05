"use client";
import Custom from "./custom.module.css";
import extra from "./extra.module.css";
import outside from "@/style/outside.module.css";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("hello");

  const apple = () => {
    if (name === "hello") {
      setName("NextJS");
    } else {
      setName("hello");
    }
  };
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  return (
    <main>
      <br />
      <h1>Nested Routing {name}</h1>
      <br />
      <button onClick={apple}>Toggle</button>
      <br />
      <br />
      <Link href="/login">Go to Login Page</Link>
      <br />
      <br />
      <Link href="/about">Go to About Page</Link>
      <br />
      <br />
      <div>
        <h1 className={Custom.main}>Css Modules in NextJS</h1>
        <h2 className={extra.main}>Css Modules in NextJS</h2>
        <h4 className={outside.main}>Css Modules in NextJS</h4>
      </div>
    </main>
  );
}
