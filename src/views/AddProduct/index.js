import React, { useState } from "react";
import { TextField, Button, Card } from "@material-ui/core";

const AddGate = () => {
  const [values, setValues] = useState({
    imageUrl: "",
    productName: "",
  });

  const { imageUrl, productName } = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
      className="bg-composed-wrapper--content p-3 p-md-5"
    >
      <div style={{ maxWidth: "100%", marginLeft: "10px" }}>
        <Card className="rounded-sm overflow-hidden shadow-xxl font-size-sm p-3 p-sm-0">
          <form className="p-5">
            <h3>Add Product</h3>
            <div className="mb-4 pt-4">
              <TextField
                id="filled-name"
                label="Logo Url"
                value={imageUrl}
                name="imageUrl"
                onChange={handleChange}
                variant="filled"
              />
            </div>

            <div className="mb-3">
              <TextField
                id="filled-name"
                label="Product Name"
                value={productName}
                name="productName"
                onChange={handleChange}
                variant="filled"
              />
            </div>

            <Button variant="contained" color="primary" onClick={handleSubmit}>
              add
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddGate;
