import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormElement from '../FormElement';
import styles from '../../styles/stepStyles.module.css';

const Education = ({
  educationCards,
  handleInputChange,
  addItem,
  deleteItem,
}) => {
  const newItem = {
    id: uuidv4(),
    degree: '',
    university: '',
    startDate: '',
    endDate: '',
  };
  return (
    <>
      <div className={styles.add_btn_container}>
        <button onClick={() => addItem('education', newItem)}>Add More</button>
      </div>
      {educationCards.map((educationCard) => (
        <div
          key={educationCard.id}
          className={`${styles.input_section} ${styles.card}`}>
          <FormElement
            formAttr={{
              type: 'text',
              name: 'degree',
              placeholder: 'e.g. B.S. in Computer Science',
              value: educationCard.degree,
              handleInputChange,
            }}
            otherData={{
              label: 'Degree',
              category: 'education',
              id: educationCard.id,
            }}
          />
          <FormElement
            formAttr={{
              type: 'text',
              name: 'university',
              placeholder: 'e.g. Penn State University',
              value: educationCard.university,
              handleInputChange,
            }}
            otherData={{
              label: 'University',
              category: 'education',
              id: educationCard.id,
            }}
          />
          <FormElement
            formAttr={{
              type: 'text',
              name: 'startDate',
              placeholder: 'e.g. September 2012',
              value: educationCard.startDate,
              handleInputChange,
            }}
            otherData={{
              label: 'Start Date',
              category: 'education',
              id: educationCard.id,
            }}
          />
          <FormElement
            formAttr={{
              type: 'text',
              name: 'endDate',
              placeholder: 'e.g. May 2016 or Present',
              value: educationCard.endDate,
              handleInputChange,
            }}
            otherData={{
              label: 'End Date',
              category: 'education',
              id: educationCard.id,
            }}
          />
          <button onClick={() => deleteItem('education', educationCard.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default Education;
