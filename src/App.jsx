import ShoppingList from "./components/ShoppingList";
import ProductList from "./components/ProductList";
import MenuCategories from "./components/MenuCategories";
import BookList from "./components/BookList";
import AnimalFilter from "./components/AnimalFilter";
import StudentGroups from "./components/StudentGroups";
import MessageList from "./components/MessageList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React Mapping Exercises</h1>
      <ShoppingList />
      <ProductList />
      <MenuCategories />
      <BookList />
      <AnimalFilter />
      <StudentGroups />
      <MessageList />
    </div>
  );
}

export default App;
