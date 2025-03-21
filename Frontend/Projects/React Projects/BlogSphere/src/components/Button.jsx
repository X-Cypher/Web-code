import React from 'react'

// we have made a generic button component
function Button({
    btnText,
    bgColor = 'bg-blue-600',
    type = 'button',
    textColor = 'text-white',
    className = '',
    ...props //other properties like onClick, label, etc are taken as input from user
}) {
  return ( //the props are spread and added as attributes of the button
    <button
      className={`px-5 py-2 rounded-xl transition-all duration-200 ease-in-out 
                ${bgColor} ${textColor} shadow-md hover:bg-blue-700 hover:scale-102focus:ring-2 focus:ring-blue-300 focus:outline-none active:scale-95 ${className}`}
      {...props}
    >
      {btnText}
    </button>
  )
}

export default Button