import { logo } from '~/assets';

export function Logo() {
    return (
        <div className='flex items-center'>
            <div
                className='w-12 h-12 bg-no-repeat bg-center bg-contain'
                style={{ backgroundImage: `url(${logo})` }}
            ></div>
            <p className='text-2xl font-bold text-primary'>
                <i>The</i>Box
            </p>
        </div>
    );
}
