"use client";
const Lecture = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h1>Day of college {params.lectures[0]}</h1>
      <h2>Lecture of {params.lectures[1]}</h2>
      <p>completed Lectures no.: {params.lectures[2]}</p>
    </div>
  );
};

export default Lecture;
