import style from '../recipe.module.css';   // To apply Custom made CSS for each individual section

const Recipe = ({recipe}) => {
    return (
        <div className={style.recipe}>
            <h1>Title: {recipe.recipe.label}</h1>
            <ol>
                {recipe.recipe.ingredients.map(ingredient => (
                    <li key={ingredient.foodId}>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories: {recipe.recipe.calories}</p>
            <img className={style.image} src={recipe.recipe.image}></img>
        </div>
    )
}

export default Recipe;

