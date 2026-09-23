import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";

function Home() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data.slice(0, 3));
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <>
      <section className="bg-slate-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-slate-200">
              PRODEXA Store
            </span>

            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Discover products for everyday life.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              A clean product dashboard for browsing, searching, and filtering
              products from the Fake Store API.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="rounded-xl bg-white px-5 py-3 font-bold text-slate-900 hover:bg-slate-100"
              >
                Explore Products
              </Link>
              <Link
                to="/about"
                className="rounded-xl border border-slate-600 px-5 py-3 font-bold text-white hover:bg-slate-800"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-800 p-8 shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Dashboard
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-slate-700 p-5">
                <p className="text-3xl font-black">{products.length || "—"}</p>
                <p className="mt-1 text-sm text-slate-300">Featured items</p>
              </div>
              <div className="rounded-2xl bg-slate-700 p-5">
                <p className="text-3xl font-black">API</p>
                <p className="mt-1 text-sm text-slate-300">Live product data</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
              Featured
            </p>
            <h2 className="mt-2 text-3xl font-black">Popular products</h2>
          </div>
          <Link
            to="/products"
            className="font-semibold text-slate-700 underline underline-offset-4 hover:text-slate-950"
          >
            View all products →
          </Link>
        </div>

        {status === "loading" && (
          <p className="rounded-xl bg-white p-8 text-center text-slate-500 shadow-sm">
            Loading featured products...
          </p>
        )}

        {status === "error" && (
          <p className="rounded-xl border border-red-200 bg-red-50 p-8 text-center text-red-700">
            Something went wrong. Please try again.
          </p>
        )}

        {status === "success" && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Home;