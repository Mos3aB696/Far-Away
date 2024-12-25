export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>No items on your list 😢</em>
      </footer>
    );

  const itemsLength = items.length;
  const packedItemsLength = items.filter((item) => item.packed).length;
  const packedItemsPercentage = Math.round(
    (packedItemsLength / itemsLength) * 100
  );
  return (
    <footer className="stats">
      {packedItemsPercentage === 100 ? (
        <em>You got everything! Ready to go ✈️ </em>
      ) : (
        <em>
          👜 You have {itemsLength} items on your list, and you already packed{" "}
          {packedItemsLength} (
          <span style={{ background: "#59c737", color: "#fff" }}>
            {packedItemsPercentage}%
          </span>
          )
        </em>
      )}
    </footer>
  );
}
