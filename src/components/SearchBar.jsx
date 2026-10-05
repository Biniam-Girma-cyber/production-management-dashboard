function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search products..."
      className="border rounded px-3 py-2 w-full"
    />
  );
}

export default SearchBar;