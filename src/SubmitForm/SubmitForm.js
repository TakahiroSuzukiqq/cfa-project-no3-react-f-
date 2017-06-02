import React, { Component } from 'react';
import axios from 'axios';

class SubmitForm extends Component {
	handleInputChange(e) {
	};

	focus() {
    this.nameInput.focus();
  };

  SubmitAnswer() {
  	const URL = 'https://cfa-project-no3-nodejs-.herokuapp.com/api/questionnaire?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRha2FoaXJvc3V6dWtpLm0wMTBAZ21haWwuY29tIiwiaWF0IjoxNDk2Mjg5MDA0fQ.XEPhzEmNlxuy8a3KH6DW4dFSJtuq1VQBgOSVlU74jJE';
  	axios.post(URL + '&name=' + this.nameInput.value)
  		.then((response) => {
  			console.log(response);
  			this.nameInput.value = '';
  			this.props.getQuestionnaireList();
  		})
  		.catch(function(error) {
  			console.log(error)
  		});
  };

	render() {
		return (
			<div>
				{/* <input type="text" ref={(input) => { this.questions = input; }} onChange={(e) => this.handleInputChange(e)} />*/}
				<button onClick={() => this.SubmitAnswer()}>提出する</button>
			</div>
		)
	};
}

export default SubmitForm;
