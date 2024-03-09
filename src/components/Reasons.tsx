import { bestDesign, support } from '~/assets';
import { ReputationCard } from './ui';
import { motion } from 'framer-motion';

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

    const animation = {
        initial: {
            x: 100,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
        },
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='py-14'>
                <motion.h1
                    variants={animation}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true }}
                    className='text-3xl font-bold'
                >
                    Our Reputation
                </motion.h1>
            </div>
            <div className='flex flex-wrap justify-around items-center gap-4 container pb-20'>
                {reputations.map(({ icon, description, title }, index) => (
                    <motion.div
                        key={index}
                        variants={animation}
                        initial='initial'
                        whileInView='animate'
                        viewport={{ once: true }}
                        transition={{
                            type: 'keyframes',
                            duration: parseFloat(`${index / 7 + 0.5}`),
                        }}
                    >
                        <ReputationCard icon={icon} title={title} description={description} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
