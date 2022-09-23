import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const CategoryContext = createContext();
const useCategory = () => useContext(CategoryContext);

const CategoryProvider = ({ children }) => {
	const [categories, setCategories] = useState([]);

	useEffect(
		() => async () => {
			const categoryData = await axios.get("api/categories");
			setCategories(categoryData.data.categories);
		},
		[]
	);

	return (
		<CategoryContext.Provider value={{ categories }}>
			{children}
		</CategoryContext.Provider>
	);
};

export { useCategory, CategoryProvider };
