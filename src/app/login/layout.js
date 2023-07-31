import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <h1>Common Layput for Login screen </h1>
        <br />
        <Link href="/about/aboutPage">Nested About page link</Link>
        {children}
      </div>
    </>
  );
}
