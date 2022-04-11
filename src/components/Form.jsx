import React from 'react';
import GenericImput from './GenericImput';

class Form extends React.Component {
  render() {
    return (
      <>
        <GenericImput inputType="text" testId="name-input" />
        <GenericImput inputType="textarea" testId="description-input" />
        <GenericImput inputType="number" testId="attr1-input" />
        <GenericImput inputType="number" testId="attr2-input" />
        <GenericImput inputType="number" testId="attr3-input" />
        <GenericImput inputType="text" testId="image-input" />
        <select data-testid="rare-input">
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <GenericImput inputType="checkbox" testId="trunfo-input" />
        <button type="button" data-testid="save-button">Salvar</button>
      </>);
  }
}

export default Form;
