function CategoryFilter({ categories, selected, onChange }) {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded px-3 py-2"
    >
      <option value="all">All</option>
      {categories?.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;