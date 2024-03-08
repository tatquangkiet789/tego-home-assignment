import { Button, Info, Input, Logo } from './ui';
import { FaFacebook } from 'react-icons/fa6';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';

export function Bottom() {
    const companyInfo = [
        { title: 'Address', content: '6391 Elgin St. Celina, Delaware 10299' },
        { title: 'Phone', content: '+84 1102 2703' },
        { title: 'Email', content: 'hello@thebox.com' },
    ];

    return (
        <div className='w-full'>
            <div className='container mx-auto flex flex-col gap-10 md:gap:0 md:flex-row items-center justify-between py-20'>
                <div className='flex flex-col gap-6 w-fit'>
                    {companyInfo.map(({ title, content }) => (
                        <Info key={title} title={title} content={content} />
                    ))}
                    <Logo />
                </div>
                <div className='flex flex-col w-fit'>
                    <p className='text-primary text-lg font-medium pt-[6px]'>
                        {`Newsletter:`.toUpperCase()}
                    </p>
                    <div className='flex items-center gap-2 pb-8 pt-4'>
                        <Input placeholder='Your email here' />
                        <Button text='Subscribe' variant='secondary' size='sm' />
                    </div>
                    <p className='text-primary text-lg font-medium'>{`Social:`.toUpperCase()}</p>
                    <div className='flex items-center gap-4 pt-4'>
                        <FaFacebook size={40} />
                        <span className='rounded-full w-10 h-10 bg-black flex items-center justify-center'>
                            <BiLogoLinkedin color='white' size={26} />
                        </span>
                        <AiFillTwitterCircle size={40} />
                    </div>
                </div>
            </div>
        </div>
    );
}
