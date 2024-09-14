import React from "react";
import SpreadPropsComponent from "./SpreadPropsComponent";

const Parent = () => {

    const propsObject = {
        heading: "Spreading props in React",
        description: "Learn about prop spreading in React",
    }
    return (
        <>
            <SpreadPropsComponent {...propsObject} />
        </>
    );
};

export default Parent;