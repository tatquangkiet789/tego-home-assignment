import { cn } from '~/lib/clsx';

type ButtonProps = {
    text: string;
    variant: 'primary' | 'secondary' | 'third' | 'outline' | 'default';
    size: 'md' | 'sm' | 'lg';
    iconLeft?: JSX.Element;
    iconRight?: JSX.Element;
    onClick: () => void;
};

export function Button({ text, variant, size, iconLeft, iconRight, onClick }: ButtonProps) {
    return (
        <button
            className={cn('flex items-center gap-3 rounded-sm justify-center duration-500', {
                'bg-secondary text-white hover:outline hover:outline-1 hover:outline-secondary hover:bg-white hover:text-secondary':
                    variant === 'secondary',
                'bg-primary text-white font-semibold text-base hover:outline hover:outline-1 hover:outline-primary hover:bg-white hover:text-primary':
                    variant === 'primary',
                'bg-black text-white font-semibold text-base hover:gap-6': variant === 'third',
                'bg-transparent text-white border border-white font-semibold text-base hover:text-black hover:bg-white':
                    variant === 'outline',
                'bg-white text-primary font-semibold text-base rounded-sm border hover:bg-transparent hover:border-white hover:text-white':
                    variant === 'default',
                'py-[6px] px-5': size === 'sm',
                'py-3 w-full': size === 'lg',
            })}
            onClick={onClick}
        >
            {iconLeft ? <span>{iconLeft}</span> : null}
            <p>{text}</p>
            {iconRight ? <span>{iconRight}</span> : null}
        </button>
    );
}
