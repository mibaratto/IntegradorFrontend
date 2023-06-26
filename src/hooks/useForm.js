import React, { useState } from 'react'

export const useForm = (initialState) => {
    const [ form, setForm ] = useState(initialState)

    const onChangeInputs = (event) =>{
        console.log(event.target)
        const { name, value } = event.target
        setForm({...form, [name]: value})
    }

    const clearInputs = () =>{
      setForm(initialState)
    }
  return {form, onChangeInputs, clearInputs}
}
