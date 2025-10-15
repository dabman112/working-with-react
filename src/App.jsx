import "./App.css";
import ShoppingList from "./components/ShoppingList";
import ProductList from "./components/ProductList";
import MenuCategories from "./components/MenuCategories";
import BookList from "./components/BookList";
import AnimalFilter from "./components/AnimalFilter";
import StudentGroups from "./components/StudentGroups";
import MessageList from "./components/MessageList";

function App() {
  return (
    <div className="App">
      <h1>Working with React Mapping Techniques</h1>

      <section>
        <h2>Exercise 1: Shopping List</h2>
        <ShoppingList />
      </section>

      <section>
        <h2>Exercise 2: Product List</h2>
        <ProductList />
      </section>

      <section>
        <h2>Exercise 3: Menu Categories</h2>
        <MenuCategories />
      </section>

      <section>
        <h2>Exercise 4: Book List</h2>
        <BookList />
      </section>

      <section>
        <h2>Exercise 5: Animal Filter</h2>
        <AnimalFilter />
      </section>

      <section>
        <h2>Exercise 6: Student Groups</h2>
        <StudentGroups />
      </section>

      <section>
        <h2>Exercise 7: Message List</h2>
        <MessageList />
      </section>
    </div>
  );
}

export default App;
