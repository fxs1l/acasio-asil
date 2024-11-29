// Fetch all products: https://fakestoreapi.com/products
// Fetch categories: https://fakestoreapi.com/products/categories
// Fetch products by category: https://fakestoreapi.com/products/category/{category}

export const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return await response.json();
};

export const fetchCategories = async () => {
    const response = await fetch(
        "https://fakestoreapi.com/products/categories",
    );
    return await response.json();
};

export const fetchProductsByCategory = async (category) => {
    const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`,
    );
    return await response.json();
};
