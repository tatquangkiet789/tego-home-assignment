import { motion } from 'framer-motion';

type ReputationCardProps = {
    title: string;
    icon: string;
    description: string;
};

export function ReputationCard({ title, icon, description }: ReputationCardProps) {
    return (
        <motion.div className='flex flex-col border border-[#E0E3EB] w-[292px] h-[197px] justify-around px-4'>
            <div
                className='bg-no-repeat bg-cover bg-center w-10 h-10'
                style={{ backgroundImage: `url(${icon})` }}
            ></div>
            <p className='font-bold text-xl'>{title}</p>
            <p className='text-[#858EAD] text-base'>{description}</p>
        </motion.div>
    );
}
