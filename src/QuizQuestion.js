import React, {Component} from 'react';

class QuizQuestion extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <p>{this.props.quiz_question.instruction_text}</p>
            </div>
        );
    }
}export default QuizQuestion;