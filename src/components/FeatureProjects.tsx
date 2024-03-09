import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Button } from './ui';

export function FeatureProjects() {
    return (
        <motion.div
            initial={{ x: '832px' }}
            animate={{
                x: 0,
            }}
            transition={{ duration: 1, type: 'spring' }}
            className='bg-primary text-white w-[416px] h-[190px] flex flex-col items-center justify-between'
        >
            <div className='flex-1 w-full flex flex-col items-center justify-center gap-3'>
                <p className='text-xl font-bold'>Feature Projects</p>
                <p className='text-2xl text-center w-10/12'>
                    The National University of Architecture
                </p>
            </div>
            <div className='flex items-center justify-between bg-red-100 w-full'>
                <div className='flex items-center justify-center bg-black gap-2 flex-1 border-r border-r-white'>
                    {/* <HiArrowNarrowLeft size={17} />
                    <p className='text-lg'>Back</p> */}
                    <Button
                        size='lg'
                        text='Back'
                        onClick={() => {}}
                        variant='third'
                        iconLeft={<HiArrowNarrowLeft size={17} />}
                    />
                </div>
                <div className='flex items-center justify-center bg-black gap-2 flex-1 border-l border-l-white'>
                    {/* <p className='text-lg'>Next</p>
                    <HiArrowNarrowRight size={17} /> */}
                    <Button
                        size='lg'
                        text='Next'
                        onClick={() => {}}
                        variant='third'
                        iconRight={<HiArrowNarrowRight size={17} />}
                    />
                </div>
            </div>
        </motion.div>
    );
}
