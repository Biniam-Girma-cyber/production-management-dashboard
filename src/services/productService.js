const BASE_URL = "https://fakestoreapi.com/products";

export async function getProducts() {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const data = await response.json();
  return data;
}