import axios from "axios";


const useAxiouSecure = () => {
    const axiousSecure=axios.create({
        baseURL:'http://localhost:5000'
    })
 return axiousSecure;
};

export default useAxiouSecure;