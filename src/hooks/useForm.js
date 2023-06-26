import { useState } from 'react'

export const useForm = (initialState) => {
    const [ form, setForm ] = useState(initialState)

    const onChangeInputs = (event) =>{
        const { name, value } = event.target
        setForm({...form, [name]: value})
        console.log(event.target)
    }

    const clearInputs = () =>{
      setForm(initialState)
    }
  return {form, onChangeInputs, clearInputs}
}
