import { Footer, Navbar } from '~/components';
import { HomePage } from '~/pages';

export function MainLayout() {
    return (
        <div>
            <Navbar />
            <HomePage />
            <Footer />
        </div>
    );
}
