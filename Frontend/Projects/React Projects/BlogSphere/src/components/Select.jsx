import React from 'react'
import { useId } from 'react'

function Select({
    options = [],
    className = '',
    ref,
    ...props
}) {
    const id = useId()
  return (

    <div className='w-full'>

        <select 
            name=""
            id={id}
            {...props}
            ref={ref}
            className= {`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            {options?.map((curr, idx) => ( //if(options.length > 0) {options.map()} else {null}
                <option key={idx} value={curr}>
                    {curr}
                </option>
            ))}

        </select>

    </div>
  )
}

export default Select