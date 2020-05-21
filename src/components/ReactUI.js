import React, { useState } from "react";
import { Card, Select } from "@codedrops/react-ui";

const ReactUI = () => {
  const [dropdown, setDropdown] = useState("a");
  return (
    <section className="container" id="react-ui">
      <Select
        options={[
          { label: "Option A", value: "a" },
          { label: "Option B", value: "b" },
        ]}
        value={dropdown}
        onChange={(value) => setDropdown(value)}
      />
    </section>
  );
};

export default ReactUI;
