import Link from "next/link";

export default function StudentList() {
  return (
    <div>
      <h1>StudentList</h1>
      <ul>
        <li>
          <Link href="/studentsList/harry">Harry</Link>
        </li>
        <li>
          <Link href="/studentsList/john">John</Link>
        </li>
        <li>
          <Link href="/studentsList/peter">Peter</Link>
        </li>
        <li>
          <Link href="/studentsList/sam">Sam</Link>
        </li>
        <li>
          <Link href="/studentsList/jeetesh">Jeetesh</Link>
        </li>
      </ul>
    </div>
  );
}
