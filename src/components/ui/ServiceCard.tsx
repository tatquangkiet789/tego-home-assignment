type ServiceCardProps = {
    isOdd: boolean;
    icon: string;
    name: string;
};

export function ServiceCard({ isOdd, icon, name }: ServiceCardProps) {
    return (
        <div
            className={`w-64 h-44 flex flex-col items-center justify-center gap-4 hover:cursor-default ${
                isOdd ? 'bg-primary text-white' : 'bg-white text-primary'
            }`}
        >
            <div
                className='bg-no-repeat bg-cover bg-center w-10 h-10'
                style={{ backgroundImage: `url(${icon})` }}
            ></div>
            <div className='w-14 h-[2px] bg-[#E0E3EB]'></div>
            <p className='font-semibold text-lg'>{name}</p>
        </div>
    );
}
