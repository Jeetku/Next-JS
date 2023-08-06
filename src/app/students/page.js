export default function page() {
  return (
    <div>
      <h1>Students </h1>
    </div>
  );
}
export function generateMetadata({ params }) {
  return {
    title: "student details",
    description: "Student details for students",
  };
}
