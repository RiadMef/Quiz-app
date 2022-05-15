
import React from 'react';

class Game extends  React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
      question: '',
      answer: '',
      correct: 0,
      incorrect: 0,
      showAnswer: false,
       

    
    };
  


  }

    componentDidMount() {
        this.getQuestion();
        }

    getQuestion = () => {
        fetch('https://opentdb.com/api.php?amount=1&type=multiple')
        .then(res => res.json())
        .then(res => {
            this.setState({
                question: res.results[0].question,
                answer: res.results[0].correct_answer,
                showAnswer: false
            })
        })
    }

    checkAnswer = (e:any) => {
        if (e.target.value === this.state.answer) {
            this.setState({
                correct: this.state.correct + 1,
                showAnswer: true
            })
        } else {
            this.setState({
                incorrect: this.state.incorrect + 1,
                showAnswer: true
            })
        }
    }

    nextQuestion = () => {
        this.setState({
            showAnswer: false
        })
        this.getQuestion();
    }

    render() {

        return (
            <div className="game">
                <h1>{this.state.question}</h1>
                <button onClick={this.checkAnswer}>True</button>
                <button onClick={this.checkAnswer}>False</button>
                {this.state.showAnswer ? <h2>{this.state.answer}</h2> : null}
                <button onClick={this.nextQuestion}>Next</button>
                <h2>Correct: {this.state.correct}</h2>
                <h2>Incorrect: {this.state.incorrect}</h2>
            </div>
        )
    }
}

export default Game;





