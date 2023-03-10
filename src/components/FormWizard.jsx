import React, { Component } from 'react';
import StepSwitcher from './StepSwitcher';
import Stepper from './Stepper';
import styles from '../styles/FormWizard.module.css';

class FormWizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
    };
  }

  handleStepChange = (e) => {
    this.setState({
      step: parseInt(e.target.id),
    });
  };

  render() {
    const { user, handleInputChange, addItem, deleteItem } = this.props;
    return (
      <div className={styles.progressive_form_container}>
        <Stepper handleStepChange={this.handleStepChange} />
        <StepSwitcher
          step={this.state.step}
          user={user}
          handleInputChange={handleInputChange}
          addItem={addItem}
          deleteItem={deleteItem}
        />
      </div>
    );
  }
}

export default FormWizard;
