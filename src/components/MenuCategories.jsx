const MenuCategories = () => {
  const menu = [
    { category: "Fruits", items: ["Apple", "Banana", "Orange"] },
    { category: "Vegetables", items: ["Carrot", "Spinach"] }
  ];

  return (
    <div>
      <h3>Menu Categories</h3>
      {menu.map((group, index) => (
        <div key={index}>
          <h4>{group.category}</h4>
          <ul>
            {group.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MenuCategories;
