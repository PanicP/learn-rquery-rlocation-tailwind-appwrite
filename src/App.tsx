import React, { useEffect } from 'react'
import { Appwrite } from "appwrite";
import logo from './logo.svg'
import './App.css'

const App = () => {

    const appwrite = new Appwrite()

    useEffect(() => {
        appwrite
            .setEndpoint('http://localhost/v1') // Your Appwrite Endpoint
            .setProject('455x34dfkj') // Your project IF

        console.log('set appwrite')
    })

    // appwrite
    //   .account.create('me@example.com', 'password', 'Jane Doe')
    //       .then(response => {
    //           console.log(response);
    //       }, error => {
    //           console.log(error);
    //       });
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
