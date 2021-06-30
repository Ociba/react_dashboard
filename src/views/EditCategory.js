import axios from 'axios'

import React, { Component }from 'react'
import {Card, CardTitle, CardHeader, CardBody,Button, Form, FormGroup, Col, Row, Input} from 'reactstrap'


    class EditCategory extends Component {
      constructor (props) {
        super(props)
        this.state = {
          id:'',
          name: '',
          errors: []
        }

        this.handleUpdateItem = this.handleUpdateItem.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)

        this.input = React.createRef();

      }
   componentDidMount(){
      const id = this.props.match.params.id;
      axios.get(`http://localhost:8000/api/${id}/edit-category`)
     .then(response => {
        this.setState({ name: response.data.name });
    })
    .catch(function(error) {
        console.log(error);
    })

  }




      handleUpdateItem (event)
 {
        event.preventDefault();

     const id=this.props.match.params.id;
         const {name } = event.target

        const { history } = this.props

        const data = {
          name: name.value,
        }

        axios.put('http://localhost:8000/api/update-category'+id, data)
          .then(response => {
            history.push('/')
          })
          .catch(error =>
{
            this.setState({
              errors: error.response.data.errors
            })
          })
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

            <div className="content">
            <Row>
                  <Col md="2"></Col>
                <Col md="8">
                <Card className="card-user">
                  <CardHeader>
                    <CardTitle tag="h5">Edit Category</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Form onSubmit={this.handleUpdateItem}>
                      <Row>
                        <Col className="pr-1" md="12">
                          <FormGroup>
                            <label htmlFor='name'>Category</label>
                            <Input
                              id ='name'
                              className={`form-control ${this.hasErrorFor('name') ? `is-invalid` : ``}`}
                              Value={this.state.name}
                              ref ={this.input}
                              type='text'
                              name='name'
                            />
                            {this.renderErrorFor('name')}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <div className="update ml-auto mr-auto">
                          <Button
                            className="btn-round"
                            color="primary"
                            type="submit"
                          >
                            Save Changes
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
        )
      }
    }

    export default EditCategory