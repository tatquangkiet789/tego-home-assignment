import { project1, project2, project3, project4 } from '~/assets';
import { ProjectMenuItems } from './ProjectMenuItems';
import { ProjectCard } from './ui';
import { Slider } from './Slider';

export function Projects() {
    const projects = [
        {
            name: 'Wildstone Infra Hotel',
            address: '2715 Ash Dr. San Jose, South Dakota',
            image: project1,
        },
        {
            name: 'Wish Stone Building',
            address: '2972 Westheimer Rd. Santa Ana, Illinois',
            image: project2,
        },
        {
            name: `Mr. Parkinston's House`,
            address: '3517 W. Gray St. Utica, Pennsylvania',
            image: project3,
        },
        { name: 'Oregano Height', address: '2464 Royal Ln. Mesa, New Jersey ', image: project4 },
    ];

    return (
        <div className='w-full' id='projects'>
            <div className='container mx-auto flex justify-between py-20 gap-8'>
                <div className='flex flex-col'>
                    <h1 className='font-bold text-3xl'>Projects</h1>
                    <div className='pt-10'>
                        <ProjectMenuItems />
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center md:items-end'>
                    <div className='flex flex-wrap gap-6 w-3/4 justify-center md:justify-end'>
                        {projects.map(({ name, address, image }) => (
                            <ProjectCard key={name} name={name} address={address} image={image} />
                        ))}
                    </div>
                    <div className='mt-8 w-full md:w-[59%]'>
                        <Slider />
                    </div>
                </div>
            </div>
        </div>
    );
}
