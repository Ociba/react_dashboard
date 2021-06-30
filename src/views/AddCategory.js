import axios from 'axios'
import React, {Component} from 'react';

import {Row, Col, Card, CardBody, CardTitle, CardHeader} from "reactstrap";

axios.defaults.baseURL='http://127.0.0.1:8000/api';

class AddCategory extends Component {
    constructor (props) {
        super(props)
        this.state = {
          name: '',
          errors: []
        }

        this.handleCreateNewItem =this.handleCreateNewItem.bind(this)
        this.hasErrorFor  =this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)

        this.input  = React.createRef(); 
      }

     

      handleCreateNewItem (event) {
        event.preventDefault();


        const { name } = event.target

        //const { history } = this.props

        const data  = {
          name: name.value,
        }
      
       axios.post('http://localhost:8000/api/create-category', data)
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
                <CardTitle tag="h5">Add Category</CardTitle>
              </CardHeader>
              <CardBody>
              <form onSubmit={this.handleCreateNewItem}>
                     
                     <div className='form-group'>
                       <label htmllFor='name'>  Category</label>
                       <input
                         id='name'
                         type='text'
                         className={`form-control ${this.hasErrorFor('name') ? 'is-invalid': ''}`}
                         name='name'
                         ref={this.input}
                       />
                       {this.renderErrorFor('name')}
                     </div>
                     <button className='btn btn-primary'>Submit</button>
                   </form>
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
export default AddCategory;