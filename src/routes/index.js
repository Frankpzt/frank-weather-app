import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes as Switch,
} from "react-router-dom"

import SearchBar from '../components/searchBar';
import Main from '../layouts/main';
import RemoveSection from "../components/removeSection"

function routes() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/' exact element={<Main />} />
                    <Route path='/SearchBar' exact element={<SearchBar />} />
                    <Route path='/RemoveSection' exact element={<RemoveSection />}/>
                </Switch>
            </Router>
        </div>
    );
}

export default routes;