import React from 'react';

const SelectComponent = ({
    id,
    name,
    options,
    label,
    actionName,
    context
}) => {
    const { data, dispatch } = React.useContext(context);

    const selectChangeHandler = (e) => {
        if(e.target.value === "default")
            return;
        dispatch({
            type: actionName,
            [name]: e.target.value
        })
    }
    return <div className="select-dropdown">
        <div className="dropdown-label"><label>{label}</label></div>
        <div>
            <select name={name} id={id} value={data[name]} onChange={selectChangeHandler}>
                <option value="default">{`Select a ${label}`}</option>
                {
                    options.map(option => <option value={option}>{option}</option>)
                }
            </select>
        </div>
    </div>
}

export default SelectComponent;