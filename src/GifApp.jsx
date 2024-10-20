import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GifApp = () => {

    // Declaring list of things
    const [categories, setCategories] = useState([]);

    //Recives the category from "AddCategory"
    const onAddCategory = (newCategory) => {
        //Validation to not duplicate categories
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* ****This is the app structure*** */}

            {/* title */}
            <h1>Search your Gif</h1>

            {/* Search */}
            <AddCategory
                onNewCategory={onAddCategory}
                currentCategories={categories}
            />

            {/* GIF list */}
                {
                    categories.map((category) => (
                        <GifGrid
                            key={category} 
                            category={ category }
                        />
                    ))
                }
        </>
    )
}
