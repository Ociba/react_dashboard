import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Button,
  Table,
  Row,
  Col,
} from "reactstrap";
import Image from 'assets/img/ociba.jpg';
import {Switch, Link, Route} from 'react-router-dom';
import EditProperty from 'views/EditProperty';

function Property() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Property</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Owner</th>
                      <th>Size</th>
                      <th className="text-center">Bedroom</th>
                      <th>Bathroom</th>
                      <th>Garage</th>
                      <th>Location</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Image</th>
                      <th>Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-right">$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-right">$36,738</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-right">$36,738</td>
                      <td><img style={{height:'30px',width: '30px'}} src={Image} alt=""></img></td>
                      <td className="text-center">
                        <Link to="/admin/editproperty"><Button className="mr-1 btn-sm btn-success" style={{fontSize:'16px',textTransform: 'capitalize'}}>Edit</Button></Link>
                        <Switch>
                          <Route path="/admin/editproperty" component={EditProperty} />
                        </Switch>
                        <a href="/"><Button className="btn-sm btn-danger" style={{fontSize:'16px',textTransform: 'capitalize'}}>Delete</Button></a>
                      </td>
                    </tr>
                    <tr>
                    <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-right">$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-right">$36,738</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-right">$36,738</td>
                      <td><img style={{height:'30px',width: '30px'}} src={Image} alt=""></img></td>
                      <td className="text-center">
                        <Link to="/admin/editproperty"><Button className="mr-1 btn-sm btn-success" style={{fontSize:'16px',textTransform: 'capitalize'}}>Edit</Button></Link>
                        <Switch>
                          <Route path="/admin/editproperty" component={EditProperty} />
                        </Switch>
                        <a href="/"><Button className="btn-sm btn-danger" style={{fontSize:'16px',textTransform: 'capitalize'}}>Delete</Button></a>
                      </td>
                    </tr>
                    <tr>
                    <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-right">$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-right">$36,738</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-right">$36,738</td>
                      <td><img style={{height:'30px',width: '30px'}} src={Image} alt=""></img></td>
                      <td className="text-center">
                        <Link to="/admin/editproperty"><Button className="mr-1 btn-sm btn-success" style={{fontSize:'16px',textTransform: 'capitalize'}}>Edit</Button></Link>
                        <Switch>
                          <Route path="/admin/editproperty" component={EditProperty} />
                        </Switch>
                        <a href="/"><Button className="btn-sm btn-danger" style={{fontSize:'16px',textTransform: 'capitalize'}}>Delete</Button></a>
                      </td>
                    </tr>
                    <tr>
                    <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-right">$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-right">$36,738</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-right">$36,738</td>
                      <td><img style={{height:'30px',width: '30px'}} src={Image} alt=""></img></td>
                      <td className="text-center">
                        <Link to="/admin/editproperty"><Button className="mr-1 btn-sm btn-success" style={{fontSize:'16px',textTransform: 'capitalize'}}>Edit</Button></Link>
                        <Switch>
                          <Route path="/admin/editproperty" component={EditProperty} />
                        </Switch>
                        <a href="/"><Button className="btn-sm btn-danger" style={{fontSize:'16px',textTransform: 'capitalize'}}>Delete</Button></a>
                      </td>
                    </tr>
                    <tr>
                    <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-right">$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-right">$36,738</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-right">$36,738</td>
                      <td><img style={{height:'30px',width: '30px'}} src={Image} alt=""></img></td>
                      <td className="text-center">
                        <Link to="/admin/editproperty"><Button className="mr-1 btn-sm btn-success" style={{fontSize:'16px',textTransform: 'capitalize'}}>Edit</Button></Link>
                        <Switch>
                          <Route path="/admin/editproperty" component={EditProperty} />
                        </Switch>
                        <a href="/"><Button className="btn-sm btn-danger" style={{fontSize:'16px',textTransform: 'capitalize'}}>Delete</Button></a>
                      </td>
                    </tr>
                    <tr>
                    <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-right">$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-right">$36,738</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-right">$36,738</td>
                      <td><img style={{height:'30px',width: '30px'}} src={Image} alt=""></img></td>
                      <td className="text-center">
                        <Link to="/admin/editproperty"><Button className="mr-1 btn-sm btn-success" style={{fontSize:'16px',textTransform: 'capitalize'}}>Edit</Button></Link>
                        <Switch>
                          <Route path="/admin/editproperty" component={EditProperty} />
                        </Switch>
                        <a href="/"><Button className="btn-sm btn-danger" style={{fontSize:'16px',textTransform: 'capitalize'}}>Delete</Button></a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Property;
