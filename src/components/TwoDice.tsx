import React, { useState } from "react";
import { Button } from "react-bootstrap";

const rollDie = () => Math.floor(Math.random() * 6) + 1;

export const TwoDice = () => {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(6);
    const [gameStatus, setGameStatus] = useState<string>("");

    const checkGameStatus = (left: number, right: number) => {
        if (left === 1 && right === 1) {
            setGameStatus("Lose");
        } else if (left === right) {
            setGameStatus("Win");
        } else {
            setGameStatus("");
        }
    };
    const handleLeftRoll = () => {
        const newLeft = rollDie();
        setLeftDie(newLeft);
        checkGameStatus(newLeft, rightDie);
    };

    const handleRightRoll = () => {
        const newRight = rollDie();
        setRightDie(newRight);
        checkGameStatus(leftDie, newRight);
    };

    return (
        <div>
            <div data-testid="left-die">{leftDie}</div>
            <div data-testid="right-die">{rightDie}</div>
            <Button onClick={handleLeftRoll}>
                Roll Left
            </Button>
            <Button onClick={handleRightRoll}>
                Roll Right
            </Button>
            {gameStatus && <div>{gameStatus}</div>}
        </div>
    );
};