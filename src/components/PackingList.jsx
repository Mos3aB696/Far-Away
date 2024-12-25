import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortedBy, setSortedBy] = useState("input");

  let sortedItems;

  if (sortedBy === "input") sortedItems = items;

  if (sortedBy === "description") {
    sortedItems = [...items].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  }

  if (sortedBy === "packed") {
    sortedItems = [...items].sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
          <option value="input">Sorted by Input order</option>
          <option value="description">Sorted by Description</option>
          <option value="packed">Sorted by Packed</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
