import React, { useState } from 'react';
import { menucategories } from '../data/menucategories';
import { dataitemsmenu } from '../data/dataitemsmenu';
import NavEmployes from '../navWaiter/NavEmployes';

const OrderWaiters = () => {
  const [showItems, setShowItems] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoryfilter = dataitemsmenu.filter((item) => item.category === selectedCategory);

  const getItems = (category) => {
    setShowItems(true);
    setSelectedCategory(category);
  };

  return (
   <div className='flex flex-col place-content-center min-h-screen w-full md:w-auto items-center shadow-lg bg-gradient-to-t from-blue-400'>
        <div className="md:flex flex-row ">
        {menucategories.map((menucategory) => (
            <div
            key={menucategory.name}
            className='flex flex-row rounded-md justify-between text-center items-center shadow-lg bg-white m-0  md:flex-col md:justify-between md:p-3 md:m-5 md:w-2/12 md:h-48'
            >
            <div className='flex justify-center rounded-md  md:h-52 md:w-32'>
                <img className=' p-4 w-28 rounded-full' src={menucategory.img} alt={menucategory.name} />
            </div>
            <div className='flex flex-col justify-center align-top text-justify'>
                <h2 className='text-2xl'>{menucategory.name}</h2>
            </div>
            <div className='ml'>
                <button className='bg-cyan-100 m-2 w-32 h-6  rounded-md' onClick={() => getItems(menucategory.category)}>Ver opciones</button>
                
            </div>
            </div>
        ))}
        </div>
        <div className='grid grid-cols-3 gap-3 justify-center w-full'>
                {showItems == true &&
                categoryfilter.map((dataitems) => (
                    <div
                    key={dataitems.name}
                    className='flex w-11/12 justify-center'
                    >
                    <div className='flex flex-row justify-start text-center items-center shadow-lg bg-white  md:w-72 md:h-40 md:flex-row md:m-0 w-80'>
                        <div className='flex justify-center rounded-md md:w-32 align-middle'>
                        <img className='p-4 w-28 h-28 rounded-3xl' src={dataitems.img} alt={dataitems.name} />
                        </div>
                        <div className='flex flex-col justify-center align-top text-justify'>
                        <h2 className='font-bold italic'>{dataitems.name}</h2>
                        <p className='text-xl'>{dataitems.price}</p>
                        <button className='bg-green-200 rounded-sm p-1 w-32'>
                            + Agregar
                        </button>
                        </div>
                    </div>
                    </div>
                ))}
        </div>
   </div>
  );
};

export default OrderWaiters;