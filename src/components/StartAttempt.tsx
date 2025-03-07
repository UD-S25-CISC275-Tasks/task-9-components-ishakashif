import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [quizInProgress, setQuizInProgress] = useState<boolean>(false);

    const startQuiz = () => {
        if (attempts > 0) {
            setAttempts(attempts -1);
            setQuizInProgress(true);
        }
    };

    const stopQuiz = () => {
        setQuizInProgress(false);
    }

    const mulligan = () => {
        setAttempts(attempts + 1);
    }
    return (
        <div>
            <h3>Attempts Left: {attempts}</h3>
            <Button
                onClick={startQuiz}
                disabled={quizInProgress || attempts === 0} 
            >
                Start Quiz
            </Button> 
            <Button 
                onClick={stopQuiz}
                disabled={!quizInProgress}   
            > 
                Stop Quiz
            </Button>    
            <Button 
                onClick={mulligan}
                disabled={quizInProgress}
            >
                Mulligan
            </Button>    
         </div>   
    );     
}
