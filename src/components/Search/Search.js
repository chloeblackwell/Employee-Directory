import React from "react";
import "./Search.css";

function SearchForm(props) {
    return (
        <form className="search">
            <div className="form-group">
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="search"
                    type="text"
                    label="Search!"
                    className="form-control"
                    placeholder="Search Name"
                    id="searchBar"
                />
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success mt-3 searchButton">
                    Search
                </button>
            </div>
        </form>
    )
}

export default SearchForm