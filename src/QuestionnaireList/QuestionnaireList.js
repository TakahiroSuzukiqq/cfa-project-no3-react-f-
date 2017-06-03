import React, { Component } from 'react';
import { Checkbox, Radio, Col, Well, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class QuestionnaireList extends Component {
  render(){
    return(
      <div>
        <Col md={4} mdPull={6} className="list_of_questions">
      <Well>
        {this.props.questions.map((question, i) =>
          <div>
            {question.name}
              <br />
              {question.question_type === "checkbox" ? (
                <div>
                  <Radio name="radioGroup" inline> 1 </Radio>
                  <Radio name="radioGroup" inline> 2 </Radio>
                  <Radio name="radioGroup" inline> 3 </Radio>
                  <Radio name="radioGroup" inline> 4 </Radio>
                  <Radio name="radioGroup" inline> 5 </Radio>
                </div>
              ) : question.question_type === "string" ? (
                <div>
                  <FormGroup controlId="formControlsTextarea">
                    <FormControl componentClass="textarea" />
                  </FormGroup>
                </div>
              ) : (
                <div>
                  <input type="text" />
                </div>
               )
              }
              <br />
              <br />
          </div>
        )}
        </Well>
        </Col>
      </div>
    )
  }
}

export default QuestionnaireList;
