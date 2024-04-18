"use client"

import React from "react"
import Select from "react-select"

import { useState } from "react"

const options = [
    { value: '2 Sister Pizzeria', label: '2 Sister Pizzeria' },
    { value: 'Test Alpha', label: 'Test Alpha' },
    { value: 'Test Alpha2', label: 'Test Alpha2' },
    { value: 'Test Alpha3', label: 'Test Alpha3' },
    { value: 'Test Alpha4', label: 'Test Alpha4' },
    { value: 'Test Alpha5', label: 'Test Alpha5' },
    { value: 'Test Alpha6', label: 'Test Alpha6' },
    { value: 'Deliverit Portal', label: 'Deliverit Portal' }
]

const customStyles = {


    control: (defaultStyles) => ({
        ...defaultStyles,
        // Notice how these are all CSS properties
        padding: "8px",
        borderRadius: "32px",
    }),

    dropdownIndicator: (base, state) => ({
        ...base,
        transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
        transition: '250ms',
    }),
};

export default function StoreSelect() {

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="d-block store-select">
            <Select
                placeholder="Select A Store"
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                styles={customStyles}
                isClearable
            />
        </div>
    );
}