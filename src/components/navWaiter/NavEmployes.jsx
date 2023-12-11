
import { Link } from 'react-router-dom';

const NavEmployes = () => {
    return (
            <aside className='flex md:flex-col justify-start'>
                <div className='flex flex-col align-middle justify-start'>
                    <h1>SUKI restaurant</h1>
                    <div>
                    <ul>
                        <li>
                            <Link to='/tables'>Mesas</Link>
                        </li>
                        <li>Ordenes</li>
                    </ul>
                    </div>
                </div>
            </aside>
    );
};

export default NavEmployes;