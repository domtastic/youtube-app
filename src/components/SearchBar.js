import React, {useState} from 'react';

const SearchBar = ({onFormSubmitted}) => {
    const [term, setTerm] = useState("");

    // const onInputChange = (e) => {
    //     setTerm( e.target.value);
    // };
    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmitted(term);
    };
    return (
        <div className="ui segment search-bar">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label htmlFor="">Search for a Video</label>
                    <input
                        type="text"
                        value={term}
                        onChange={(event)=> setTerm(event.target.value)}/>
                </div>

            </form>
        </div>
    );

};


export default SearchBar;
