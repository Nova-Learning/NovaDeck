import { Container, Navbar, FormCheck } from 'react-bootstrap'
import useDarkMode from 'use-dark-mode';
import DarkModeToggle from "react-dark-mode-toggle";
import { useState } from 'react';

const Toggle = ({ checked, onChange }) => (
  <FormCheck 
    type="switch"
    id="darkmode"
    label="Dark Mode"
    checked={checked}
    onChange={onChange}
  />
);

const Footer = () => {
  const darkMode = useDarkMode(true, { classNameDark: "dark", classNameLight: "light" });
  const [isDarkMode, setIsDarkMode] = useState(() => darkMode.value);
  return (
    <>
      <Navbar expand="lg" variant="dark" bg="dark" sticky="bottom">
              <Container>
                  <div className="footer">
                      Made with <span className="heart">❤</span> in the USA
                      <br/>
                      Copyright 2020 © <a href="https://github.com/Nova-Learning">Nova Learning</a>
                      <div>
                        <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
                      </div>
                  </div>
              </Container>
      </Navbar>
    </>
  )
}

export default Footer
