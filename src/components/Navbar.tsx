import { logo } from '~/assets';
import { NavLinks } from './NavLinks';

export function Navbar() {
    return (
        <div className='w-full h-fit'>
            <div className='container mx-auto flex items-center justify-between h-20'>
                <div className='flex items-center'>
                    <div
                        className='w-12 h-12 bg-no-repeat bg-center bg-contain'
                        style={{ backgroundImage: `url(${logo})` }}
                    ></div>
                    <p className='text-2xl font-bold text-primary'>
                        <i>The</i>Box
                    </p>
                </div>
                <NavLinks />
            </div>
        </div>
    );
}
