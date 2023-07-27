import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Please like this video</h1>
      <User name="Jeetesh" />
    </main>
  );
}

const User = ({ name }) => {
  return (
    <div>
      <h2>My name is {name}</h2>
    </div>
  );
};
