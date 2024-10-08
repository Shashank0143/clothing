import React from "react";
import "./Home.css";
import ProductCard from "./ProductCard";
import MataData from "../layouts/MataData/MataData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layouts/loader/Loader";
import { useAlert } from "react-alert";
import HeroSlider from "./HeroSilder";
import Banner from "./Banner/Banner"
// import FeaturedSlider from "./FeatureSlider";
import CategorySection from "./CategorySection/CategorySection";
import "slick-carousel/slick/slick.css"; // Slick slider styles
import "slick-carousel/slick/slick-theme.css";
// import Shopcategory from "./Shopcategory/Shopcategory"
function Home() {
  // we provided all parameter for react-alert at index.js
  const alert = useAlert();

  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  React.useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <>
            <MataData title="P&H by Priyanshu" />
            <div className="Home_Page">
              <div className="headerblank"></div>
              <div className="heroSlider_Home">
                <HeroSlider />
              </div>
              <CategorySection/>
              <div className="feature" style={{ marginTop: "2.7rem" }}>
                {/* <h2
                  style={{
                    textAlign: "center",
                    fontFamily: `"Archivo", sans-serif`,
                    fontWeight: "800",
                  }}
                > */}
                  {/* <Shopcategory/> */}
                  {/* Featured Products
                </h2> */}
                {/* {products &&
                  <FeaturedSlider products={products} />} */}
              </div>
              <h2 className="trending_heading">Trending Products</h2>
              <div className="trending-products">
              {products &&
                  products
                  .slice()
                  .sort(
                    (a, b) => 
                      new Date(b.createdAt) - new Date(a.createdAt))
                    .slice(0,4)
                    .map((product) => (
                    <ProductCard key={product._id} product={product}/>
                  ))}
              </div>
              
            </div>
            <Banner/>
          </>
        </>
      )}
    </>
  );
}

export default Home;
