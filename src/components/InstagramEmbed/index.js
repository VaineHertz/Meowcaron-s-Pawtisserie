import React from "react";

class InstagramEmbed extends React.Component{
    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.props.embedCode}} />
        );
    }
}
export default InstagramEmbed