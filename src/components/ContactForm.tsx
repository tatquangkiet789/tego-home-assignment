import { Button, Input, TextArea } from './ui';

export function ContactForm() {
    return (
        <div className='flex flex-col gap-4 md:gap-6'>
            <div className='flex items-center justify-between flex-wrap gap-4 md:gap-0'>
                <Input placeholder='Your name' required />
                <Input placeholder='Email' required />
            </div>
            <div className='flex items-center justify-between flex-wrap gap-4 md:gap-0'>
                <Input placeholder='Reasons for Contacting' required type='select' />
                <Input placeholder='Phone' />
            </div>
            <div className='w-full'>
                <TextArea />
                <p className='text-base'>
                    <span className='text-red-500'>*</span> indicates a required field
                </p>
            </div>
            <div className='mx-auto w-60 bg-red-100'>
                <Button text='Submit' variant='primary' size='lg' onClick={() => {}} />
            </div>
        </div>
    );
}
