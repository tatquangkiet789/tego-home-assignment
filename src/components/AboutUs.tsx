import { Button } from './ui';

export function AboutUs() {
    return (
        <div className='w-full md:w-96 bg-primary text-white px-10 py-12 gap-8 flex flex-col justify-start'>
            <h1 className='font-bold text-3xl'>About Us</h1>
            <p className='text-lg'>
                For more than 30 years we have been delivering world-class construction and we’ve
                built many lasting relationships along the way.
            </p>
            <p className='text-lg'>
                We’ve matured into an industry leader and trusted resource for those seeking
                quality, innovation and reliability when building in the U.S.
            </p>
            <div className='mt-6 w-48'>
                <Button text='More on Our History' onClick={() => {}} size='lg' variant='default' />
            </div>
        </div>
    );
}
