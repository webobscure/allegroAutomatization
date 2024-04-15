import { useEffect, useState } from "react";
import "./App.css";
import generateExcel from "zipcelx";

function App() {
  const [products, setProducts] = useState([])


  useEffect(() => {
    const myHeaders = new Headers();
myHeaders.append("X-Shopify-Access-Token", "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");
myHeaders.append("rel", "next");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};
const productsURL = "https://50f2fa.myshopify.com/admin/api/2023-01/products.json?limit=200&fields=variants"
const metaURL = "https://50f2fa.myshopify.com/admin/api/2023-01/products/8714838147401/metafields.json?limit=200"
const corsURL = "https://web-production-43a4.up.railway.app/"
fetch(`${corsURL}${productsURL}`, requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
    }, []);

  const config = {
    filename: "allegro-doc",
    sheet: {
      data: [],
    },
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>Version: 5.1 (en), updated: 14.03.2024</th>
            <th style={{ color: "red" }}>
              First 3 rows are for Allegro usage, do not change them. Do not
              remove any columns.
            </th>
          </tr>
          <tr>
            <th>Order Information</th>
            <th>Basic Information</th>
            <th>Tax parameters</th>
            <th>Terms of Sales</th>
            <th>Additional specifications</th>
            <th>Product features</th>
          </tr>
          <tr>
            <th>Product ID (EAN/UPC/ISBN/ISSN/Allegro Product ID)</th>
            <th>Main Category</th>
            <th>Leaf Category</th>
            <th>Reference number/Seller SKU</th>
            <th>Price</th>
            <th>Title</th>
            <th>Images</th>
            <th>Offer Description</th>
            <th>Invoice</th>
            <th>Offer Subject</th>
            <th>VAR rates</th>
            <th>Returns Terms </th>
            <th>Complaints Terms</th>
            <th>Warranties (optional)</th>
            <th>Person responsible for product compliance</th>
            <th>Packaging Status</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Manufacturers code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
          </tr>
          <tr>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
          </tr>
          <tr>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => generateExcel(config)}>
        Generate Excel document
      </button>
    </>
  );
}

export default App;
