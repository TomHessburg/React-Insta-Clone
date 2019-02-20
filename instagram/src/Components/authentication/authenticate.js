import React from 'react'


const authenticate = PassedInComponent => PassedInComponentTwo => {
    return class extends React.Component{
        constructor(){
            super();
            this.state = {

            }
        }

        render(){
            return(
                <div>
                    {localStorage.getItem("username") ? <PassedInComponent /> : <PassedInComponentTwo />}
                    {/* <PassedInComponentTwo />
                    <PassedInComponent /> */}
                </div>
            );
        }


    }
}

export default authenticate