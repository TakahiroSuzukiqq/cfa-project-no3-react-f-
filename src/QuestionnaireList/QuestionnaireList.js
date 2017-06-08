import React, { Component } from 'react';
import { Radio, Col, Well, FormGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';


class QuestionnaireList extends Component {
  constructor(props){
    super(props);
    this.state = {
      //questions: props.questions,
      answers: []
    };
   this.handleInputChange = this.handleInputChange.bind(this);
   this.handleSubmit =this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextprops", nextProps);
    let answers = [];
    nextProps.questions.map(q =>
      answers.push({
        qa_key: q.qa_key,             //answerにqa_keyとnameとuserAnswerというkey, valueを持たせる
        name: q.name,
        userAnswer: ""
      })
    );
    this.setState({answers: answers});    //answerは上の[]からくる
  }

  handleInputChange(name, e) {

    console.log("handlechange", name, "value", e.target.value)

    var result = this.state.answers.filter(function( obj ) {
      //return obj.qa_key == name;
      return obj.qa_key === name;
    });
    console.log("result: answer inputted/selected", result);
    result[0].userAnswer = e.target.value;
    console.log("new result is", result[0].userAnswer);
    console.log("newstate", this.state.answers);
    console.log("new name", this.state.answers[0].name);
  };


  focus() {
    //  this.nameInput.focus();
     console.log("this.state.answers", this.state.answers);
     //console.log(this.nameInput.value);
  };

  handleSubmit(e) {
   const URL = 'http://localhost:3001/api/answers?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRha2FoaXJvc3V6dWtpLm0wMTBAZ21haWwuY29tIiwiaWF0IjoxNDk2Mjg5MDA0fQ.XEPhzEmNlxuy8a3KH6DW4dFSJtuq1VQBgOSVlU74jJE';
    axios.post(URL, {
    //  questions: this.props.questions,
     answers: this.state.answers
   })
    .then((response) => {
     //console.log("submit form", response);
      console.log("submit form", response);
    })
    .catch(function(error) {
      console.log(error)
    })
  };

  render(){
    return(
      <div>
       {/*<form onSubmit={(e) => this.handleSubmit(e)}>*/}
       <form>
        <Col md={4} mdPull={6} className="list_of_questions">
         <Well>
          {this.props.questions.map((question, i) =>
            <div>
              {question.qa_key} {question.name}
               <br />
                {question.question_type === "defoinfo" ? (
                  <div>
                   <input type="text"
                   name={question.qa_key}
                   onChange={this.handleInputChange.bind(this, question.qa_key)}
                  //  defaultValue=this.state.answers[qa_key]
                   />
                  </div>

                  ) : question.question_type === "checkbox" ? (
                  <div>
                   <Radio
                    name={question.qa_key}
                    value="Option1"
                    onChange={this.handleInputChange.bind(this, question.qa_key)}
                    inline>
                     1
                   </Radio>

                   <Radio
                    name={question.qa_key}
                    value="Option2"
                    onChange={this.handleInputChange.bind(this, question.qa_key)}
                    inline>
                     2
                   </Radio>

                   <Radio
                    name={question.qa_key}
                    value="Option3"
                    onChange={this.handleInputChange.bind(this, question.qa_key)}
                    inline>
                     3
                   </Radio>

                   <Radio
                    name={question.qa_key}
                    value="Option4"
                    onChange={this.handleInputChange.bind(this, question.qa_key)}
                    inline>
                     4
                   </Radio>

                   <Radio
                    name={question.qa_key}
                    value="Option5"
                    onChange={this.handleInputChange.bind(this, question.qa_key)}
                    inline>
                     5
                   </Radio>
                  </div>

                  ) : question.question_type === "string" ? (
                  <div>
                   <FormGroup controlId="formControlsTextarea">
                    <FormControl componentClass="textarea"
                     name={question.qa_key}
                     onChange={this.handleInputChange.bind(this, question.qa_key)}
                    />
                   </FormGroup>
                  </div>

                  ) :  (
                  <div>
                   <Radio
                    name={question.qa_key}
                    value="OptionYes"
                    onChange={this.handleInputChange.bind(this, question.qa_key)}
                    inline>
                     Yes
                   </Radio>

                   <Radio
                    name={question.qa_key}
                    value="OptionNo"
                    onChange={this.handleInputChange.bind(this, question.qa_key)}
                    inline>
                      No
                   </Radio>
                  </div>
                 )
               }
            <br />
            <br />
            </div>
           )}
         <button onClick={this.handleSubmit}>Submit Answer-提出する-</button>
         </Well>
        </Col>
       </form>
      </div>
     )
   }
 }


export default QuestionnaireList;
