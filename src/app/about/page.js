"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1>About </h1>
      <div>
        <Link href="/">Go to Home Page</Link>
        <br />
        <br />
        <button onClick={() => router.push("/")}>Go to Home page</button>
        <br />
        <br />
        <button onClick={() => router.push("/about/aboutPage")}>
          About nested page
        </button>
      </div>
    </div>
  );
};

export default About;
