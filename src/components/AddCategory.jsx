import { useState } from "react"



// "onNewCategory" value recived by parent element(GifApp)
export const AddCategory = ({ onNewCategory }) => { 

    //Declaring input value
    const [inputValue, setInputValue] = useState('');

    //get input value changes
    const onInputChange = ({ target }) => {
        setInputValue(target.value); 
    }

    // when the form is sended
    const onSubmit = (event) => {
        //Not reaload the page
        event.preventDefault();
        //validate input
        let inputClean = inputValue.trim();
        if( inputClean.length <= 1) return;
        //add value
        onNewCategory(inputClean);
        //clean the input
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Search gif"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
