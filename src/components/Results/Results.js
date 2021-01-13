import React from "react";
import ArrowUp from '@material-ui/icons/ArrowUpward';
import ArrowDown from '@material-ui/icons/ArrowDownward';

function SearchResults(props) {

    return (
        <div>
            <table class="table table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name <ArrowUp className="icon" onClick={props.Ascending} /> <ArrowDown className="icon" onClick={props.Descending} /></th>
                        <th scope="col">Email Address <ArrowUp clasName="icon" onClick={props.EmailSort} /> <ArrowDown className="icon" onClick={props.EmailSortDown} /></th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    {props.results.map((user, i) =>
                        <tr key={i}>
                            <td><img className="user" src={user.picture.large} alt="userImage" /></td>
                            <td>{user.name.first} {user.name.last}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.dob.date.substring(0, 10)}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div >
    )
}

export default SearchResults