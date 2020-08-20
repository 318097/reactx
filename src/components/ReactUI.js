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
      <Card style={{ width: "400px" }} curved>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores
        modi facilis eveniet, perferendis beatae! Illo sit molestias
        necessitatibus molestiae voluptatem, blanditiis odit voluptates corrupti
        quidem, laborum ab. Magnam, vel.
      </Card>
    </section>
  );
};

export default ReactUI;
