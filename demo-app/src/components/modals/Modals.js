import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import "./modals.css";
const components = {
  DropdownIndicator: null,
  input: "file",
};

const createOption = (label) => ({
  label,
  value: label,
});

const Modals = () => {
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState([]);

  let handleChange = (value, actionMeta) => {
    console.group("Value Changed");
    console.log(value);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    setValue(value);
  };
  let handleInputChange = (inputValue) => {
    setInputValue(inputValue);
  };
  // let handleKeyDown = (event) => {
  //   if (!inputValue) return;
  //   switch (event.key) {
  //     case "Enter":
  //     case "Tab":
  //       console.group("Value Added");
  //       console.log(value);
  //       console.groupEnd();
  //       setValue([...value, createOption(inputValue)]);
  //       setInputValue("");
  //       event.preventDefault();
  //   }
  // };

  return (
    <div>
      <div className="inps d-flex w-75 aligin-items-center mt-4 justify-content-center ">
        <input
          size="60"
          type="file"
          onChange={(e) => {
            setValue([...value, createOption(e.target.value)]);
          }}
        />

        <CreatableSelect
          className="selactable w-100"
          // components={components}
          // inputValue={inputValue}
          isClearable
          isMulti
          menuIsOpen={false}
          onChange={handleChange}
          onInputChange={handleInputChange}
          // onKeyDown={handleKeyDown}
          // isDisabled
          placeholder=""
          value={value}
        />
      </div>
    </div>
  );
};

export default Modals;
