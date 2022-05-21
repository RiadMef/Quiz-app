
import { Button, Typography } from '@mui/material';
import React from 'react';
import Replay from '../ReplayGame/ReplayGame';
import Timer from '../../components/Timer/Timer';
import './Game.css'
import {TIME} from '../../Assets/const';

class Game extends  React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
        nQuestions: this.props.nQuestions,
        questionLeft: this.props.nQuestions,
        question: '',
        answer: '',
        correct: 0,
        showAnswer: false,
        answered: '',
        all_answers: [],
        normalColor:'primary',
        correctColor:'green',
        incorrectColor:'red',
        disabled: false,
        load:false,
        timer : TIME,
    };
  


  }

    componentDidMount() {
        this.getQuestion();
        }

    getQuestion = () => {
        fetch('https://opentdb.com/api.php?amount=1&type=multiple&encode=url3986')
        .then(res => res.json())
        .then(res => {
            this.setState({
                question: res.results[0].question,
                answer: res.results[0].correct_answer,
                showAnswer: false,
                all_answers: this.randomize([...res.results[0].incorrect_answers, res.results[0].correct_answer])
               
            })
            
        })
       
       
    }

    checkAnswer = (e:any) => {
    
        this.setState({questionLeft : this.state.questionLeft - 1});
        if (e.target.value === this.state.answer) {
            this.setState({
                correct: this.state.correct + 1,
                showAnswer: true,
                timer :0,
            })
        } else {
            this.setState({
                showAnswer: true,
                timer :0,
            })
        }
        this.setState({
            answered: e.target.value,
        })

    }

    nextQuestion = () => {
        this.setState({
            showAnswer: false,
            timer: TIME
        })
        this.getQuestion();
        

    }

    randomize = (array:any) => {
       
        let i = array.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        
        return array;
    }
    getColor = (e:any) => {
        if(this.state.showAnswer){
            if (e === this.state.answer) {
                return this.state.correctColor;
            } else {
                return this.state.incorrectColor;
            }
        }
        return this.state.normalColor;
        

    }

    changeTimer = (e:any) => {
        if (this.state.timer === 0) {
            this.setState({
                showAnswer: true,
            })
        }
        else if(this.state.timer > 0 && !this.state.disabled){
            this.setState({
                timer: e
            })
        }

     
    }




    render() {

        return (
           
               
                <div className="Game">
                { this.state.questionLeft > 0 ?
                <div className="divQuestion">
                <div className="titre"> <Typography  variant="h1" > Quizz-App </Typography></div>
                <Timer changeTimer={this.changeTimer} timer = {this.state.timer}/>
                <div className="question">
                    <h1>{decodeURIComponent(this.state.question)}</h1>
                    {this.state.showAnswer ? <h2 style={{color: this.getColor(this.state.answered)}}>{decodeURIComponent(this.state.answer)}</h2> : null}
                </div>
               
                <div className="buttonGrid">
                   

                    {this.state.all_answers.map((e:any) => {
                        return (
                            <Button

                                key={e}
                                variant="contained"
                                color={this.state.normalColor}
                                onClick={this.checkAnswer}
                                value={e}
                                disabled={this.state.showAnswer}
                            >
                                {decodeURIComponent(e)}
                            </Button>
                        )
                    })}
                </div>
                <div className="next">
                    <Button disabled ={!this.state.showAnswer} onClick={this.nextQuestion}>Next</Button>
                </div>
                </div>
                : <Replay correct={this.state.correct} nQuestions={this.state.nQuestions}/>}
            </div>

           
            
        )
    }
}

export default Game;