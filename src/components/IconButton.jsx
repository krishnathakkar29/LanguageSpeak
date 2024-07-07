import React from "react";

function IconButton({ Icon, onClick }) {
  return (
    <span
      className="cursor-pointer space-x-2 flex items-center"
      onClick={onClick}
    >
      <Icon size={22} />
    </span>
  );
}

export default IconButton;
