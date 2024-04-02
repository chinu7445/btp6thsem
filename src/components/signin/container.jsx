import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import css from "./container.module.css";
import LoginHead from './loginHead';
import InpDiv from './inpDiv';

function LoginContainer(){
    let [tab,switchTab]=useState(true);
  function handleTab(){
    switchTab(!tab);
  }
    return<>
    <div className={`${css.loginContainer}`}>
    <LoginHead handleTab={handleTab} tab={tab}></LoginHead>
    <form className={`${css.loginForm}`} action="">
      {
        !tab?(<InpDiv tab={tab} name={"Email"} type={"email"}></InpDiv>):""
      }
      <InpDiv tab={tab} name={"Username"} type={"text"}></InpDiv>
      <InpDiv tab={tab} name={"Password"} type={"password"}></InpDiv>
      <div className={`${css.inpDiv} ${css.subButton}`}>
      <Button className={`${css.Button}`} type='submit' variant="success">{`${tab ? "Login" : "Signin"}`}</Button>{' '}
      </div>
    </form>
  </div>
    </>
}

export default LoginContainer;