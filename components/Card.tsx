import React from "react";
import styles from "./Card.module.scss";
import { useState, useEffect } from "react";
import Dice from "../svg/icon-dice.svg";
const Card: React.FunctionComponent = () => {
    const [newQuote, setNewQuote] = useState(false);
    const [quotes, setQuotes] = useState({
        id: "",
        advice: ""
    });

    useEffect(() => {
        fetch("	https://api.adviceslip.com/advice")
            .then(res => res.json())
            .then(data =>
                setQuotes({
                    id: data.slip.id,
                    advice: data.slip.advice
                })
            );
    }, [newQuote]);

    function getRandomQuote() {
        setNewQuote(prevValue => !prevValue);
    }

    return (
        <main className={styles.main}>
            <h1>ADVICE #{quotes.id}</h1>
            <p className={styles.quote}>{quotes.advice}</p>

            <picture>
                <source
                    srcSet="/images/pattern-divider-desktop.svg"
                    media="(min-width:600px)"
                />
                <img src="/images/pattern-divider-mobile.svg" alt="" />
            </picture>

            <button
                className={styles.button}
                type="button"
                title="dice"
                onClick={getRandomQuote}
            >
                <Dice />
            </button>
        </main>
    );
};

export default Card;
