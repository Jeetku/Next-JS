"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("hello");

  const apple = () => {
    setName("NextJS");
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
      <button onClick={apple}>click</button>
      <br />
      <br />
      <Link href="/login">Go to Login Page</Link>
      <br />
      <br />
      <Link href="/about">Go to About Page</Link>
      <br />
      <br />

      <h1>Fetch Data with API in Client Components</h1>
      <br />
      <br />
      <Link href="/productsList">Go to Product List</Link>
    </main>
  );
}
