"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [name, setName] = useState("Siddhu");
  const apple = () => {
    setName("Mussewala");
  };
  return (
    <main className={styles.main}>
      <h1>Please like this video {name}</h1>
      <button onClick={() => apple()}>Click Me</button>
      <Link href="/login">Go to Login page</Link>
      <Link href="/about">Go to about page</Link>
    </main>
  );
}
