import React from 'react';
import Counters from '../src/components/counters'
import Nav from '../src/components/navbar'


class App extends React.Component{

    state = {
        counters: [
          { id: 1, value: 0 },
          { id: 2, value: 0 },
          { id: 3, value: 0 },
          { id: 4, value: 0 },
          { id: 5, value: 0 }
        ]
      };
    
      delete = counterID => {
        const counters = this.state.counters.filter(c => c.id!==counterID);
        this.setState({counters})
      };
    
      handelIncrement = (counter) =>{
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
         counters[index].value++;
    
         this.setState({Counters})
    
      }
    
      handelReset = () =>{
        const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
        });
        this.setState({counters})
      }
    
    render(){
        return(
            <React.Fragment>
                <Nav totalCounters = {this.state.counters.filter(c=>c.value>0).length}/>
                <main className="container">
                <Counters
                    onReset = {this.handelReset}
                    onIncrement = {this.handelIncrement}
                    onDelete = {this.delete}
                    counter = {this.state.counters}
                />
                </main>
            </React.Fragment>
        );
    }
}

export default App;