import { adsBg } from '~/assets';
import { Button } from './ui';
import { motion } from 'framer-motion';

export function Ads() {
    const animation = {
        initial: {
            y: -100,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
        },
    };

    const animation1 = {
        initial: {
            y: 100,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
        },
    };

    const animation2 = {
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
        <div
            className='w-full h-72 bg-no-repeat bg-center bg-cover'
            style={{ backgroundImage: `url(${adsBg})` }}
        >
            <div className='container mx-auto flex flex-col md:flex-row md:justify-between justify-center items-start md:items-center h-full gap-7'>
                <div className='flex flex-col gap-5'>
                    <motion.h2
                        variants={animation}
                        initial='initial'
                        whileInView='animate'
                        viewport={{ once: true }}
                        transition={{ duration: 1, type: 'spring' }}
                        className='font-bold text-3xl text-white'
                    >
                        Free consultation with exceptional quality
                    </motion.h2>
                    <motion.p
                        variants={animation1}
                        initial='initial'
                        whileInView='animate'
                        viewport={{ once: true }}
                        transition={{ duration: 1, type: 'spring' }}
                        className='text-white text-xl'
                    >
                        Just one call away: +84 1102 2703
                    </motion.p>
                </div>
                <motion.div
                    variants={animation2}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true }}
                    transition={{ duration: 1, type: 'spring' }}
                    className='w-56 mr-10'
                >
                    <Button
                        text='Get your consulation'
                        variant='outline'
                        size='lg'
                        onClick={() => {}}
                    />
                </motion.div>
            </div>
        </div>
    );
}
