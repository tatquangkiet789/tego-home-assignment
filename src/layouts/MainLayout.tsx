import { Footer, Navbar } from '~/components';
import { HomePage } from '~/pages';

export function MainLayout() {
    return (
        <div>
            <div className='fixed z-10 top-0 w-full bg-white'>
                <Navbar />
            </div>
            <div className=''>
                <HomePage />
            </div>
            <Footer />
        </div>
    );
}
