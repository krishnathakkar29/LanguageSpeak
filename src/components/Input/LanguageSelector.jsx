import React from "react";
import { IconLanguage } from "@tabler/icons-react";

function LanguageSelector({
  selectedLanguage,
  setSelectedLanguage,
  languages,
}) {
  return (
    <span className=" flex py-2 px-3 cursor-pointer rounded-full space-x-2 pl-2 bg-black">
      <IconLanguage size={20} />

      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
        className="bg-black flex rounded-full py-1 text-white"
      >
        {languages.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </span>
  );
}

export default LanguageSelector;
