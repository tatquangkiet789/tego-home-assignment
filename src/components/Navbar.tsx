import { NavLinks } from './NavLinks';
import { Logo } from './ui';

export function Navbar() {
    return (
        <div className='w-full h-fit'>
            <div className='container mx-auto flex items-center justify-between h-20'>
                <Logo />
                <NavLinks />
            </div>
        </div>
    );
}
