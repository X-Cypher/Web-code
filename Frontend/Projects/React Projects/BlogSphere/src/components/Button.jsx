import React from 'react'

// we have made a generic button component
function Button({
    btnText,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props //other properties like onClick, label, etc are taken as input from user
}) {
  return ( //the props are spread and added as attributes of the button
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props} > 
        {btnText}
    </button>
  )
}

export default Button