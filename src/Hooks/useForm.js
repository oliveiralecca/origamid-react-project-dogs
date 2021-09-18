import React from 'react'

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido.'
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message: 'Precisa ter 1 caracter maiúsculo, 1 minúsculo e 1 dígito. E no mínimo 8 caracteres.'
  },
  number: {
    regex: /^\d+$/, // lembrando: ^ = começa com, \d = dígitos, + = pode ser mais de um, $ = termina com
    message: 'Utilize apenas números.'
  }
}

const useForm = (type) => {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(null)

  function validate(value) {
    if(type === false) return true // se o tipo não for definido, ou seja, se na chamada do hook for passado useForm(false), esse campo não será validado
    if(value.length === 0) {
      setError('Preencha um valor.')
      return false
    } // o campo foi clicado mas nada foi digitado
    else if(types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    } // se o tipo existe e não passar no teste de validação do regex, retorna a messagem de erro personalizada (no objeto types lá em cima)
    else {
      setError(null)
      return true
    } // não tem nenhum erro
  }

  function onChange({ target }) {
    {error && validate(target.value)} // para validar automaticamente os dados enquanto o usuário digita no campo - caso já tenha ocorrido um erro inicial (sem que seja necessário clicar fora dele)
    setValue(target.value)
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}

export default useForm

