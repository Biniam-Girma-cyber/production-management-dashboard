feature/category-filter
function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="w-full sm:w-56">
      <label htmlFor="category-filter" className="sr-only">
        Filter by category
      </label>
      <select
        id="category-filter"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm bg-white
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                   transition-colors capitalize"
      >
        <option value="all">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category} className="capitalize">
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
