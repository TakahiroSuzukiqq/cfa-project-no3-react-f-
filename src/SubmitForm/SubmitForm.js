// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';
//
//
// class SubmitForm extends Component {
//   handleInputChange(event) {
//     //this function is not used, just for reference
//     // console.log(event.target.value)
//   };
//
//   focus() {
//      // Explicitly focus the text input using the raw DOM API
//     //this.nameInput.focus();
//      this.nameInput.focus();
//      //console.log(this.nameInput.focus() );
//     //console.log(this.nameInput.value);
//   };
//   newSubmit() {
//     const URL = 'https://cfa-project-no3-nodejs-.herokuapp.com/api/questionnaire?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRha2FoaXJvc3V6dWtpLm0wMTBAZ21haWwuY29tIiwiaWF0IjoxNDk2Mjg5MDA0fQ.XEPhzEmNlxuy8a3KH6DW4dFSJtuq1VQBgOSVlU74jJE';
//      axios.post(URL + '&name=' + this.nameInput.value)
//        .then((response) => {
//          console.log(response);
//          this.nameInput.value = ''; //reset value of input
//          this.props.getQuestionnaireList();
//       {/*}   this.props.getQnswerListforTest(); */}
//        })
//        .catch(function(error) {
//          console.log(error)
//        });
//   };
//
//
//  render() {
//    return (
  {/*     <div>
       <input
         type="text"
         ref={(input) => { this.nameInput = input; }}
         onChange={(event) => this.handleInputChange(event)} />
        <button onClick = {() => this.newSubmit() }>Create!!</button> */}
       {/*}<button onClick = {() => this.focus() }>Create!!</button>*/}
    {/*  </div> *}
    )
  };
}

// SubmitForm.propTypes = {
//   getQuestionnaireList: PropTypes.func.isRequired
// };
//
 // export default SubmitForm;

//##########################################################################
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';
//
//
// class SubmitForm extends Component {
//   handleInputChange(event) {
//     //this function is not used, just for reference
//     // console.log(event.target.value)
//   };
//
//   focus() {
//      // Explicitly focus the text input using the raw DOM API
//     //this.nameInput.focus();
//      this.nameInput.focus();
//      //console.log(this.nameInput.focus() );
//     //console.log(this.nameInput.value);
//   };
//
//   newSubmit() {
//     const URL = 'https://cfa-project-no3-nodejs-.herokuapp.com/api/questionnaire?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRha2FoaXJvc3V6dWtpLm0wMTBAZ21haWwuY29tIiwiaWF0IjoxNDk2Mjg5MDA0fQ.XEPhzEmNlxuy8a3KH6DW4dFSJtuq1VQBgOSVlU74jJE';
//      axios.post(URL + '&name=' + this.nameInput.value)
//        .then((response) => {
//          console.log(response);
//          this.nameInput.value = ''; //reset value of input
//          this.props.getQuestionnaireList();
//        })
//        .catch(function(error) {
//          console.log(error)
//        });
//   };
//
//   render() {
//     return (
//      <div>
//        <input
//         type="text"
//         ref={(input) => { this.nameInput = input; }}
//         onChange={(event) => this.handleInputChange(event)} />
//        <button onClick = {() => this.newSubmit() }>Create!!</button>
//       {/*}<button onClick = {() => this.focus() }>Create!!</button>*/}
//      </div>
//     )
//   };
// }
//
// SubmitForm.propTypes = {
//   getQuestionnaireList: PropTypes.func.isRequired
// };
//
// export default SubmitForm;
//
//##########################################################################


// import React, { Component } from 'react';
// import axios from 'axios';


// class SubmitForm extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		 this.state = {
// 			answers: props.answers
// 		};
// 	}
//
// addAnswer(event) {
// 	event.predefault();
// 	console.log(this.refs.defoanswer)
// 	console.log(this.refs.checkboxanswer1)
// 	console.log(this.refs.checkboxanswer2)
// 	console.log(this.refs.checkboxanswer3)
// 	console.log(this.refs.checkboxanswer4)
// 	console.log(this.refs.checkboxanswer5)
// 	console.log(this.refs.stringanswer)
// 	this.setState({
// 		answers: this.state.answers.push({})
// 	})
// }

// render(){
// 	return(
		// <div>
		//   <form onSubmit={this.addAnswers.bind(this)}>
    //     <input type="text" ref="defoanswer" />
		// 		<input type="text" ref="checkboxanswer1" />
    //     <input type="text" ref="checkboxanswer2" />
		// 		<input type="text" ref="checkboxanswer3" />
		// 		<input type="text" ref="checkboxanswer4" />
		// 		<input type="text" ref="checkboxanswer5" />
		// 		<input type="text" ref="stringanswer" />
    //     <button type="submit">提出</button>
		// 	</form>
		// </div>
// 	);
//  }
// }
//
//
// export default SubmitForm;

// import React, { Component } from 'react';
// import axios from 'axios';
//
// class SubmitForm extends Component {
// 	handleInputChange(e) {
// 	};
//
// 	// focus() {
//   //   this.nameInput.focus();
//   // };
//
//   newSubmit() {
//   	const URL = 'https://cfa-project-no3-nodejs-.herokuapp.com/api/questionnaire?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRha2FoaXJvc3V6dWtpLm0wMTBAZ21haWwuY29tIiwiaWF0IjoxNDk2Mjg5MDA0fQ.XEPhzEmNlxuy8a3KH6DW4dFSJtuq1VQBgOSVlU74jJE';
//   	// axios.post(URL + '&name=' + this.nameInput.value)
// 		  //  axios.post(URL + '&question=' + this.questions.value)
// 			 axios.post(URL + '&answer=' + this.answers.value)
//   		.then((response) => {
//   			console.log(response);
//   			// reset value of input field
//   			// this.nameInput.value = '';
//   			// this.props.getQuestionnaireList();
//   		})
//   		.catch(function(error) {
//   			console.log(error)
//   		});
//   };
//
// 	render() {
// 		return (
// 			<div>
//
// 				<button onClick={() => this.newSubmit()}>提出する！</button>
// 			</div>
// 		)
// 	};
// }
//
// export default SubmitForm;
