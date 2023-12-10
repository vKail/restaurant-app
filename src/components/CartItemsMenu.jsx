import {menucategories} from './data/menucategories';

const CartItemsMenu = () => {
    return(
        <div className='flex flex-col space-y-5 p-5 w-full justify-center md:flex-row'>
           { menucategories.map((menucategory) => {
                return (
                    <div key={menucategory.name} className='flex flex-row justify-between text-center items-center shadow-lg bg-white m-0  ' >
                        <div className='flex justify-center rounded-md  md:h-52 md:w-32'>
                            <img className=' p-4 w-28'  src={menucategory.img} alt={menucategory.name} />
                        </div>
                            <div className='flex flex-col justify-center align-top text-justify'>
                                <h2 className='text-2xl'>{menucategory.name}</h2>
                        </div>
                        <div className='ml'>
                        <img className=' h-10 w-10 ' src="https://st4.depositphotos.com/4177785/28558/v/450/depositphotos_285584428-stock-illustration-double-arrows-flat-design-long.jpg" alt="" />
                        </div>
                    </div>
                )
            })
        }
        </div>
    );
};
export default CartItemsMenu;