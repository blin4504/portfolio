import React from "react";

export default function Button({ href, label, newTab, children}) {

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex font-bold items-center mt-4 px-4 py-2 border-4 border-solid border-color_text shadow-custom_shadow shadow-color_text hover:bg-color_text hover:text-color_background"
    >
      {children}
      <span className="ml-2">{label}</span>
    </a>
  )
}