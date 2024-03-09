import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';
import { Button } from './ui';
import { useState } from 'react';

export function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const itemLength = 5;

    function handleGoToNextIndex() {
        setActiveIndex((prev) => (prev === itemLength - 1 ? 0 : prev + 1));
    }

    function handleGoToPreviousIndex() {
        setActiveIndex((prev) => (prev === 0 ? itemLength - 1 : prev - 1));
    }

    return (
        <div className='flex items-center justify-center mt-8 gap-4 w-full'>
            <div className='flex-1'>
                <Button
                    text='Back'
                    variant='third'
                    size='lg'
                    iconLeft={<HiArrowNarrowLeft size={20} />}
                    onClick={handleGoToPreviousIndex}
                />
            </div>
            <div className='flex items-center justify-center gap-3 px-4'>
                {Array(itemLength)
                    .fill(0)
                    .map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full hover:cursor-pointer duration-500 ${
                                activeIndex === index ? 'bg-primary' : 'bg-[#F6F8F7]'
                            }`}
                            onClick={() => setActiveIndex(index)}
                        ></div>
                    ))}
            </div>
            <div className='flex-1'>
                <Button
                    text='Next'
                    variant='third'
                    size='lg'
                    iconRight={<HiArrowNarrowRight size={20} />}
                    onClick={handleGoToNextIndex}
                />
            </div>
        </div>
    );
}
