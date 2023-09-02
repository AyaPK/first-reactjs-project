import React from "react";

function FilterButton(props){
    const label = props.label;
    return(
        <button type="button" className="btn toggle-btn" aria-pressed="true">
        <span className="visually-hidden">Show</span>
        <span>{label}</span>
        <span className="visually-hidden"> tasks</span>
      </button>
    )
};

export default FilterButton;