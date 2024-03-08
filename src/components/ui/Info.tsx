type InfoProps = {
    title: string;
    content: string;
};

export function Info({ title, content }: InfoProps) {
    return (
        <div className='flex gap-4 items-center'>
            <p className='text-primary text-lg font-medium w-1/5'>{title.toUpperCase()}</p>
            <p className='flex-1 w-fit text-lg'>{content}</p>
        </div>
    );
}
