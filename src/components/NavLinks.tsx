import { useAppSelector } from '~/hooks/useAppSelector';
import { cn } from '~/lib/clsx';

export function NavLinks() {
    const { active } = useAppSelector((state) => state.sections);
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about-us' },
        { name: 'Projects', href: '/projects' },
        { name: 'Services', href: '/services' },
        { name: 'Contact Us', href: '/contact' },
    ];

    return (
        <div className='flex items-center justify-between gap-10'>
            {navLinks.map(({ name, href }) => (
                <p
                    key={href}
                    className={cn('text-base font-medium', {
                        'text-secondary': active === name,
                    })}
                >
                    {name}
                </p>
            ))}
        </div>
    );
}
