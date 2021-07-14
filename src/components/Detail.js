import React from "react";
import { Redirect } from "react-router-dom";


class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        console.log(this.props)
        if (location.state === undefined){
            history.push("/"); //site 이동
        }
    }
    render() {
        const { location } = this.props;
        return <div>{location.state.title}</div>

    }
}
export default Detail;