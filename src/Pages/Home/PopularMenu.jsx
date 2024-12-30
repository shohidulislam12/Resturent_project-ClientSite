import { useEffect, useState } from "react";
import SectionTitle from "../../Componets/Sectiontitle/SectionTitle";
import MenuItem from "./Shayerd/MenuItem";
import UseMEnu from "../../Hooks/UseMEnu";

const PopularMenu = () => {
    const [menu]=UseMEnu();
    const popular=menu.filter(item=>item.category==='popular')

    return (
        <div className="my-20">
            <SectionTitle heading={'From Our Menu '} subheading={"popular Menu"}>

            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
                {
                   popular.map(item=>
                   <MenuItem key={item._id} item={item}>
                   </MenuItem>)
                }
            </div>
            <div className="flex items-center text-center">
               <button className="btn btn-outline border-0 border-b-2">
               View Full Menu
               </button>
            </div>
        </div>
    );
};

export default PopularMenu;