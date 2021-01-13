import React, { Component } from "react";
import SearchForm from "../Search/Search";
import SearchResults from "../Results/Results";
import API from "../../utils/API";
import "./Main.css";

class Main extends Component {
    state = {
        search: "",
        results: [],
        filtered: []
    };

    componentDidMount() {
        API.search().then(response => this.setState({ results: response.data.results })).catch(err => console.log(err));
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    Ascending = () => {
        const ascendingList = this.state.results.sort((a, b) => (a.name.first + a.name.last > b.name.first + b.name.last) ? 1 : -1)
        this.setState({ results: ascendingList })
    }

    Descending = () => {
        const descendingList = this.state.results.sort((a, b) => (a.name.first + a.name.last > b.name.first + b.name.last) ? -1 : 1)
        this.setState({ results: descendingList })
    }

    EmailSort = () => {
        const sortEmail = this.state.results.sort((a, b) => (a.email > b.email) ? 1 : -1)
        this.setState({ sortEmail })
    }

    EmailSortDown = () => {
        const sortEmailDown = this.state.results.sort((a, b) => (a.email > b.email) ? -1 : 1)
        this.setState({ sortEmailDown })
    }


    render() {
        const filteredList = this.state.results.filter((item) => {
            let data = item.name.first + item.name.last;
            data = data.toLowerCase();
            return data.indexOf(this.state.search.toLowerCase()) !== -1
        })


        return (
            <div>
                <div className="search">
                    <SearchForm handleInputChange={this.handleInputChange} />
                </div>
                <SearchResults
                    results={filteredList}
                    Ascending={this.Ascending}
                    Descending={this.Descending}
                    EmailSort={this.EmailSort}
                    EmailSortDown={this.EmailSortDown}
                />
            </div>
        );
    }
}

export default Main