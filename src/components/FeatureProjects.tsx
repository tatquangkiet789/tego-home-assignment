import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';

export function FeatureProjects() {
    return (
        <div className='bg-primary text-white w-[416px] h-[190px] flex flex-col items-center justify-between'>
            <div className='flex-1 w-full flex flex-col items-center justify-center gap-3'>
                <p className='text-xl font-bold'>Feature Projects</p>
                <p className='text-2xl text-center w-10/12'>
                    The National University of Architecture
                </p>
            </div>
            <div className='flex items-center justify-between bg-red-100 w-full'>
                <div className='flex items-center justify-center bg-black gap-2 py-[6px] flex-1 border-r border-r-white'>
                    <HiArrowNarrowLeft size={17} />
                    <p className='text-lg'>Back</p>
                </div>
                <div className='flex items-center justify-center bg-black gap-2 py-[6px] flex-1 border-l border-l-white'>
                    <p className='text-lg'>Next</p>
                    <HiArrowNarrowRight size={17} />
                </div>
            </div>
        </div>
    );
}
