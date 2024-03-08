type ProjectCardProps = {
    name: string;
    address: string;
    image: string;
};

export function ProjectCard({ name, address, image }: ProjectCardProps) {
    return (
        <div className='w-80 h-72 flex flex-col overflow-clip'>
            <div
                className='w-full flex-1 bg-none bg-center bg-cover hover:scale-150 duration-300 ease-in-out'
                style={{ backgroundImage: `url(${image})`, zIndex: 0 }}
            ></div>
            <div className='bg-primary text-white p-2 gap-3' style={{ zIndex: 1 }}>
                <h3 className='font-bold text-lg'>{name}</h3>
                <p className='text-base'>{address}</p>
            </div>
        </div>
    );
}
