import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Forms from '../../ui/Forms';
import { validate } from '../../ui/misc';

class Enrollment extends Component {
  state={
    formError:false,
    formMessage: '',
    formData:{
      email:{
        element:'input',
        value: '',
        config:{
          name:'email_input',
          type: 'email',
          placeholder: 'Enter your email'
        },
       validation:{
         required: true,
         email: true
       },
       valid: false,
       validationMessage:'' 
      }
    }
  }

  updateForm(element){
    const newFormData = {...this.state.formData};
    const newElement = {...newFormData[element.id]};

    newElement.value = element.event.target.value;
    let validStatus = validate(newElement);
    newElement.valid = validStatus[0];
    newElement.validationMessage = validStatus[1];

    newFormData[element.id] = newElement;
    console.log(newFormData);
    this.setState({
      formData : newFormData
    })
  }

  submitForm(event){
    event.preventDefault();
    let dataToSubmit = {};
    let formIsValid = true;

    for(let key in this.state.formData){
      dataToSubmit[key] = this.state.formData[key].value;
      formIsValid = this.state.formData[key].valid && formIsValid;
    }

    if(formIsValid){
      console.log(dataToSubmit)
    } else {
      this.setState({
        formError:false,
        formError:true
      })
    }

  }
  render() {
    return (
      <Fade>
        <div className='enroll_wrapper'>
          <form onSubmit={(event)=>this.submitForm(event)}>
              <div className="enroll_title">
                  Enter your email
              </div>
              <div className="enroll_input">
                <Forms
                id={'email'}
                formData={this.state.formData.email}
                change={(element)=>this.updateForm(element)}
                />
                {this.state.formError ? <div className="error_label">
                  Something is wrong. Try again
                </div> : null}
                <button type="submit">Enroll</button>
              </div>
          </form>
        </div>
          
      </Fade>
    );
  }
}

export default Enrollment;