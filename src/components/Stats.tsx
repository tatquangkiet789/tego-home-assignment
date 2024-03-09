import { award, clients, plans, projects } from '~/assets';
import { Button, StatCard } from './ui';

export function Stats() {
    const projectsCompleted = { name: 'Projects Completed', icon: projects, total: 123 };
    const happyClients = { name: 'Happy Clients', icon: clients, total: 84 };
    const awardsWin = { name: 'Awards Win', icon: award, total: 37 };
    const yearsInBusiness = { name: 'Years in Business', icon: plans, total: 30 };

    return (
        <div className='w-full'>
            <div className='container mx-auto sm:flex-col md:flex-row flex lg:items-center gap-4 justify-center p-12'>
                <div className='flex-1 lg:h-[450px] py-10 xl:px-14 flex flex-wrap xl:relative lg:relative'>
                    <div className='lg:absolute xl:top-20 xl:left-14 lg:top-0 lg:left-0'>
                        <StatCard
                            icon={projectsCompleted.icon}
                            name={projectsCompleted.name}
                            total={projectsCompleted.total}
                            iconLocation='top-left'
                        />
                    </div>
                    <div style={{ zIndex: 1 }} className='lg:absolute top-0 xl:right-56 lg:right-0'>
                        <StatCard
                            icon={happyClients.icon}
                            name={happyClients.name}
                            total={happyClients.total}
                            iconLocation='top-right'
                        />
                    </div>
                    <div
                        style={{ zIndex: 1 }}
                        className='lg:absolute xl:absolute xl:top-48 xl:right-72 lg:bottom-0'
                    >
                        <StatCard
                            icon={awardsWin.icon}
                            name={awardsWin.name}
                            total={awardsWin.total}
                            iconLocation='top-right'
                        />
                    </div>
                    <div className='lg:absolute xl:bottom-0 xl:left-20 lg:bottom-0 lg:right-0'>
                        <StatCard
                            icon={yearsInBusiness.icon}
                            name={yearsInBusiness.name}
                            total={yearsInBusiness.total}
                            iconLocation='bottom-right'
                        />
                    </div>
                </div>
                <div className='sm:w-full md:w-2/5 lg:w-1/3 flex flex-col gap-10'>
                    <h1 className='font-bold text-4xl lg:text-5xl text-primary'>
                        30 Years Experience
                    </h1>
                    <p className='text-lg text-[#525B7A]'>
                        Our company has been the leading provided construction services to clients
                        throughout the USA since 1988.
                    </p>
                    <div className='w-44'>
                        <Button text='Contact Us' onClick={() => {}} size='lg' variant='primary' />
                    </div>
                </div>
            </div>
        </div>
    );
}
