const StudentGroups = () => {
  const students = [
    { id: 1, name: "Alice", grade: "A" },
    { id: 2, name: "Bob", grade: "B" },
    { id: 3, name: "Charlie", grade: "A" },
    { id: 4, name: "David", grade: "C" },
  ];

  const grouped = students.reduce((acc, student) => {
    acc[student.grade] = acc[student.grade] || [];
    acc[student.grade].push(student.name);
    return acc;
  }, {});

  return (
    <div>
      <h3>Exercise 6: Student Groups</h3>
      {Object.entries(grouped).map(([grade, names]) => (
        <div key={grade}>
          <h4>Grade {grade}</h4>
          <ul>
            {names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StudentGroups;
