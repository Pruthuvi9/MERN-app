import React, { useCallback, useReducer } from 'react';

import Button from '../../shared/components/FormElements/Button'
import Input from '../../shared/components/FormElements/Input';
import "./NewPlace.css";

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }
        },
        isValid: formIsValid
      }
    default:
      return state;
  }
};

const NewPlace = () => {
  return <form className='place-form'>
    <Input 
    element="input" 
    type="text" 
    label="Title"
    validators={[]}
    errorText="Please enter a valid title."
     />
  </form>;
};

export default NewPlace;