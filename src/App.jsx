import { useEffect, useState } from "react";
import "./App.css";
import generateExcel from "zipcelx";

function App() {
  const [newProduct, setNewProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const productsPerPage = 15;
  
  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append(
      "X-Shopify-Access-Token",
      "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"
    );
    myHeaders.append("rel", "next");
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const corsAnywhere = "https://cors-anywhere.herokuapp.com/corsdemo/"
    const productsURL =
      "https://50f2fa.myshopify.com/admin/api/2023-01/products.json?limit=220";
    const corsURL = "https://web-production-43a4.up.railway.app/";
    fetch(`${corsURL}${productsURL}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result.products);

        const newProducts = result.products.map((el) => ({
          product_id: el.variants[0].id,
          main_category: "Accessories (Laptop, PC)",
          leaf_category:
            "Accessories (Laptop, PC) > Accessories > Handles (95595)",
          reference_number: el.variants[0].sku,
          price: el.variants[0].price,
          title: el.variants[0].title,
          images: el.images[0].src,
          offer_description: `<h1>ONKRON${el.variants[0].sku}Czarny  </h1>`,
          vat_rates: "23%",
          return_terms:
            "Return policy (id: 3728fc0a-a29e-470c-8988-18e3f6cd943e)",
          complaints_terms:
            "Complaints Terms (id: 73fa6d50-b2e4-4076-912c-3e4d636da5ce)",
          warranties: "",
          person_responsible_for_product_compliance:
            "Julia Tomaszewska (id: 3aa72108-1178-4190-8f15-c90c2bceee94)",
          packaging_status_dict: "",
          brand_dict: "OnKron",
          model_text: el.variants[0].sku,
          manufacturers_code_text: "other",
        }));
        console.log(newProducts);
        setNewProducts(newProducts)
  //       const totalProducts = newProduct.products.length;
  // const totalPages = Math.ceil(totalProducts / productsPerPage);
  // setTotalPages(totalPages);
      })
      .catch((error) => console.error(error));
  }, []); 

  // Функция для переключения между страницами
const handlePageChange = (page) => {
  setCurrentPage(page);
};

// Отображаем только продукты на текущей странице
// const startIndex = (currentPage - 1) * productsPerPage;
// const endIndex = startIndex + productsPerPage;
// const productsOnPage = newProduct.products.slice(startIndex, endIndex);
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
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th>Basic Information</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>Tax parameters</th>
            <th>Terms of Sales</th>
            <th></th>
            <th></th>
            <th></th>
            <th>Additional specifications</th>
            <th>Product features</th>
            <th></th>
            <th></th>
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
            <th>VAT rates</th>
            <th>Returns Terms </th>
            <th>Complaints Terms</th>
            <th>Warranties (optional)</th>
            <th>Person responsible for product compliance</th>
            <th>Packaging Status</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Manufacturers code</th>
          </tr>
          <tr>
            <th>product_id_(ean/upc/isbn/issn/allegro_product_id)</th>
            <th>main_category</th>
            <th>leaf_category</th>
            <th>reference_number/seller_sku</th>
            <th>price</th>
            <th>title</th>
            <th>images</th>
            <th>offer_description</th>
            <th>vat_rates</th>
            <th>returns_terms </th>
            <th>complaints_terms</th>
            <th>warranties_(optional)</th>
            <th>person_responsible_for_product_compliance</th>
            <th>packaging_status_dict</th>
            <th>brand_dict</th>
            <th>model_text</th>
            <th>manufacturers_code_text</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          </tr>
          { newProduct
  ? newProduct.map((product, index) => (
    <tr key={index}>
      <td>{product.product_id}</td>
      <td>{product.main_category}</td>
      <td>{product.leaf_category}</td>
      <td>{product.reference_number}</td>
      <td>{product.price}</td>
      <td>{product.title}</td>
      <td>{product.images}</td>
      <td>{product.offer_description}</td>
      <td>{product.vat_rates}</td>
      <td>{product.return_terms}</td>
      <td>{product.complaints_terms}</td>
      <td>{product.warranties}</td>
      <td>{product.person_responsible_for_product_compliance}</td>
      <td>{product.packaging_status_dict}</td>
      <td>{product.brand_dict}</td>
      <td>{product.model_text}</td>
      <td>{product.manufacturers_code_text}</td>
    </tr>
  ))
  : <tr><td colSpan="17">Nothing fetched</td></tr>
}


          
        </tbody>
      </table>
      <div>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
  <button key={page} onClick={() => handlePageChange(page)}>
    {page}
  </button>
))}
      </div>
      <button onClick={() => generateExcel(config)}>
        Generate Excel document
      </button>
    </>
  );
}

export default App;