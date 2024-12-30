import { Helmet} from 'react-helmet-async';
import Cover from '../Home/Shayerd/Cover';
import img from "../../assets/menu/banner3.jpg"
import img1 from "../../assets/menu/dessert-bg.jpeg"
import img2 from "../../assets/menu/pizza-bg.jpg"
import img3 from "../../assets/menu/salad-bg.jpg"
import img4 from "../../assets/menu/soup-bg.jpg"
import PopularMenu from '../Home/PopularMenu';
import UseMEnu from '../../Hooks/UseMEnu';
import SectionTitle from '../../Componets/Sectiontitle/SectionTitle';
import Manucatagori from './ManuCategory/Manucatagori';
const Menu = () => {
const [menu]=UseMEnu()
const dessert=menu.filter(item=>item.category==='dessert')
const pizza=menu.filter(item=>item.category==='pizza')
const salad=menu.filter(item=>item.category==='salad')
const soup=menu.filter(item=>item.category==='soup')
const offered=menu.filter(item=>item.category==='offered')

    return (
        <div>
              <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover subtitle={'Would you like to try a dish?'} title={'Our Menu'} img={img}></Cover>
       <SectionTitle subheading={"Don't miss"} heading={"TODAY'S OFFER"}></SectionTitle>
       <Manucatagori  items={offered}>

       </Manucatagori>
       <Manucatagori   subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} title={'dessert'} img={img1} items={dessert}>

       </Manucatagori>
       <Manucatagori   subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} title={'pizza'} img={img2} items={pizza}>

       </Manucatagori>
       <Manucatagori   subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} title={'salads'} img={img3} items={soup}>

       </Manucatagori>
       <Manucatagori   subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} title={'soups'} img={img4} items={salad}>

       </Manucatagori>
    
        </div>
    );
};

export default Menu;