"use client";
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
    </main>
  );
}
