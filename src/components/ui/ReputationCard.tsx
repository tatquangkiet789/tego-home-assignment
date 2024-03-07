type ReputationCardProps = {
    title: string;
    icon: JSX.Element;
    description: string;
};

export function ReputationCard({ title, icon, description }: ReputationCardProps) {
    return (
        <div className='flex flex-col border border-[#E0E3EB] w-[292px] h-[197px] justify-around px-4'>
            <span className='[&_svg]:fill-secondary'>{icon}</span>
            <p className='font-bold text-xl'>{title}</p>
            <p className='text-[#858EAD] text-base'>{description}</p>
        </div>
    );
}
