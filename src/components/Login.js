import React from 'react'

export const Login = () => {
  return (
    <form className="login">
      <div> Login</div>
      <input
        type="name"
        name='name'
        placeholder='username'
        value='Name'
      />
      <input
        type="password"
        name='pwd'
        placeholder='password'
      />
      <input type="submit" value="Submit" />
    </form>

  )
}
