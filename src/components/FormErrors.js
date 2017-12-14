import React from 'react';
export const FormErrors  = ({formErrors}) =>
    <div className='formErrors'>
        {Object.keys(formErrors).map((fieldName, i) => {
            if (formErrors[fieldName].length > 0) {
                return (
                    <ul key={i}><li>{i+1} : {fieldName} {formErrors[fieldName]}</li></ul>
                )
            } else {
                return '';
            }
        })}
    </div>

export default FormErrors;