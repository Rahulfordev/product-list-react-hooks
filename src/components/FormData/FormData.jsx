import { useEffect, useState } from "react";
import ProductTable from "../ProductRow/ProductTable";
import "./formData.css";

const FormData = () => {
  const getDataFromLocalstorage = () => {
    const data = localStorage.getItem("products");
    return data ? JSON.parse(data) : [];
  };

  const [products, setProduct] = useState(getDataFromLocalstorage());
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productSize, setProductSize] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDes, setProductDes] = useState("");

  function clearInput() {
    setProductName("");
    setProductType("");
    setProductColor("");
    setProductSize("");
    setProductQuantity("");
    setProductPrice("");
    setProductDes("");
  }

  const setDataLocalStorage = (updateData) => {
    localStorage.getItem("products", JSON.stringify(updateData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allProducts = {
      productName,
      productId: new Date().getTime(),
      productType,
      productColor,
      productSize,
      productQuantity,
      productPrice,
      productDes,
    };
    setDataLocalStorage(setProduct([...products, allProducts]));
    clearInput();
  };

  const handleDelete = (id) => {
    const filterProduct = products.filter(
      (product) => product.productId !== id
    );
    setProduct(filterProduct);
    setDataLocalStorage(filterProduct);
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <div>
      <div className="main">
        <h1 className="product-title">Product List App</h1>
        <p className="product-description">
          Add and view your books using local storage
        </p>
        <div className="product__container">
          <form onSubmit={handleSubmit} className="product__form" action="">
            <div className="product__input--content">
              <div className="product__name product-input">
                <label htmlFor="productName">Product Name</label>
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  value={productName}
                  placeholder="Product Name"
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </div>
              <div className="product__type product-input">
                <label htmlFor="productType">Choose Type</label>
                <select
                  onChange={(e) => setProductType(e.target.value)}
                  value={productType}
                  id="productType"
                >
                  <option value="defaultType">Choose Type</option>
                  <option value="mens">mens</option>
                  <option value="women">women</option>
                  <option value="child">child</option>
                </select>
              </div>
              <div className="product__color product-input">
                <label htmlFor="productColor">Choose Color</label>
                <select
                  onChange={(e) => setProductColor(e.target.value)}
                  id="productColor"
                  value={productColor}
                >
                  <option value="defaultColor">Choose Color</option>
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                </select>
              </div>
              <div className="product__size product-input">
                <label htmlFor="productSize">Choose Size</label>
                <select
                  onChange={(e) => setProductSize(e.target.value)}
                  id="productSize"
                  value={productSize}
                >
                  <option value="defaultColor">Choose Size</option>
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="xl">XL</option>
                </select>
              </div>
              <div className="product__quantity product-input">
                <label htmlFor="productQuantity">Select Quantity</label>
                <select
                  onChange={(e) => setProductQuantity(e.target.value)}
                  value={productQuantity}
                  id="productQuantity"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="product__price product-input">
                <label htmlFor="productPrice">Price</label>
                <input
                  type="number"
                  id="productPrice"
                  name="productPrice"
                  placeholder="0"
                  onChange={(e) => setProductPrice(e.target.value)}
                  value={productPrice}
                  required
                />
              </div>
              <div className="product__description product-input">
                <label htmlFor="productDescription">Description</label>
                <input
                  type="text"
                  id="productDescription"
                  name="productDescription"
                  placeholder="Product Description"
                  onChange={(e) => setProductDes(e.target.value)}
                  value={productDes}
                />
              </div>
            </div>
            <div className="add-btn">
              <button>Add Product</button>
            </div>
          </form>
        </div>
      </div>
      <div className="product__details">
        {products.length > 0 ? (
          <table>
            <tr>
              <th>Product Name</th>
              <th>Product ID</th>
              <th>Product Type</th>
              <th>Color</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
            {products.map((product, i) => (
              <ProductTable
                key={i}
                product={product}
                handleDelete={handleDelete}
              />
            ))}
          </table>
        ) : (
          "Not Available Product"
        )}
      </div>
    </div>
  );
};

export default FormData;
