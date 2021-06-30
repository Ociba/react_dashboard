import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import AgentForm from "views/AgentForm.js";

function App() {
    return (
      
    <div className="content">
              <Router>
                <Route path="/addagent" exact><AgentForm /></Route> 
              </Router>
    </div>
    
    );
    }
    export default App;