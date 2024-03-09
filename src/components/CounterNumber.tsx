import { animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

type CounterNumberProps = {
    to: number;
};

export function CounterNumber({ to }: CounterNumberProps) {
    const nodeRef = useRef<HTMLHeadingElement | null>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const node = nodeRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                    }
                });
            },
            { threshold: 0.1 },
        );

        observer.observe(node);

        return () => {
            observer.unobserve(node);
        };
    }, []);

    useEffect(() => {
        if (!isInView) return;

        const node = nodeRef.current;
        if (!node) return;

        const controls = animate(0, to, {
            duration: 1,
            onUpdate(value) {
                node.textContent = value.toFixed(0);
            },
        });

        return () => controls.stop();
    }, [isInView, to]);

    return <h1 ref={nodeRef} className='font-semibold text-6xl'></h1>;
}
