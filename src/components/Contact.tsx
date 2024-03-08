import { ContactForm } from '.';

export function Contact() {
    return (
        <div className='w-full bg-[#F6F8F7]'>
            <div className='container mx-auto flex flex-col items-center justify-center py-14 max-w-[605px] w-full'>
                <h1 className='font-bold text-3xl'>What can us do for you?</h1>
                <p className='w-3/4 text-lg text-center leading-5 pt-5'>
                    We are ready to work on a project of any complexity, whether it’s commercial or
                    residential.
                </p>
                <div className='pt-9 w-full'>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
