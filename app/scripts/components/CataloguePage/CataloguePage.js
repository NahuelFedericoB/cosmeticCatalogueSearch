/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React from "react";
import ProductCard from "./ProductCard";
import useCataloguePage from "./useCataloguePage";

const CataloguePage = () => {
  const { catalogue, isLoading } = useCataloguePage();

  return (
    <section id="home">
      <div className="content">
        {isLoading && <h1 className="loading-message">Loading...</h1>}
        <div className="product-catalog">
          {catalogue.length > 0 &&
            catalogue.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                image={product.image}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default CataloguePage;
