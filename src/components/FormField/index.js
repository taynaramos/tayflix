import React from 'react'

function FormField({ value, onChange, type, name, label }){
    return(
        <div>
        <label>
          {label}
        <input
            type={type}
            name={name}
            value={value}
            // onChange={function handler(event){
            //   setValue('nome', event.target.value)
            // }}
            onChange={onChange} />
        </label>
      </div>

    )
}

export default FormField;