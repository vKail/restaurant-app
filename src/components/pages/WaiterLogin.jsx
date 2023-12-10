

const WaiterLogin = () => {

    return (
        <div className="flex flex-col py-20 items-center shadow-lg" >
            <img className='w-64 h-64' src="https://st2.depositphotos.com/35637396/49278/v/450/depositphotos_492782950-stock-illustration-cartoon-man-waiter-hold-empty.jpg" alt="" />
            <div  className="flex flex-col shadow-md  p-10 w-5/12 rounded-2xl items-center">
                <div className="felx flex-row">
                    <img src="" alt="" />
                    <label htmlFor="username">Username</label>
                    <input className="px-9 m-4 outline-sky-200 border border-black rounded-lg" type="text" name="username" id="username" />                
                </div>
                <div className="felx flex-row">
                    <img className="w-4 " src="https://us.123rf.com/450wm/wad/wad1607/wad160700031/60197289-el-acceso-de-seguridad-y-el-icono-de-protecci%C3%B3n-por-contrase%C3%B1a-dise%C3%B1o-plano-concepto-de-seguridad.jpg" alt="" />
                    <label htmlFor="password">Password</label>
                    <input className="px-9 m-4 outline-sky-200 border border-black rounded-lg" type="password" name="password" id="password" />
                </div>
                <button className="flex bg-sky-200 w-4/12 rounded-lg justify-center content-center">Ingresar</button>
            </div>
        </div>
    );
}

export default WaiterLogin;