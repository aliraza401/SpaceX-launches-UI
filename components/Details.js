import React from "react";

function Details({ data }) {
  const status = data.success ? "success" : "failure";

  return (
    <>
      <h2>{data.name} </h2>
      <p>{data.details} </p>
    </>
  );
}

export default Details;
