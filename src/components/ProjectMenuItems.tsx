import { useAppDispatch } from '~/hooks/useAppDispatch';
import { useAppSelector } from '~/hooks/useAppSelector';
import { cn } from '~/lib/clsx';
import { setProjectMenuItemActive } from '~/store/reducers';

export function ProjectMenuItems() {
    const { projectActive } = useAppSelector((state) => state.sections);
    const dispatch = useAppDispatch();
    const projectMenuItems = [
        { name: 'All' },
        { name: 'Commercial' },
        { name: 'Residential' },
        { name: 'Other' },
    ];

    function handleSetProjectMenuItemActive(name: string) {
        dispatch(setProjectMenuItemActive(name));
    }

    return (
        <div className='flex flex-col gap-4'>
            {projectMenuItems.map(({ name }) => (
                <div
                    key={name}
                    className='flex gap-3 items-center hover:cursor-pointer'
                    onClick={() => handleSetProjectMenuItemActive(name)}
                >
                    <div
                        className={cn('w-1 h-7 bg-transparent', {
                            '!bg-primary': name === projectActive,
                        })}
                    ></div>
                    <h3
                        className={cn('text-xl font-medium text-[#C2C7D6]', {
                            '!text-primary': name === projectActive,
                        })}
                    >
                        {name}
                    </h3>
                </div>
            ))}
        </div>
    );
}
