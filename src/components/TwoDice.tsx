import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(d6());
    const [rightDie, setRightDie] = useState<number>(d6());
    const [message, setMessage] = useState<string>("");

    const checkForWinLoss = (left: number, right: number) => {
        if (left === right) {
            if (left === 1) {
                setMessage("Lose");
            } else {
                setMessage("Win");
            }
        } else {
            setMessage("");
        }
    };

    const rollLeftDie = () => {
        const newLeft = d6();
        setLeftDie(newLeft);
        checkForWinLoss(newLeft, rightDie);
    };

    const rollRightDie = () => {
        const newRight = d6();
        setRightDie(newRight);
        checkForWinLoss(leftDie, newRight);
    };

    return (
        <div>
            <div>
                <span data-testid="left-die">{leftDie}</span>
                <Button onClick={rollLeftDie}>Roll Left</Button>
            </div>
            <div>
                <span data-testid="right-die">{rightDie}</span>
                <Button onClick={rollRightDie}>Roll Right</Button>
            </div>
            {message && <p>{message}</p>}
        </div>
    );
}
