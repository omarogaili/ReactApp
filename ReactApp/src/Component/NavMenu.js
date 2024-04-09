import React ,{useState} from 'react';
import './Nav.css';
export default function Nav()
{
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav= ()=>{
        setIsOpen(!isOpen);
    }
    return (
        <div className='App'>
            <div className={`menu-icon ${isOpen ? 'open':''}`} onClick={toggleNav}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <div className={`menu ${isOpen ? 'open': ''}`}>
                <ul>
                    <li>
                        Omar
                    </li>
                </ul>
            </div>
        </div>
    );
}