import { ReputationCard } from './ui';
import { BiSupport } from 'react-icons/bi';

export function Reasons() {
    const reputations = [
        {
            icon: <BiSupport size={40} />,
            title: 'Best Services',
            description: 'Nullam senectus porttitor in eget. Eget rutrum leo interdum.',
        },
        {
            icon: <BiSupport size={40} />,
            title: 'Best Teams',
            description: 'Cursus semper tellus volutpat aliquet lacus.',
        },
        {
            icon: <BiSupport size={40} />,
            title: 'Best Designs',
            description: 'Ultricies at ipsum nunc, tristique nam lectus.',
        },
    ];

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='py-14'>
                <h1 className='text-3xl font-bold'>Our Reputation</h1>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-4 lg:gap-x-28 lg:gap-y-14 container pb-20'>
                {reputations.map(({ icon, description, title }) => (
                    <ReputationCard
                        key={title}
                        icon={icon}
                        title={title}
                        description={description}
                    />
                ))}
            </div>
        </div>
    );
}
