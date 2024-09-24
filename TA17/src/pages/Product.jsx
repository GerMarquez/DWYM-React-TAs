import { useParams } from 'react-router-dom';

const Product = () => {
    const {id} = useParams();
    return(
            <div>
              <h1>{`product ID = ${id}`}</h1>
            </div>
    );
};
  
export default Product;