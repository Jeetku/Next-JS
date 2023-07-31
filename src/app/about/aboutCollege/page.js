"use client";
import { useRouter } from "next/navigation";

const AboutCollege = () => {
  const router = useRouter();

  const navigate = (name) => {
    router.push(name);
  };
  return (
    <div>
      <h1 className="heading">About Page for College</h1>
      <br />
      <br />
      <button onClick={() => navigate("/about")}>About Main</button>
    </div>
  );
};

export default AboutCollege;
