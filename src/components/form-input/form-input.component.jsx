import React from 'react'

import './form-input.styles 2.scss';

const formInput = ({handleChange, label, ...otherProps}) => {
    return <div className='group'>
<input className='form-input' onChange={handleChange} />
{
    label ? <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label> : null
}
    </div>
}

export default formInput;