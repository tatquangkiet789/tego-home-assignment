import { motion } from 'framer-motion';
import { ContactForm } from '.';

export function Contact() {
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
        <div className='w-full bg-[#F6F8F7]' id='contact'>
            <div className='container mx-auto flex flex-col items-center justify-center py-14 max-w-[605px] w-full'>
                <motion.h1
                    variants={animation}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true }}
                    transition={{ duration: 1, type: 'spring' }}
                    className='font-bold text-3xl'
                >
                    What can us do for you?
                </motion.h1>
                <motion.p
                    variants={animation}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, type: 'spring' }}
                    className='w-3/4 text-lg text-center leading-5 pt-5'
                >
                    We are ready to work on a project of any complexity, whether it’s commercial or
                    residential.
                </motion.p>
                <motion.div
                    variants={animation}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true }}
                    transition={{ duration: 2, type: 'spring' }}
                    className='pt-9 w-full'
                >
                    <ContactForm />
                </motion.div>
            </div>
        </div>
    );
}
