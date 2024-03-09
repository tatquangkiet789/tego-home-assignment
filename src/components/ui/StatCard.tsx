import { cn } from '~/lib/clsx';
import { CounterNumber } from '../CounterNumber';

type StatCardProps = {
    name: string;
    total: number;
    icon: string;
    iconLocation: 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right';
};

export function StatCard({ name, icon, total, iconLocation }: StatCardProps) {
    return (
        <div className='w-fit relative p-8'>
            <div
                className={cn('bg-no-repeat bg-center bg-contain w-16 h-16 absolute', {
                    'top-0 left-0': iconLocation === 'top-left',
                    'top-0 right-0': iconLocation === 'top-right',
                    'bottom-0 right-0': iconLocation === 'bottom-right',
                    'bottom-0 left-0': iconLocation === 'bottom-left',
                })}
                style={{ backgroundImage: `url(${icon})`, zIndex: 1 }}
            ></div>
            <div className='bg-white shadow-lg rounded-md flex flex-col p-4'>
                {/* <h1 className='font-semibold text-6xl'>{total}</h1> */}
                <CounterNumber to={total} />
                <div className='flex pl-[11px] pr-10 gap-2 items-center'>
                    <div className='bg-secondary w-[6px] h-6'></div>
                    <p className='text-[#667299] text-xl'>{name}</p>
                </div>
            </div>
        </div>
    );
}
