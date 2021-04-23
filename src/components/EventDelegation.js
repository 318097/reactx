import React, { useEffect } from "react";

const EventDelegation = () => {
  useEffect(() => {
    const handleClick = (event) => {
      const { target } = event;

      if (target && target.matches("div.item")) {
        target.style.borderColor = "white";
      }
    };

    document.addEventListener("click", handleClick);
  }, []);

  return (
    <section className="event-delegation bar">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
    </section>
  );
};

export default EventDelegation;
