import React from "react";
import { Switch, Route, Link} from "react-router-dom";
// reactstrap components
import { Card, CardHeader, CardTitle, Button, CardBody, Row, Col, Table } from "reactstrap";
import AddProperty from "views/AddProperty.js";
import Image from 'assets/img/ociba.jpg';
import EditOwner from "views/EditOwner.js";


function Owner() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
              <Row>
                  <Col md="3">
                    <Card className="card-plain">
                      <CardHeader>
                        <CardTitle tag="h5">Notifications Style</CardTitle>
                      </CardHeader>
                      
                    </Card>
                  </Col>
                  <Col md="3"></Col>
                  <Col md="3"></Col>
                  <Col md="3">
                    <Card className="card-plain">
                      <CardHeader>
                        <CardTitle tag="h5"><Link to="/admin/addproperty"><Button className="btn-sm btn btn-primary buton" style={{fontSize:'16px',textTransform: 'capitalize'}}>Add Property</Button></Link>
                        <Switch>
                          <Route path="/admin/addproperty" component={AddProperty} />
                      </Switch>
                        </CardTitle>
                      </CardHeader>
                      
                    </Card>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Location</th>
                      <th>Photo</th>
                      <th className="text-center">Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td>Kawempe</td>
                      <td><img style={{height:'30px',width: '30px'}} src={Image} alt=""></img></td>
                      <td className="text-center">
                         <Link to="/admin/editowner"><Button className="mr-1 btn-sm btn-success" style={{fontSize:'16px',textTransform: 'capitalize'}}>Edit</Button></Link>
                        <Switch>
                          <Route path="/admin/editowner" component={EditOwner}/>
                        </Switch>
                        <a href="/"><Button className="btn-sm btn-danger" style={{fontSize:'16px',textTransform: 'capitalize'}}>Delete</Button></a>
                      </td>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <td>Kawempe</td>
                      <td><img style={{height:'30px',width: '30px'}} src={Image} alt=""></img></td>
                      <td className="text-center">
                         <Link to="/admin/editowner"><Button className="mr-1 btn-sm btn-success" style={{fontSize:'16px',textTransform: 'capitalize'}}>Edit</Button></Link>
                        <Switch>
                          <Route path="/admin/editowner" component={EditOwner}/>
                        </Switch>
                        <a href="/"><Button className="btn-sm btn-danger" style={{fontSize:'16px',textTransform: 'capitalize'}}>Delete</Button></a>
                      </td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                      <td>Kawempe</td>
                      <td><img style={{height:'30px',width: '30px'}} src={Image} alt=""></img></td>
                      <td className="text-center">
                         <Link to="/admin/editowner"><Button className="mr-1 btn-sm btn-success" style={{fontSize:'16px',textTransform: 'capitalize'}}>Edit</Button></Link>
                        <Switch>
                          <Route path="/admin/editowner" component={EditOwner}/>
                        </Switch>
                        <a href="/"><Button className="btn-sm btn-danger" style={{fontSize:'16px',textTransform: 'capitalize'}}>Delete</Button></a>
                      </td>
                    </tr>
                    <tr>
                      <td>Philip Chaney</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                      <td>Kawempe</td>
                      <td><img style={{height:'30px',width: '30px'}} src={Image} alt=""></img></td>
                      <td className="text-center">
                         <Link to="/admin/editowner"><Button className="mr-1 btn-sm btn-success" style={{fontSize:'16px',textTransform: 'capitalize'}}>Edit</Button></Link>
                        <Switch>
                          <Route path="/admin/editowner" component={EditOwner}/>
                        </Switch>
                        <a href="/"><Button className="btn-sm btn-danger" style={{fontSize:'16px',textTransform: 'capitalize'}}>Delete</Button></a>
                      </td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                      <td>Kawempe</td>
                      <td><img style={{height:'30px',width: '30px'}} src={Image} alt=""></img></td>
                      <td className="text-center">
                         <Link to="/admin/editowner"><Button className="mr-1 btn-sm btn-success" style={{fontSize:'16px',textTransform: 'capitalize'}}>Edit</Button></Link>
                        <Switch>
                          <Route path="/admin/editowner" component={EditOwner}/>
                        </Switch>
                        <a href="/"><Button className="btn-sm btn-danger" style={{fontSize:'16px',textTransform: 'capitalize'}}>Delete</Button></a>
                      </td>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                      <td>Kawempe</td>
                      <td><img style={{height:'30px',width: '30px'}} src={Image} alt=""></img></td>
                      <td className="text-center">
                         <Link to="/admin/editowner"><Button className="mr-1 btn-sm btn-success" style={{fontSize:'16px',textTransform: 'capitalize'}}>Edit</Button></Link>
                        <Switch>
                          <Route path="/admin/editowner" component={EditOwner}/>
                        </Switch>
                        <a href="/"><Button className="btn-sm btn-danger" style={{fontSize:'16px',textTransform: 'capitalize'}}>Delete</Button></a>
                      </td>
                    </tr>
                    <tr>
                      <td>Jon Porter</td>
                      <td>Portugal</td>
                      <td>Gloucester</td>
                      <td>Kawempe</td>
                      <td><img style={{height:'30px',width: '30px'}} src={Image} alt=""></img></td>
                      <td className="text-center">
                         <Link to="/admin/editowner"><Button className="mr-1 btn-sm btn-success" style={{fontSize:'16px',textTransform: 'capitalize'}}>Edit</Button></Link>
                        <Switch>
                          <Route path="/admin/editowner" component={EditOwner}/>
                        </Switch>
                        <a href="/"><Button className="btn-sm btn-danger" style={{fontSize:'16px',textTransform: 'capitalize'}}>Delete</Button></a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Owner;
