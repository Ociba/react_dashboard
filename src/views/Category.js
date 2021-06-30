import React, {Component} from "react";
// react plugin for creating notifications over the dashboard
//import NotificationAlert from "react-notification-alert";
// reactstrap components
import axios from 'axios'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
import AddCategory from "views/AddCategory.js";
import {Link, Switch, Route} from "react-router-dom";

class Category extends Component {
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
       axios.get('http://localhost:8000/api/get-category').then(response => {this.setState({
      items:response.data
  })
})
}
handleDelete(e){
  e.preventDefault();
  const id =e.target.id.value;
  axios.delete('http://localhost:8000/api/delete-category/'+id);

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
                        <CardTitle tag="h5"><Link to="/admin/addcategory"><Button className="btn-sm btn btn-primary buton" style={{fontSize:'16px',textTransform: 'capitalize'}}>Add Category</Button></Link>
                        <Switch>
                          <Route path="/admin/addcategory" component={AddCategory} />
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
                      <th>No.</th>
                      <th>Name</th>
                      <th className="text-center">Option</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                  this.state.items.map((item,i)=>(
                    <tr>
                      <td>{i+1}</td>
                      <td>{item.name}</td>
                      <td>
                        <Link to={`/admin/editcategory/${item.id}/edit-category`} key={item.id}><Button className="mr-1 btn-sm btn-success" style={{fontSize:'16px',textTransform: 'capitalize'}}>Edit</Button></Link>
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
export default Category;
