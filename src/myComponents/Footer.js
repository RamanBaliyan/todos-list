import React from 'react'

const Footer = () => {
  let FooterStyle = {
    position: "relative",
    top: "5vh",
    width: "100%"
  }
  return (
    <footer className ="bg-dark text-light" style={FooterStyle}>
      <p className = "text-center">
      Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}

export default Footer
