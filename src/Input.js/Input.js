import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ success, secretWord }) => {
  if(success) {
    return <div data-test="component-input" >

    </div>
  }
  const [currentGuess, setCurrentGuess] = React.useState("")
  return (
    <div data-test="component-input" >
      <from className="form-inline" >
        <input
          data-test="input-box"
          type="text"
          className="mb-2 mx-sm-3"
          placeholder="Enter guess"
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <button
          data-test="submit-button"
          onClick={(e) => {
            e.preventDefault();
            // TODO: Update guessWords
            // TOD: check against secret secretWord and update success 
            setCurrentGuess("");
          }}
          className="btn btn-primary mb-2"
        >Submit</button>
      </from>
    </div>
  )
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
}

export default Input
