import React from "react";

export default class SimpleComponent extends React.Component {
    state = {
        mood: "happy"
    }

    // did not pass when i had this as handleClick(){}, had to switch to arrow function
    handleClick = () => {
        this.setState({
            mood: "sad"
        })
    }

    render(){
        return(
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}