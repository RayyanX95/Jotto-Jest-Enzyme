import React from 'react'
import ProtoTypes from 'prop-types';

const Congrats = (props) => {
  if (props.success) {
    return <div data-test="component-congrats" className="alert alert-success">
      <span data-test="congrats-message" >
        Congratulations! You guessed  the word!
      </span>
    </div>
  } else return (
    <div data-test="component-congrats" >
      
    </div>
  )
}

Congrats.propTypes = {
  success: ProtoTypes.bool.isRequired,
  wrongAnsMsg: ProtoTypes.string
}

export default Congrats
