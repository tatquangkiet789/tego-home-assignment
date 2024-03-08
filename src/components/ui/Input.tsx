import { FaCaretDown } from 'react-icons/fa';

type InputProps = {
    placeholder: string;
    required?: boolean;
    type?: 'text' | 'select';
};

export function Input({ placeholder, required = false, type = 'text' }: InputProps) {
    return (
        <div className='bg-white border border-[#E0E3EB] md:w-[280px] w-full rounded-sm flex items-center'>
            <input
                type='text'
                name=''
                id=''
                placeholder={`${placeholder} ${required ? '*' : ''}`}
                className='text-lg py-1 px-2 focus:outline-none w-full'
            />
            {type === 'select' ? (
                <div className='bg-primary p-[2px] rounded-full flex items-center justify-center mr-2'>
                    <FaCaretDown color='white' />
                </div>
            ) : null}
        </div>
    );
}
