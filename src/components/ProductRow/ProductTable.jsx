/* eslint-disable react/prop-types */
import { RiDeleteBin5Line } from "react-icons/ri";
import "./ProductTable.css";
const ProductTable = ({ product, handleDelete }) => {
  const {
    productName,
    productId,
    productType,
    productColor,
    productSize,
    productQuantity,
    productPrice,
    productDes,
  } = product;
  console.log(product);
  return (
    <tr>
      <td>{productName}</td>
      <td>{productId}</td>
      <td>{productType}</td>
      <td>{productColor}</td>
      <td>{productSize}</td>
      <td>{productQuantity}</td>
      <td>{productPrice * productQuantity}</td>
      <td>{productDes}</td>
      <td>
        <RiDeleteBin5Line
          color="red"
          className="delete-button"
          onClick={() => handleDelete(productId)}
        />
      </td>
    </tr>
  );
};

export default ProductTable;
