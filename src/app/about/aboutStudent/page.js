"use client";
import { useRouter } from "next/navigation";

const AboutStudent = () => {
  const router = useRouter();

  const navigate = (name) => {
    router.push(name);
  };
  return (
    <div>
      <h1 className="heading">About Page for Student</h1>
      <br />
      <br />
      <button onClick={() => navigate("/about")}>About Main</button>
    </div>
  );
};

export default AboutStudent;
