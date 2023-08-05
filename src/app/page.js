"use client";
import Custom from "./custom.module.css";
import extra from "./extra.module.css";
import outside from "@/style/outside.module.css";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import profile from "../../public/vercel.svg";

export default function Home() {
  // console.log(profile);
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
    <>
      <main>
        <br />
        <h1>Nested Routing {name}</h1>
        <br />

        <div>
          <h1 className={Custom.main}>Css Modules in NextJS</h1>
          <h2 className={extra.main}>Css Modules in NextJS</h2>
          <h4 className={outside.main}>Css Modules in NextJS</h4>
        </div>
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
      <div>
        <Image src={profile} alt="profile" width={500} height={500} />
        {/* <img src={profile.src} alt="profile" /> */}
        <Image
          src="https://www.freeimages.com/photo/forest-1400475"
          alt="imgae"
          width={500}
          height={200}
        />
      </div>
    </>
  );
}
