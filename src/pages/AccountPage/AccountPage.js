import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";

function AccountPage() {
    const {user} = useContext(AuthContext);
    return (
        <div className="inner-container">
            <h1 className="h1-vervolg">Uw account overzicht</h1>
            <table>
                <tbody>
                <tr>
                    <td>Emailadres: </td>
                    {/*<td>{user.email}</td>*/}
                </tr>
                <tr>
                    <td>Gebruikersnaam: </td>
                    {/*<td>{user.username}</td>*/}
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AccountPage;