'use client';
import React, { useState, MouseEvent, useCallback } from 'react';

function throttle(func, delay) {
    let lastCall = 0;
    return (...args) => {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

const HoverCard = ({ img }) => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const onMouseMove = useCallback(
        throttle((e) => {
            const card = e.currentTarget;
            const box = card.getBoundingClientRect();
            const x = e.clientX - box.left;
            const y = e.clientY - box.top;
            const centerX = box.width / 2;
            const centerY = box.height / 2;
            const rotateX = (y - centerY) / 4;
            const rotateY = (centerX - x) / 4;

            setRotate({ x: rotateX, y: rotateY });
        }, 100),
        []
    );

    const onMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
    };

    return (
        <>
            <div
                className='card relative h-60 w-60 transition-all duration-400 ease-in-out transform will-change-transform'
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
            >
                <div className='group relative flex h-full w-full select-none items-center justify-center rounded-lg border  font-light text-gray-300'>
                    <span className='text-md bg-gradient-to-t from-gray-400 to-white bg-clip-text font-bold text-transparent'>
                        <img
                            alt="team"
                            className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                            src={img}
                        ></img>
                    </span>
                </div>
            </div>
        </>
    );
};

export default HoverCard;
