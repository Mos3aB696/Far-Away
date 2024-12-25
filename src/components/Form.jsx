import { useState } from "react";

export default function Form({ onAddItems }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handelSubmit(e) {
    e.preventDefault();

    if (!description.trim()) {
      alert("Please enter an item 😒");
      return;
    }

    const newItem = { id: Date.now(), description, quantity, packed: false };

    onAddItems(newItem);

    setQuantity(1);
    setDescription("");
  }

  return (
    <form className="add-form container" onSubmit={handelSubmit}>
      <h3>What do you need for your trip 👀 ?</h3>
      <div>
        <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item.."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </div>
    </form>
  );
}
