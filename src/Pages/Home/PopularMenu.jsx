import { useEffect, useState } from "react";
import SectionTitle from "../../Componets/Sectiontitle/SectionTitle";
import MenuItem from "./Shayerd/MenuItem";

const PopularMenu = () => {
const [menu,setmenu]=useState([])

    useEffect(()=>{
fetch('public/menu.json')
.then(res=>res.json())
.then(data=>{
    const popularItem=data.filter(item=>item.category==='popular')
    setmenu(popularItem)})
    },[])

    console.log(menu)
    return (
        <div className="my-20">
            <SectionTitle heading={'From Our Menu '} subheading={"popular Menu"}>

            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
                {
                    menu.map(item=>
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