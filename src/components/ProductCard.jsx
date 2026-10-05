import { useState } from "react";


export default function ProductCard({ product,onAddToCart,onViewDetails }) {
  const { id,title, price, category, description,thumbnail, images, rating } = product || {}
  const [isExpanded, setIsExpanded] = useState(false);
  
  
  function handleAddToCart(){
    if (onAddToCart) {
      onAddToCart(product);
    } else {
      alert(`  Added "${title}" to cart!`);
    }
  }

function handleViewDetails() {
    if (onViewDetails) {
      onViewDetails(id);
    } else {
      setIsExpanded(!isExpanded);
    }
  }
  
  return (
    <div className="bg-[#fff] p-4 rounded-xl border border-[#e5e4e7] shadow-md w-full space-y-2  hover:shadow-xl transition">
      <h3 style={{ color: "#000" }} className="font-bold leading-6 ">{title}</h3>
      <img src={thumbnail || images?.[0]} alt={title} className=" w-full h-48 object-contain bg-[#f4f3ec] rounded-lg  my-2.5" />
      <p className="font-bold mt-2.5 text-lg ">${price}</p>
      <p className="text-sm text-gray-500 ">{category}</p>
      <p className="text-yellow-500 font-semibold">★{rating}</p>
      <p className={`text-sm mt-2 ${isExpanded ? "" : "line-clamp-1"}`}>{description}</p>
     <button  onClick={handleAddToCart} className="bg-slate-900  text-white  font-semibold rounded-lg mt-3 py-2 hover:opacity-80 w-full transition flex items-center justify-center">Add to cart</button>
    <button onClick={handleViewDetails} className="border border-slate-900 text-[#aa3bff] rounded-lg mt-2 w-full py-2">{isExpanded ? "Hide Details" : "View Details"}</button>
    </div>
  
  )
}

