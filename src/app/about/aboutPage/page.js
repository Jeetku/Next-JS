"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AboutPage = () => {
  const router = useRouter();

  return (
    <>
      <div>About Page nested of About</div>;
      <br />
      <br />
      <button onClick={() => router.push("/about")}>back to About page</button>
    </>
  );
};

export default AboutPage;
