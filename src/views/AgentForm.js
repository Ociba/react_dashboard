import React, {Component} from 'react'
import axios from 'axios'
import {
    Button,
    Card,
    CardHeader,
    CardBody,
   // CardFooter,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
  } from "reactstrap";

class AgentForm extends Component{
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone_number: '',
      current_location: '',
      
      
      errors: []
    }

    this.handleCreateNewItem =this.handleCreateNewItem.bind(this)
    this.hasErrorFor  =this.hasErrorFor.bind(this)
    this.renderErrorFor = this.renderErrorFor.bind(this)

    this.input  = React.createRef(); 
  }

 

  handleCreateNewItem (event) {
    event.preventDefault();


    const { name,email,phone_number,current_location} = event.target

    //const { history } = this.props

    const data  = {
      name: name.value,
      email: email.value,
      phone_number: phone_number.value,
      current_location: current_location.value,
      
    }
  
    axios.post('http://localhost:8000/api/create-broker', data)
   //console.log(data)
     // .then(response => {
        // redirect to the homepage
       // history.push('/')
     // })
    //   .catch(error => {
    //     this.setState({
    //       errors: error.response.data.errors
    //     })
    //   })
  }

  hasErrorFor (field) {
    return !!this.state.errors[field]
  }

  renderErrorFor (field) {
    if (this.hasErrorFor(field)) {
      return (
        <span className='invalid-feedback'>
          <strong>{this.state[field][0]}</strong>
        </span>
      )
    }
  }

  render () {
    return (
        <>
        <div className="content">
            <Row>
              <Col md="2"></Col>
            <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Add Agent</CardTitle>
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleCreateNewItem}>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label htmllFor='name'>Agent Names</label>
                        <Input
                          id='name'
                          type='text'
                          className={`form-control ${this.hasErrorFor('name') ? 'is-invalid': ''}`}
                          name='name'
                          ref={this.input}
                        />
                         {this.renderErrorFor('name')}
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label htmllFor='email'>Email</label>
                        <Input
                         id='email'
                         type='text'
                         className={`form-control ${this.hasErrorFor('email') ? 'is-invalid': ''}`}
                         name='email'
                         ref={this.input}
                       />
                        {this.renderErrorFor('email')}
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                      <label htmllFor='phone_number'>Phone Number</label>
                        <Input
                         id='phone_number'
                         type='text'
                         className={`form-control ${this.hasErrorFor('name') ? 'is-invalid': ''}`}
                         name='phone_number'
                         ref={this.input}
                       />
                        {this.renderErrorFor('phone_number')}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="12">
                      <FormGroup>
                      <label htmllFor='current_location'>Location</label>
                        <Input
                         id='current_location'
                         type='text'
                         className={`form-control ${this.hasErrorFor('name') ? 'is-invalid': ''}`}
                         name='current_location'
                         ref={this.input}
                       />
                        {this.renderErrorFor('current_location')}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                        Save
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md="2"></Col>
            </Row>
        </div>
        </>
    );
}
}
export default AgentForm;