import {
    About,
    Ads,
    Bottom,
    Contact,
    Hero,
    Projects,
    Reasons,
    Services,
    Stats,
} from '~/components';

export function HomePage() {
    return (
        <div className='w-full overflow-x-hidden'>
            <Hero />
            <Reasons />
            <About />
            <Services />
            <Stats />
            <Ads />
            <Projects />
            <Contact />
            <Bottom />
        </div>
    );
}
