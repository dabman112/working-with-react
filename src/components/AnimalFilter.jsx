const AnimalFilter = () => {
  const animals = ["Cat", "Dog", "Elephant", "Cow", "Eagle"];
  const filteredAnimals = animals.filter(animal => animal.startsWith("E"));

  return (
    <div>
      <h3>Animals Starting with 'E'</h3>
      <ul>
        {filteredAnimals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnimalFilter;
