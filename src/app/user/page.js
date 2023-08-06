export default function Page() {
  return (
    <div>
      <h1>User Page</h1>
    </div>
  );
}

export function generateMetadata({ params }) {
  return {
    title: " user page Title ",
    description: "user page description",
  };
}
