import React from 'react';
import Counters from '../src/components/counters'
import Nav from '../src/components/navbar'


class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Nav/>
                <main className="container">
                <Counters/>
                </main>
            </React.Fragment>
        );
    }
}

export default App;