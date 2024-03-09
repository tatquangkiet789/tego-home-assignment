import { about } from '~/assets';
import { AboutUs } from './AboutUs';

export function About() {
    return (
        <div className='w-full'>
            <div className='container mx-auto pb-10'>
                <div className='sm:flex sm:justify-center md:py-12 relative'>
                    <div
                        className='hidden md:block max-w-5xl h-[640px] w-full bg-no-repeat bg-center bg-cover'
                        style={{ backgroundImage: `url(${about})` }}
                    ></div>
                    <div
                        className='sm:hidden md:block md:absolute right-0'
                        style={{
                            top: '50%',
                            transform: 'translate(0, -50%)',
                        }}
                    >
                        <AboutUs />
                    </div>
                    <div className='md:hidden'>
                        <AboutUs />
                    </div>
                </div>
            </div>
        </div>
    );
}
