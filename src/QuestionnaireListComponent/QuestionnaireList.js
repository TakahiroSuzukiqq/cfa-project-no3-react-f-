// import React from 'react';
// import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
//
//
// class QuestionnaireList extends Component {
//
//   getValidationState() {
//    const length = this.state.value.length;
//    if (length > 10) return 'success';
//    else if (length > 5) return 'warning';
//    else if (length > 0) return 'error';
//   }
//
//   handleChange(e) {
//     this.setState({ value: e.target.value });
//   }
//
//   render() {
//     return (
//       // {props.questions.map((question, i) =>
//       //   <div key={i}>
//       //   {question.name}
//       //   <form>
//       //    <FormGroup
//       //      controlId="formBasicText"
//       //      validationState={this.getValidationState()}>
//       //      <FormControl
//       //        type="text"
//       //        value={this.state.value}
//       //        placeholder="Enter text"
//       //        onChange={this.handleChange} />
//       //      <FormControl.Feedback />
//       //    </FormGroup>
//       //  </form>
//       //   </div>)}
//
//           <div >
//               {this.props.questions.map((question,i) =>
//                 <div key={i}>
//                 {question.name}
//                 </div>)}
//           </div>
//         );
//       }
//
//    )
//  }
// };

import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class QuestionnaireList extends Component {
  render(){
    return(
      <div>
        {this.props.questions.map((question, i) =>
          <div>
          {question.name}
          <br/>
          <input type="text" />
          </div>
        )}
      </div>
    )
  }
}


export default QuestionnaireList;
