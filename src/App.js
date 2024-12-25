import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((previousItems) => [...previousItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((previousItems) => previousItems.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((previousItems) =>
      previousItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure, you will lose all items?");
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        setItems={setItems}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
