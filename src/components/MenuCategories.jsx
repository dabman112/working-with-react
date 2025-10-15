const MenuCategories = () => {
  const menu = [
    { category: "Fruits", items: ["Apple", "Banana", "Orange"] },
    { category: "Vegetables", items: ["Carrot", "Spinach"] },
  ];

  return (
    <div>
      <h3>Exercise 3: Menu Categories</h3>
      {menu.map((section, index) => (
        <div key={index}>
          <h4>{section.category}</h4>
          <ul>
            {section.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MenuCategories;
