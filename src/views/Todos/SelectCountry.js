import React from "react";
import Select from "react-select";
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
class SelectCountry extends React.Component{
    render(){
        return(
            <Select options={options}/>
        )
    }
}

export default SelectCountry;