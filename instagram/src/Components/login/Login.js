import React from 'react'





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
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={this.login}>
                    <p> username:</p>
                    <input id={1} type="text" value={this.state.username} onChange={this.handelChange} /> 
    
                    <p> password:</p>
                    <input id={2} type="text" value={this.state.password} onChange={this.handelChange} /> 
                    
                    <button>Login</button>
                </form>
            </div>
        );
    }
}

export default Login