import React from 'react';
import './button.css';


type Props = {
    type?: 'success' | 'info' | 'warning' | 'danger';
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseDown?:  (event: React.MouseEvent<HTMLButtonElement>) => void;
};


export default function ngmButton(props: Props)
{
    let classlist;

    if (props.type) {
        classlist = 'btn ' + props.type;
    }
    else {
        classlist = 'btn default';
    }

    return (
        <>
        <button
            className={classlist}
            onClick={props.onClick}
            onMouseDown={props.onMouseDown}
        >
            {props.children}
        </button>
        </>
    );
}
