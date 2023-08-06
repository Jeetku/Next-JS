"use client";
import Image from "next/image";
import styles from "./page.module.css";
import style from "./style.module.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import profile from "../../public/vercel.svg";

export default function Home() {
  const [name, setName] = useState("hello");

  const [color, setColor] = useState("red");

  const updateColor = () => {
    if (color == "red") {
      setColor("green");
    } else {
      setColor("red");
    }
  };

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

  const { red } = style;

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

      <h1>Fetch Data with API in Client Components</h1>

      <Link href="/productsList">Go to Product List</Link>
      <br />
      <br />
      <h1>Fetch Data with API in Server Components</h1>
      <Link href="/productListSSR">Go to Product List</Link>
      <br />
      <div>
        <h1 className={color == "red" ? style.red : style.green}>
          Conditional module Css
        </h1>
        <h2
          style={{
            backgroundColor: color == "red" ? "red" : "green",
          }}
        >
          Background{" "}
        </h2>
        <h3 id={style.orange}>Id attribute Css Module</h3>
        <h4 className={red}>Dummy Text</h4>
        <h4 className={red}>Dummy Text</h4>
        <h4 className={red}>Dummy Text</h4>
        <h4 className={red}>Dummy Text</h4>
        <button onClick={updateColor}>update Color</button>
      </div>
      <div>
        <Image src={profile} alt="profile" width={500} height={500} />
        {/* <img src={profile.src} alt="profile" /> */}
        {/* <Image
          src="https://www.freeimages.com/photo/forest-1400475"
          alt="imgae"
          width={500}
          height={200}
        /> */}
      </div>
    </main>
  );
}
