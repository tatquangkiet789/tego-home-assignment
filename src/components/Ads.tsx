import { adsBg } from '~/assets';
import { Button } from './ui';

export function Ads() {
    return (
        <div
            className='w-full h-72 bg-no-repeat bg-center bg-cover'
            style={{ backgroundImage: `url(${adsBg})` }}
        >
            <div className='container mx-auto flex flex-col md:flex-row md:justify-between justify-center items-start md:items-center h-full gap-7'>
                <div className='flex flex-col gap-5'>
                    <h2 className='font-bold text-3xl text-white'>
                        Free consultation with exceptional quality
                    </h2>
                    <p className='text-white text-xl'>Just one call away: +84 1102 2703</p>
                </div>
                <div className='w-56 mr-10'>
                    <Button text='Get your consulation' variant='outline' size='lg' />
                </div>
            </div>
        </div>
    );
}
