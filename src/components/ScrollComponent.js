import React, { useRef } from "react";

const TestComponent = (props) => {
  console.log(props);
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.scrollTop = 0;
  };

  return (
    <section className="window" id="scroll-to-top">
      <div ref={ref} className="content">
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error vel
          porro, placeat provident temporibus, saepe sit enim quibusdam sunt eum
          tenetur labore itaque commodi, quos nemo dolore id. Qui, libero!
          Distinctio, neque soluta provident libero omnis vitae, quam cumque
          modi possimus corporis, eveniet quos nihil voluptatem beatae numquam
          cupiditate praesentium.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error vel
          porro, placeat provident temporibus, saepe sit enim quibusdam sunt eum
          tenetur labore itaque commodi, quos nemo dolore id. Qui, libero!
          Distinctio, neque soluta provident libero omnis vitae, quam cumque
          modi possimus corporis, eveniet quos nihil voluptatem beatae numquam
          cupiditate praesentium.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error vel
          porro, placeat provident temporibus, saepe sit enim quibusdam sunt eum
          tenetur labore itaque commodi, quos nemo dolore id. Qui, libero!
          Distinctio, neque soluta provident libero omnis vitae, quam cumque
          modi possimus corporis, eveniet quos nihil voluptatem beatae numquam
          cupiditate praesentium.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error vel
          porro, placeat provident temporibus, saepe sit enim quibusdam sunt eum
          tenetur labore itaque commodi, quos nemo dolore id. Qui, libero!
          Distinctio, neque soluta provident libero omnis vitae, quam cumque
          modi possimus corporis, eveniet quos nihil voluptatem beatae numquam
          cupiditate praesentium.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error vel
          porro, placeat provident temporibus, saepe sit enim quibusdam sunt eum
          tenetur labore itaque commodi, quos nemo dolore id. Qui, libero!
          Distinctio, neque soluta provident libero omnis vitae, quam cumque
          modi possimus corporis, eveniet quos nihil voluptatem beatae numquam
          cupiditate praesentium.
        </p>
      </div>
      <button className="button" onClick={handleClick}>
        Scroll to top
      </button>
    </section>
  );
};

export default TestComponent;
