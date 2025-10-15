const StudentGroups = () => {
  const students = [
    { id: 1, name: "Alice", grade: "A" },
    { id: 2, name: "Bob", grade: "B" },
    { id: 3, name: "Charlie", grade: "A" },
    { id: 4, name: "David", grade: "C" }
  ];

  const grouped = students.reduce((acc, student) => {
    acc[student.grade] = acc[student.grade] || [];
    acc[student.grade].push(student.name);
    return acc;
  }, {});

  return (
    <div>
      <h3>Students Grouped by Grade</h3>
      {Object.keys(grouped).map(grade => (
        <div key={grade}>
          <h4>Grade {grade}</h4>
          <ul>
            {grouped[grade].map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StudentGroups;
