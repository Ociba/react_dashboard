import React, {Component} from "react";

import axios from 'axios'
// reactstrap components
import { Card, CardHeader, CardBody, Button, CardTitle, Row, Col, Table } from "reactstrap";
import {Switch, Link, Route} from 'react-router-dom';
import AgentForm from './AgentForm';
//import EditAgent from 'views/EditAgent.js';

class Agent extends Component {
  constructor(props){
    super(props)
    this.state ={
       items :[]
    }
    this.handleDelete =this.handleDelete.bind(this);
  }

  componentDidMount(){
    this.getData();
  }
   getData(){
       axios.get('http://localhost:8000/api/get-broker').then(response => {this.setState({
      items:response.data
  })
})
}
handleDelete(e){
  e.preventDefault();
  const id =e.target.id.value;
  axios.delete('http://localhost:8000/api/delete-broker/'+id);

        this.getData();
}
render(){
  return (
      <div className="content">
      <Row>
          <Col md="12">
            <Card>
            <CardHeader>
              <Row>
                  <Col md="3">
                    <Card className="card-plain">
                      <CardHeader>
                        <CardTitle tag="h5">JJ Accomadation Consultants</CardTitle>
                      </CardHeader>
                      
                    </Card>
                  </Col>
                  <Col md="3"></Col>
                  <Col md="3"></Col>
                  <Col md="3">
                    <Card className="card-plain">
                    <CardHeader>
                        <CardTitle tag="h5"><Link to="/admin/addagent"><Button className="btn-sm btn btn-primary buton" style={{fontSize:'16px',textTransform: 'capitalize'}}>Add Agent</Button></Link>
                        <Switch>
                          <Route path="/admin/addagent" component={AgentForm} />
                      </Switch>
                        </CardTitle>
                      </CardHeader>
                      
                    </Card>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
               {
               this.state.items.length!==0 ?
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                       <th>No</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Location</th>
                      <th className="text-center">Option</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                  this.state.items.map((item,i)=>(
                    <tr>
                      <td>{i+1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone_number}</td>
                      <td>{item.current_location}</td>
                      <td>
                        <Link to={`/admin/editagent/${item.id}/edit-agent`} key={item.id}><Button className="mr-1 btn-sm btn-success" style={{fontSize:'16px',textTransform: 'capitalize'}}>Edit</Button></Link>
                        </td>
                        <td>
                        <form onSubmit={this.handleDelete} >
                          <input type="hidden" name="id" value={item.id}  />
                          <Button type="submit"  className="btn-sm  btn-danger" style={{fontSize:'16px',textTransform: 'capitalize'}}>Delete</Button>
                        </form>
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </Table>
                  
                  : <div> No item added yet!</div>
                 }
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
   
      )
  }
}

export default Agent;
