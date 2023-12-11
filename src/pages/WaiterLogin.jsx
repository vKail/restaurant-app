import { Link } from "react-router-dom";

const WaiterLogin = () => {

    return (
        <div className="flex flex-col place-content-center min-h-screen w-full md:w-auto items-center shadow-lg bg-gradient-to-t from-blue-400">
            <div className="flex flex-col md:flex-col justify-center align-middle items-center place-content-center shadow-lg bg-white rounded-md m-10 h-full">
            <img className='w-64 h-64 rounded-md m-5' src="./images/logo-restaurant.jpg" alt="" />
            <div  className="flex flex-col shadow-md  p-10 w-full h-full rounded-2xl items-center">
                <div className="felx flex-row">
                    <label htmlFor="username">Username</label>
                    <input className="px-9 m-4 outline-sky-200 border border-black rounded-lg" type="text" name="username" id="username" />                
                </div>
                <div className="felx flex-row">
                    <img className="w-4 " src="" alt="" />
                    <label htmlFor="password">Password</label>
                    <input className="px-9 m-4 outline-sky-200 border border-black rounded-lg" type="password" name="password" id="password" />
                </div>
                <Link className="flex bg-sky-200 w-4/12 rounded-lg justify-center content-center" to='/orders'>Ingresar</Link>
            </div>
            </div>
        </div>
    );
}

export default WaiterLogin;