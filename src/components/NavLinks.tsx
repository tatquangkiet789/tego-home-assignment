import { useAppDispatch } from '~/hooks/useAppDispatch';
import { useAppSelector } from '~/hooks/useAppSelector';
import { cn } from '~/lib/clsx';
import { setActiveLink } from '~/store/reducers';

export function NavLinks() {
    const { active } = useAppSelector((state) => state.sections);
    const dispatch = useAppDispatch();
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about-us' },
        { name: 'Projects', href: '#projects' },
        { name: 'Services', href: '#services' },
        { name: 'Contact Us', href: '#contact' },
    ];

    function handleSetActiveLink(name: string) {
        dispatch(setActiveLink(name));
    }

    return (
        <div className='flex items-center justify-between gap-10'>
            {navLinks.map(({ name, href }) => (
                <a
                    key={href}
                    href={href}
                    className={cn('text-base font-medium hover:cursor-pointer', {
                        'text-secondary': active === name,
                    })}
                    onClick={() => handleSetActiveLink(name)}
                >
                    {name}
                </a>
            ))}
        </div>
    );
}
