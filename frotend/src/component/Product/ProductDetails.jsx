import React, { useEffect, useState, useRef } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { IconButton, Input } from "@material-ui/core";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Rating from "@material-ui/lab/Rating";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import {
  generateDiscountedPrice,
  calculateDiscount,
  dispalyMoney,
} from "../DisplayMoney/DisplayMoney";
import useActive from "../hook/useActive";
import ReviewCard from "./ReviewCard";
import {
  clearErrors,
  getProductDetails,
} from "../../actions/productAction";
import MetaData from "../layouts/MataData/MataData";
import { addItemToCart } from "../../actions/cartAction";
import CricketBallLoader from "../layouts/loader/Loader";
import Button from "@mui/material/Button";
import { PRODUCT_DETAILS_RESET } from "../../constants/productsConstatns";
import "./ProductDetails.css";
import CustomTailoredButton from "./CustomTailoredButton";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ProductDetails = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const alert = useAlert();

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [previewImg, setPreviewImg] = useState("");
  const { handleActive, activeClass } = useActive(0);
  const [measurements, setMeasurements] = useState({});
  const [isInfoExpanded, setIsInfoExpanded] = useState(false);  // State to control "Read More"
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false); // State to control "Read More"

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const imgContainerRef = useRef(null);

  const handleStart = (e) => {
    const container = imgContainerRef.current;
    setIsDragging(true);

    if (e.type === "mousedown") {
      setStartX(e.pageX - container.offsetLeft);
      setStartY(e.pageY - container.offsetTop);
    } else if (e.type === "touchstart") {
      setStartX(e.touches[0].pageX - container.offsetLeft);
      setStartY(e.touches[0].pageY - container.offsetTop);
    }

    setScrollLeft(container.scrollLeft);
    setScrollTop(container.scrollTop);
  };

  // Function to handle dragging for both mouse and touch events
  const handleMove = (e) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevents default scrolling behavior on touch devices

    const container = imgContainerRef.current;
    let x, y;

    if (e.type === "mousemove") {
      x = e.pageX - container.offsetLeft;
      y = e.pageY - container.offsetTop;
    } else if (e.type === "touchmove") {
      x = e.touches[0].pageX - container.offsetLeft;
      y = e.touches[0].pageY - container.offsetTop;
    }

    const walkX = (x - startX) * 2; // Adjust speed by changing multiplier
    const walkY = (y - startY) * 2; // Adjust speed by changing multiplier
    container.scrollLeft = scrollLeft - walkX;
    container.scrollTop = scrollTop - walkY;
  };

  // Function to stop the dragging for both mouse and touch events
  const handleEnd = () => {
    setIsDragging(false);
  };

  const { product, loading, error, success } = useSelector(
    (state) => state.productDetails
  );

  const navigate = useHistory();



  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }
    if (success) {
      setPreviewImg(product.images[0].url);
      handleActive(0);
      dispatch({ type: PRODUCT_DETAILS_RESET });
    }
    dispatch(getProductDetails(match.params.id));
    return () => {
      dispatch({ type: PRODUCT_DETAILS_RESET });  // Reset product details when leaving the page
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, error, alert, success, match.params.id]);

  useEffect(() => {
    if (product && product.images && product.images.length > 0) {
      setPreviewImg(product.images[0].url);  // Set the first image as the preview
      handleActive(0);  // Reset the active class to the first image
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  const handleMeasurementsChange = (newMeasurements) => {
    setMeasurements(newMeasurements);
    setSelectedSize("");
  };

  const handleAddItem = () => {
    if (!selectedSize && Object.keys(measurements).length === 0) {
      alert.error("Please select a size or Provide Custom Measurements");
      return;
    }
    dispatch(addItemToCart(match.params.id, quantity, selectedSize, measurements));
    alert.success("Item Added To Cart");

    navigate.push("/cart");
  };

  const handlePreviewImg = (images, i) => {
    setPreviewImg(images[i].url);
    handleActive(i);
  };

  const increaseQuantityHandler = () => {
    if (product.Stock <= quantity) {
      return;
    }
    setQuantity((prv) => prv + 1);
  };

  const deceraseQuantityHandler = () => {
    if (quantity <= 1) {
      return;
    }
    setQuantity((prv) => prv - 1);
  };

  const finalPrice = generateDiscountedPrice(product.price, product.discount);
  const discountedPrice = product.price - finalPrice;
  const newPrice = dispalyMoney(finalPrice);
  const oldPrice = dispalyMoney(product.price);
  const savedPrice = dispalyMoney(discountedPrice);
  const savedDiscount = calculateDiscount(discountedPrice, product.price);

  return (
    <>
      {loading ? (
        <CricketBallLoader />
      ) : (
        <>
          <div className="prodcutDetialsContainer">
            <MetaData title={product.name} />
            <section id="product_details" className="section">
              <div className="product_container">
                <div className="wrapper prod_details_wrapper">
                  <div className="prod_details_left_col">
                    <div className="prod_details_tabs">
                      {product.images &&
                        product.images.map((img, i) => (
                          <div
                            key={i}
                            className={`tabs_item ${activeClass(i)}`}
                            onClick={() => handlePreviewImg(product.images, i)}
                          >
                            <img src={img.url} alt="product-img" />
                          </div>
                        ))}
                    </div>
                    <figure 
                    className="prod_details_img"
                    ref={imgContainerRef}
                    onMouseDown={handleStart}
                    onMouseMove={handleMove}
                    onMouseUp={handleEnd}
                    onMouseLeave={handleEnd}
                    onTouchStart={handleStart} // For touch devices
                    onTouchMove={handleMove}   // For touch devices
                    onTouchEnd={handleEnd}     // For touch devices
                    style={{ overflow: "auto" }}
                    >
                      <img src={previewImg} alt="product-img" />
                    </figure>
                  </div>
                  <div className="prod_details_right_col_001">
                    <h1 className="prod_details_title">{product.name}</h1>
                    <h4 className="prod_details_info">
                      {isInfoExpanded ? product.info : `${product.info?.substring(0, 100)}...`}
                      <button
                        onClick={() => setIsInfoExpanded(!isInfoExpanded)}
                        className="read-more-btn"
                      >
                        {isInfoExpanded ? "Show Less" : "Read More"}
                      </button>
                    </h4>
                    <div className="prod_details_ratings">
                      <Rating
                        value={product.ratings}
                        precision={0.5}
                        readOnly
                        style={{ color: "#DE7921", fontSize: 16 }}
                      />
                      <span>|</span>
                      <Link
                        to="#"
                        style={{ textDecoration: "none", color: "#414141" }}
                      >
                        {product.numOfReviews} Ratings
                      </Link>
                    </div>
                    <div className="prod_details_price">
                      <div className="price_box">
                        <h2 className="price">
                          {newPrice} &nbsp;
                          <small className="del_price">
                            <del>{oldPrice}</del>
                          </small>
                        </h2>
                        <p className="saved_price">
                          You save: {savedPrice} ({savedDiscount}%)
                        </p>
                        <span className="tax_txt">(Inclusive of all taxes)</span>
                      </div>
                      <div className="badge">
                        {product.Stock >= 1 ? (
                          <span className="instock">
                            <DoneIcon /> In Stock
                          </span>
                        ) : (
                          <span className="outofstock">
                            <CloseIcon /> Out of stock
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="seprator2"></div>
                    <div className="productDescription">
                      <div className="productDiscriptiopn_text">
                        <h4>Description:</h4>
                        <p>
                          {isDescriptionExpanded
                            ? product.description
                            : `${product.description?.substring(0, 150)}...`}
                          <button
                            onClick={() =>
                              setIsDescriptionExpanded(!isDescriptionExpanded)
                            }
                            className="read-more-btn"
                          >
                            {isDescriptionExpanded ? "Show Less" : "Read More"}
                          </button>
                        </p>
                      </div>
                      <div className="prod_details_offers">
                        <h4>Offers and Discounts</h4>
                        <ul>
                          <li>No Cost EMI on Credit Card</li>
                          <li>Pay Later & Avail Cashback</li>
                        </ul>
                      </div>
                      <div className="deliveryText">
                        <LocalShippingOutlinedIcon />
                        We deliver! Just say when and how.
                      </div>
                    </div>
                    <CustomTailoredButton 
                      onMeasurementsChange={handleMeasurementsChange}
                    />
                    <div className="seprator2"></div>

                    <div className="prod_details_sizes">
                      <h5>Available Sizes:</h5>
                      {product.sizes ? (
                        <div className="size-options">
                          {Object.keys(product.sizes).map((sizeKey) => (
                            <button
                              key={sizeKey}
                              className={`size-option ${
                                selectedSize === product.sizes[sizeKey]
                                  ? "selected"
                                  : ""
                              }`}
                              onClick={() =>
                                setSelectedSize(product.sizes[sizeKey])
                              }
                            >
                              {product.sizes[sizeKey]}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <p>No sizes available</p>
                      )}
                    </div>

                    <div className="seprator2"></div>

                    <div className="prod_details_additem">
                      <h5>QTY:</h5>
                      <div className="additem">
                        <IconButton
                          onClick={deceraseQuantityHandler}
                          className="additem_decrease"
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Input
                          readOnly
                          type="number"
                          value={quantity}
                          className="input"
                        />
                        <IconButton
                          onClick={increaseQuantityHandler}
                          className="additem_increase"
                        >
                          <AddIcon />
                        </IconButton>
                      </div>
                      <Button
                        variant="contained"
                        className="prod_details_addtocart_btn"
                        onClick={handleAddItem}
                        disabled={product.Stock <= 0}
                      >
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="reviewCard">
              <ReviewCard product={product} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
