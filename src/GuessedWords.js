import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = props => {
  let content = null;

  if (props.guessedWords.length === 0) {
    content = <span data-test="guess-instructions">Try to guess the secret word!</span>;
  } else {
    const guessedWordsRows = props.guessedWords.map((guessedWord, index) => (
      <tr key={index} data-test="guessed-word">
        <th>{guessedWord.guessedWord}</th>
        <th>{guessedWord.letterMatchCount}</th>
      </tr>
    ));

    content = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{guessedWordsRows}</tbody>
        </table>
      </div>
    );
  }

  return <div data-test="component-guessed-words">{content}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
