import React, { HTMLAttributes } from 'react'

interface Props {
    label: string;
    text: string | number;

}

export default function SectionInfo({ label, text }: Props) {
    return <div className='flex flex-col md:flex-row md:items-center space-x-2'>
        <span className='font-semibold text-gray-600'>{label}- </span>
        <span className='text-slate-900 text-lg  font-semibold'>{text}</span>
    </div>
}
