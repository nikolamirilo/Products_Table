import React from "react";
import "./Products.css";
import { useProducts } from "../../contexts/ProductsContext";

const Products = () => {
  const { products } = useProducts();

  const getUniqueProduct = (products, name) => {
    const uniqueProduct = products

      .map((e) => e[name])

      .map((e, i, final) => final.indexOf(e) === i && i)

      .filter((e) => products[e])

      .map((e) => products[e]);
    return uniqueProduct;
  };

  const sortedProducts = getUniqueProduct(products, "name").sort(function (a, b) {
    return b.price - a.price;
  });

  return (
    <div className="products-table">
      <table>
        <tr className="table-column-headings">
          <th>Product name</th>
          <th>Amount</th>
          <th>Unit price</th>
        </tr>
        {sortedProducts.map((product) => {
          if (
            (product.weight > 750 && product.weight_currency === "g") ||
            (product.weight > 0.75 && product.weight_currency === "kg")
          ) {
            return (
              <tr className="product" key={product.id}>
                <td className="product-name">{product.name}</td>
                <td className="product-weight">
                  {product.weight}
                  {product.weight_currency}
                </td>
                <td className="product-price">
                  {product.price_currency}
                  {product.price}
                </td>
              </tr>
            );
          } else {
            return null;
          }
        })}
      </table>
    </div>
  );
};

export default Products;
