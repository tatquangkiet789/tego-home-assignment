import {
    construction,
    renovation,
    architecture,
    consultation,
    electric,
    repairServices,
} from '~/assets';
import { ServiceCard } from './ui';

export function Services() {
    const services = [
        { name: 'Contruction', icon: construction },
        { name: 'Renovation', icon: renovation },
        { name: 'Consultation', icon: consultation },
        { name: 'Repair Services', icon: repairServices },
        { name: 'Architecture', icon: architecture },
        { name: 'Electric', icon: electric },
    ];

    return (
        <div className='w-full bg-[#F6F8F7]'>
            <div className='container mx-auto flex items-center justify-center flex-col md:p-10'>
                <h1 className='text-3xl font-bold'>Services</h1>
                <div className='my-8 flex justify-center flex-wrap gap-x-16 gap-y-8'>
                    {services.map(({ name, icon }, index) => (
                        <ServiceCard key={index} name={name} icon={icon} isOdd={index % 2 !== 0} />
                    ))}
                </div>
            </div>
        </div>
    );
}
