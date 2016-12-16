import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';


class App extends Component {
    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyCZwVwqrUgyhyxECmRzHmqwLy2NxIWl5Mg',
            authDomain: 'manager-3f892.firebaseapp.com',
            databaseURL: 'https://manager-3f892.firebaseio.com',
            storageBucket: 'manager-3f892.appspot.com',
            messagingSenderId: '579025384687'
        };
        firebase.initializeApp(config);
    }


    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
