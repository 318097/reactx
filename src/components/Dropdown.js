import React, { useState, useEffect, useRef } from "react";

const Dropdown = () => {
  const [dropdownVisible, setDropdownVisibility] = useState(true);
  const containerRef = useRef();

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, { capture: true });
    return () =>
      document.removeEventListener("click", handleOutsideClick, {
        capture: true
      });
  }, []);

  const handleOutsideClick = (e) => {
    const ref = containerRef.current;
    const { target } = e;

    if (ref && !ref.contains(target)) setDropdownVisibility(false);
  };

  return (
    <section id="dropdown-component" className="fcc">
      <div className="container" ref={containerRef}>
        <div className="label" onClick={() => setDropdownVisibility(true)}>
          Toggle Dropdown
        </div>
        {dropdownVisible && (
          <div className="dropdown">
            <div className="item">Item 1</div>
            <div className="item">Item 2</div>
            <div className="item">Item 3</div>
            <div className="item">Item 4</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dropdown;
