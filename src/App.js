import React, {Component} from 'react';
import {GlobalStyle} from './index_css.js';
import Header from './common/Header'
import Home from './pages/Home'
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>

                <GlobalStyle/>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <div>
                            <Route path='/' exact component={Home}></Route>
                            <Route path='/detail' exact component={() => (<div>detail</div>)}></Route>
                        </div>
                    </div>

                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
