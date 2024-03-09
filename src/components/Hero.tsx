import { heroBg } from '~/assets';
import { FeatureProjects } from './FeatureProjects';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <div
            className='w-full h-[calc(100vh-80px)] mt-20 relative bg-center bg-cover'
            style={{ backgroundImage: `url(${heroBg})` }}
            id='home'
        >
            <div className='container flex items-center mx-auto h-full'>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 5 }}
                    className='w-1/2 text-7xl font-semibold'
                >
                    Building things is our mission.
                </motion.p>
            </div>
            <div className='absolute bottom-0 right-0'>
                <FeatureProjects />
            </div>
        </div>
    );
}
