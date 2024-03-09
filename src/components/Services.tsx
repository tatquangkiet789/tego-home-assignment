import {
    construction,
    renovation,
    architecture,
    consultation,
    electric,
    repairServices,
} from '~/assets';
import { ServiceCard } from './ui';
import { motion } from 'framer-motion';

export function Services() {
    const services = [
        { name: 'Contruction', icon: construction },
        { name: 'Renovation', icon: renovation },
        { name: 'Consultation', icon: consultation },
        { name: 'Repair Services', icon: repairServices },
        { name: 'Architecture', icon: architecture },
        { name: 'Electric', icon: electric },
    ];

    const animation = {
        initial: {
            y: 100,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <div className='w-full bg-[#F6F8F7]' id='services'>
            <div className='container mx-auto flex items-center justify-center flex-col md:p-10'>
                <motion.h1
                    variants={animation}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true }}
                    className='text-3xl font-bold'
                    transition={{ duration: 1 }}
                >
                    Services
                </motion.h1>
                <div className='my-8 flex justify-center flex-wrap gap-x-16 gap-y-8'>
                    {services.map(({ name, icon }, index) => (
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
                            <ServiceCard name={name} icon={icon} isOdd={index % 2 !== 0} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
