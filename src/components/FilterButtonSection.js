import React from "react";
import FilterButton from "./FilterButton";

function FilterButtonSection(props){
    return(
        <div className="filters btn-group stack-exception">

        <FilterButton label="all" />
        <FilterButton label="complete" />
        <FilterButton label="incomplete" />
      </div>
    )
};

export default FilterButtonSection