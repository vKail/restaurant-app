import { dataitemsmenu } from "./data/dataitemsmenu";
const DataMenu = ({category}) => {

    const categoryfilter = dataitemsmenu.filter(item => item.category === category);

    return (
        <div className="data-menu"> 
            <h1>SUKI's MENU</h1>
            {categoryfilter.map((dataitems) => {
                return (
                    <div key={dataitems.name} className="flex flex-col space-y-5 p-5 w-full justify-center md:flex-row">
                        <div className="flex flex-row justify-start text-center items-center shadow-lg bg-white m-0">
                            <div className="flex justify-center rounded-md md:h-52 md:w-32">
                                <img className="p-4 w-28" src={dataitems.img} alt={dataitems.name} />
                            </div>
                            <div className="flex flex-col justify-center align-top text-justify">
                                <h2 className="text-2xl">{dataitems.name}</h2>
                                <p className="text-xl">{dataitems.description}</p>
                                <p className="text-xl">{dataitems.price}</p>
                            </div>

                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default DataMenu;