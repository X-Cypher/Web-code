import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export default function RTE({name, control, label, defaultValue =""}) { //control is responsible to transfer the data(State) from the RTE to the react-hook-form.
  return (
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1'>
            {label}
        </label>}

        <Controller //controller is used to integrate the RTE with react-hook-form.
            name={name}
            control={control} //control will give control to the parent component to handle the data. Here the parent component will be our postform, editform, etc.
            render={({field: {onChange}}) => (
                 <Editor 
                    initialValue={defaultValue}
                    init={{
                        initialValue: defaultValue,
                        height: 500,
                        menubar: true,
                        plugins: [
                            "image",
                            "advlist",
                            "autolink",
                            "lists",
                            "link",
                            "image",
                            "charmap",
                            "preview",
                            "anchor",
                            "searchreplace",
                            "visualblocks",
                            "code",
                            "fullscreen",
                            "insertdatetime",
                            "media",
                            "table",
                            "code",
                            "help",
                            "wordcount",
                            "anchor",
                        ],
                        toolbar:
                        "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                    }}
                    onEditorChange={onChange}
                 />
            )}       
        />
    </div>
  )
}
