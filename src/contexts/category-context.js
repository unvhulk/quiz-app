import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const CategoryContext = createContext();
const useCategory = () => useContext(CategoryContext);

const CategoryProvider = ({ children }) => {
	const [categories, setCategories] = useState([]);

	useEffect(function outer() {
		async function inner() {
			const categoryData = await axios.get("api/categories");
			setCategories(categoryData.data.categories);
		}
		inner();
	}, []);

	return (
		<CategoryContext.Provider value={{ categories }}>
			{children}
		</CategoryContext.Provider>
	);
};

export { useCategory, CategoryProvider };
