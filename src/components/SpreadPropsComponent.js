import React from "react";
import PropTypes from "prop-types";

SpreadPropsComponent.propTypes = {
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

function SpreadPropsComponent(props) {
    return (
        <div>
            <h2>{props.heading}</h2>
            <p>{props.description}</p>
        </div>
    );
};

export default SpreadPropsComponent;