import React from "react";
import cl from "./MyModal.module.css";

const MyModal = ({ children, visible, setVisible }) => {
  const rootClasess = [cl.myModal];

  if (visible) {
    rootClasess.push(cl.active);
  }

  return (
    <div className={rootClasess.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
      ;
    </div>
  );
};

export default MyModal;
