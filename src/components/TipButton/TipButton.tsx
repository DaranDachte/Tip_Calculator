import React from "react";
import "./TipButton.style.css";

type TipButtonType = {
  value: number;
  onClick: (value: number) => void;
  active: boolean;
};

const TipButtonComponent: React.FunctionComponent<TipButtonType> = ({
  value,
  onClick,
  active,
}) => {
  const classNames = ["tipButton"];
  if (active) {
    classNames.push("tipButton_active");
  }
  return (
    <button className={classNames.join(" ")} onClick={() => onClick(value)}>
      {value} %
    </button>
  );
};

export const TipButton = React.memo(TipButtonComponent);
