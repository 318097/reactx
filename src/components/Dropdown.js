import React, { useState, useEffect, useRef } from "react";
import colors, { Icon } from "@codedrops/react-ui";

const options = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 },
  { label: "Option 4", value: 4 },
  { label: "Option 5", value: 5 },
];

const Dropdown = () => {
  const [dropdownVisible, setDropdownVisibility] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, { capture: true });
    return () =>
      document.removeEventListener("click", handleOutsideClick, {
        capture: true,
      });
  }, []);

  const handleOutsideClick = (e) => {
    const ref = containerRef.current;
    const { target } = e;

    if (ref && !ref.contains(target)) setDropdownVisibility(false);
  };

  const handleChange = (value) => {
    setDropdownVisibility(false);
  };

  return (
    <section className="bar dropdown">
      <div className="container" ref={containerRef}>
        <div
          className="label"
          onClick={() => setDropdownVisibility((prev) => !prev)}
        >
          Toggle Dropdown&nbsp;
          <Icon
            fill={colors.white}
            size={10}
            type="arrow"
            direction={dropdownVisible ? "up" : "down"}
          />
        </div>
        {dropdownVisible && (
          <div className="dropdown">
            {options.map((option) => (
              <div className="item" onClick={() => handleChange(option.value)}>
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Dropdown;
