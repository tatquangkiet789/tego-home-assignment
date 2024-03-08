import { heroBg } from '~/assets';
import { FeatureProjects } from './FeatureProjects';

export function Hero() {
    return (
        <div
            className='w-full h-[calc(100vh-80px)] mt-20 relative bg-center bg-cover'
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className='container flex items-center mx-auto h-full'>
                <p className='w-1/2 text-7xl font-semibold'>Building things is our mission.</p>
            </div>
            <div className='absolute bottom-0 right-0'>
                <FeatureProjects />
            </div>
        </div>
    );
}
