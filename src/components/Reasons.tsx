import { bestDesign, support } from '~/assets';
import { ReputationCard } from './ui';

export function Reasons() {
    const reputations = [
        {
            icon: support,
            title: 'Best Services',
            description: 'Nullam senectus porttitor in eget. Eget rutrum leo interdum.',
        },
        {
            icon: support,
            title: 'Best Teams',
            description: 'Cursus semper tellus volutpat aliquet lacus.',
        },
        {
            icon: bestDesign,
            title: 'Best Designs',
            description: 'Ultricies at ipsum nunc, tristique nam lectus.',
        },
    ];

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='py-14'>
                <h1 className='text-3xl font-bold'>Our Reputation</h1>
            </div>
            <div className='flex flex-wrap justify-around items-center gap-4 container pb-20'>
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
