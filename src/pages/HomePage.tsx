import { About, Ads, Bottom, Contact, Hero, Projects, Reasons } from '~/components';

export function HomePage() {
    return (
        <div className='w-full'>
            <Hero />
            <Reasons />
            <About />
            <Ads />
            <Projects />
            <Contact />
            <Bottom />
        </div>
    );
}
