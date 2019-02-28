import React from 'react'
import styled, { css } from 'styled-components';


const LoginDiv = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #4E49BE;
    padding: 60px;
    margin-top: 50px;
`;

const LoginHeader = styled.h1`
    margin: 0;
    font-size: 80px;
    color: rgb(255, 255, 255);
`;
const LoginPar = styled.p`
    font-size: 28px;
    color: rgb(255, 208, 252);
    margin-bottom: 10px;
`;
const LoginButton = styled.button`
    width: 100px;
    height: 30px;
    font-size: 20px;
    margin-top: 20px;
`;
const LoginInput = styled.input`
    width: 150px;
    height: 20px;
    margin-right: 20px;
`;

const Loginform = styled.form`
    display: flex;
    flex-direction: column;
`;





class Login extends React.Component{

    constructor(){
        super();

        this.state = {
            username: "",
            password: ""
        }
    }

    handelChange = e => {
        
        if(e.target.id == 1){
            this.setState({
                username: e.target.value
            })
            console.log(this.state.username);
        }else if(e.target.id == 2){
            this.setState({
                password: e.target.value
            })
            console.log(this.state.password);
        }
        
    }

    login = e => {
       
        console.log("updated")
        localStorage.setItem("username", this.state.username)
        localStorage.setItem("password", this.state.password)

        this.setState({
            username: "",
            password: ""
        })
    }


    render(){
        return (
            <LoginDiv>
                <LoginHeader>Login</LoginHeader>
                <Loginform onSubmit={this.login}>
                    <LoginPar> username:</LoginPar>
                    <LoginInput id={1} type="text" value={this.state.username} onChange={this.handelChange} /> 
    
                    <LoginPar> password:</LoginPar>
                    <LoginInput id={2} type="text" value={this.state.password} onChange={this.handelChange} /> 
                    
                    <LoginButton>Login</LoginButton>
                </Loginform>
            </LoginDiv>
        );
    }
}

export default Login