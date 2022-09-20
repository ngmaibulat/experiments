import React from 'react';
import './buttonDropDown.css';


type Link = {
    name: string;
    href: string;
}


type Props = {
    type?: 'success' | 'info' | 'warning' | 'danger';
    links?: Array<Link>;
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseDown?:  (event: React.MouseEvent<HTMLButtonElement>) => void;
};


export default function ngmButtonDropDown(props: Props)
{
    let classlist;

    if (props.type) {
        classlist = 'btn ' + props.type;
    }
    else {
        classlist = 'btn default';
    }

    classlist = 'btn info';

    function handleContextMenu(e: React.MouseEvent)
    {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    return (
        <>
        <button
            className={classlist}
            onClick={props.onClick}
            onMouseDown={props.onMouseDown}
            onContextMenu={handleContextMenu}
        >
            {props.children}
        </button>

        <div className="dropdown" onContextMenu={handleContextMenu}>

        <button className="btn info borderleft">
            <i className="fa fa-caret-down"></i>
        </button>

        <div className="dropdown-content">
            {props.links?.map(item => {
                return (<a key={item.name} href={item.href}>{item.name}</a>)
            })}
        </div>

        </div>

        </>
    );
}
