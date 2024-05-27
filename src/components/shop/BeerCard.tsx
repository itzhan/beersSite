import { Button, Img } from "@chakra-ui/react";
import React from "react";

const BeerCard = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <Img
          src="https://s3-eu-west-3.amazonaws.com/cm-site/wp-content/uploads/2018/02/17151225/pavillon-blanc-268x456.png"
          alt="Beers"
          className="rounded-xl"
          objectFit={"cover"}
          w={"50%"}
          h={"auto"}
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">铁棍酒</h2>
        <p>活血经络 养生必备</p>
        <div className="card-actions">
          <Button bg={"#cab57e"} color={"#000000"} _hover={{ bg: "#dbc893" }}>
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
