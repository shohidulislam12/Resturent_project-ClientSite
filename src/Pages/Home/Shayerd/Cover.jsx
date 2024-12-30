import { Parallax, Background } from 'react-parallax';


const Cover = ({img,title,subtitle}) => {
    return (
        <Parallax className='mb-20'
        blur={{ min: -50, max: 15 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200} 
    >
       <div
  className="hero h-[500px]"
  >
  <div className="hero-overlay  w-1/2 h-1/2 bg-opacity-40"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl uppercase font-bold">{title}</h1>
      <p className="mb-5">
       {subtitle}
      </p>
   
    </div>
  </div>
</div>
    </Parallax>
       
    );
};

export default Cover;