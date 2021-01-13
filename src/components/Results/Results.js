import React from "react";

function SearchResults(props) {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email Address</th>
                        <th>Phone Number</th>
                        <th>Date of Birth</th>
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
        </div>
    )
}

export default SearchResults