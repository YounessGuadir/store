import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetcheMarcher } from "./Slice/MarcherSlice";
import { Link } from "react-router-dom";
import { fetchCategory } from "./Slice/CategorySlice";
import { motion } from 'framer-motion';

export default function Marcher() {
  const dispatch = useDispatch();
  const Marcher = useSelector(data => data.Marcher);
  const category = useSelector((state) => state.category);
  const [currentCategory, setCurrentCategory] = useState();
  useEffect(() => {
    dispatch(fetcheMarcher());
    dispatch(fetchCategory());
  }, [dispatch]);

  const displayCategories = () => {
    return category.map((category, key) => (
      <button
        key={key}
        className={`btn ${currentCategory === category ? 'btn-dark' : 'btn-outline-secondary'}`}
        onClick={(e) => {
          e.preventDefault();
          setCurrentCategory(category);
        }}
      >
        {category}
      </button>
    ));
  };
  const displayProduit = () => {
    let produitItem = Marcher;
    if (currentCategory !== undefined) {
      produitItem = produitItem.filter((product) => product.category === currentCategory);
    }

    if (produitItem.length > 0) {
      return produitItem.map((m, key) => (
        <motion.div key={key} className="col-md-3"
        initial={{
          y:'100vw'
        }}
        animate={{
          y:0
        }}
        transition={{
          duration:1,
          delay: 1,
          eqse:'easeInOut'
        }}
        >
          <div className="card h-100 text-center p-4">
            <motion.img 
             initial
             transition={{
               duration:2
             }}
             animate={{
              
               scale:1.1,
               delay:3
             }}
            className="card-img-top" height={'250px'} src={m.image} alt={m.title} />
            <div className="card-body">
              <motion.h4 className="card-title mb-0"
                  
                      animate={{
                        color:'darkgoldenrod'
                      }}
                      transition={{
                        duration:2,

                        eqse:'easeInOut'
                      }}
              >{m.title.substring(0, 12)}...</motion.h4>
              <p className="card-text lead fw-bold">{m.price} $</p>
              <Link to={`/marcher/${m.id}`}>
                <button type="button" className="btn btn-outline-dark">Add Product</button>
              </Link>
            </div>
          </div>
        </motion.div>
      ));
    }
  };

  return (
    <div>
      <motion.div className="hero"
      initial={{
        y:'-100vw'
      }}
      animate={{
        y:0
      }}
      transition={{
        duration:1,
        eqse:'easeInOut'
      }}
      >
        <div className="card bg-dark text-white border-0">
          <img 
         
           className="card-img" height={'550px'} src="https://media.ray-ban.com/cms/resource/image/327794/landscape_ratio90x43/2592/1239/43c879b859e5365d3cae521f124dddd4/60C3E299C297BF11419EAEDD8043ECD9/store-locator-top-level-banner-background-image-d.jpg" alt="Card background" />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <motion.h5 className="card-title display-3 fw-border mb-0"
                initial={{
                  opacity: 0.5,
                }}
                animate={{
                  scale: 1.1,
                  color: 'darkgoldenrod',
                  textShadow: '2px 4px 4px black'
                }}
                transition={{
                  duration: 1,
                  delay: 1
                }}>
                NEW SEASON ARRIVALS
              </motion.h5>
              <motion.p className="card-text lead fs-2"
                animate={{
                  scale: 1.1,
                  color: '#FFFACD',
                  textShadow: '2px 4px 4px black'
                }}
                transition={{
                  duration: 1,
                  delay: 1
                }}>
                CHECK OUT ALL THE TRENDS
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="container py-5">
        <div>
          <motion.h1 className="text text-center"
              animate={{
                scale:1.3,
                color:'black',
                textShadow: '4px 4px 4px #DC143C',
              
  
                
                
              }}
              transition={{
                duration:1,
                delay:1
                
              }}
          >Latest Products</motion.h1>
          <hr />
          <div className="row g-3 align-items-center mb-3 py-3">
            <div className="btn-group">{displayCategories()}</div>
          </div>
        </div>
        <div className="row">{displayProduit()}</div>
      </div>
    </div>
  );
}