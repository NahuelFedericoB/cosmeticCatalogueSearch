import React from "react";

const ProductCard = ({ id, price, image, name, description }) => {
  const CardHeader = () => {
    const productImage = {
      backgroundImage: "url(" + image + ")",
      backgroundPosition: "center center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    };

    return (
      <header style={productImage} id={id} className="card-header">
        <h4 className="card-header--title">${price}</h4>
      </header>
    );
  };

  const CardBody = () => {
    return (
      <div className="card-body">
        <h2>{name}</h2>
        <p className="body-content">{description}</p>
      </div>
    );
  };

  return (
    <article className="card">
      <CardHeader />
      <CardBody />
    </article>
  );
};

export default ProductCard;
