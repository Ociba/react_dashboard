import React from "react";
// reactstrap components
import { Card, CardHeader, CardTitle, Button, CardBody, Row, Col, Table } from "reactstrap";

function Client(){
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
                  <Col md="3"></Col>
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
                      <th className="text-center">Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-center">
                        <a href="/"><Button className="mr-1 btn-sm btn-success" style={{fontSize:'16px',textTransform: 'capitalize'}}>Edit</Button></a>
                        <a href="/"><Button className="btn-sm btn-danger" style={{fontSize:'16px',textTransform: 'capitalize'}}>Delete</Button></a>
                      </td>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <td className="text-center">
                        <a href="/"><Button className="mr-1 btn-sm btn-success" style={{fontSize:'16px',textTransform: 'capitalize'}}>Edit</Button></a>
                        <a href="/"><Button className="btn-sm btn-danger" style={{fontSize:'16px',textTransform: 'capitalize'}}>Delete</Button></a>
                      </td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                      <td className="text-center">
                        <a href="/"><Button className="mr-1 btn-sm btn-success" style={{fontSize:'16px',textTransform: 'capitalize'}}>Edit</Button></a>
                        <a href="/"><Button className="btn-sm btn-danger" style={{fontSize:'16px',textTransform: 'capitalize'}}>Delete</Button></a>
                      </td>
                    </tr>
                    <tr>
                      <td>Philip Chaney</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                      <td className="text-center">
                        <a href="/"><Button className="mr-1 btn-sm btn-success" style={{fontSize:'16px',textTransform: 'capitalize'}}>Edit</Button></a>
                        <a href="/"><Button className="btn-sm btn-danger" style={{fontSize:'16px',textTransform: 'capitalize'}}>Delete</Button></a>
                      </td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                      <td className="text-center">
                        <a href="/"><Button className="mr-1 btn-sm btn-success" style={{fontSize:'16px',textTransform: 'capitalize'}}>Edit</Button></a>
                        <a href="/"><Button className="btn-sm btn-danger" style={{fontSize:'16px',textTransform: 'capitalize'}}>Delete</Button></a>
                      </td>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                      <td className="text-center">
                        <a href="/"><Button className="mr-1 btn-sm btn-success" style={{fontSize:'16px',textTransform: 'capitalize'}}>Edit</Button></a>
                        <a href="/"><Button className="btn-sm btn-danger" style={{fontSize:'16px',textTransform: 'capitalize'}}>Delete</Button></a>
                      </td>
                    </tr>
                    <tr>
                      <td>Jon Porter</td>
                      <td>Portugal</td>
                      <td>Gloucester</td>
                      <td className="text-center">
                        <a href="/"><Button className="mr-1 btn-sm btn-success" style={{fontSize:'16px',textTransform: 'capitalize'}}>Edit</Button></a>
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
export default Client;