import { useCallback, useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import { getProducts } from "../services/productService";

function Products() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState("");

  const loadProducts = useCallback(() => {
    setStatus("loading");
    setErrorMessage("");

    getProducts()
      .then((data) => {
        setProducts(data);
        setStatus("success");
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setStatus("error");
      });
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const categories = useMemo(
    () => [...new Set(products.map((product) => product.category))],
    [products]
  );

  const filteredProducts = useMemo(() => {
    const search = searchText.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(search);
      const matchesCategory =
        category === "all" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [products, searchText, category]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
          Catalog
        </p>
        <h1 className="mt-2 ml-6 text-4xl font-black tracking-tight">
          Products
        </h1>
        <p className="mt-3 mb -2 max-w-2xl text-slate-500">
          Browse products loaded from the Fake Store API. Search by product
          name and filter using categories returned by the API.
        </p>
      </div>

      {status === "loading" && (
        <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-slate-900" />
          <p className="mt-4 font-semibold">Loading products...</p>
        </div>
      )}

      {status === "error" && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
          <p className="font-bold text-red-800">Something went wrong.</p>
          <p className="mt-2 text-sm text-red-700">{errorMessage}</p>
          <button
            type="button"
            onClick={loadProducts}
            className="mt-5 rounded-lg bg-red-700 px-4 py-2 text-sm font-bold text-white hover:bg-red-800"
          >
            Try Again
          </button>
        </div>
      )}

      {status === "success" && (
        <>
          <div className="mb-8 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row">
            <SearchBar value={searchText} onChange={setSearchText} />
            <CategoryFilter
              categories={categories}
              value={category}
              onChange={setCategory}
            />
          </div>

          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-500">
              Showing {filteredProducts.length} of {products.length} products
            </p>

            {(searchText || category !== "all") && (
              <button
                type="button"
                onClick={() => {
                  setSearchText("");
                  setCategory("all");
                }}
                className="text-sm font-semibold text-slate-700 underline underline-offset-4"
              >
                Clear filters
              </button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
              <p className="text-xl font-bold">No products found.</p>
              <p className="mt-2 text-slate-500">
                Try a different search term or category.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default Products;