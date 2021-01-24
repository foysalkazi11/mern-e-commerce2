import React, { useState, useEffect } from "react";
import { notification } from "../config/notification";
import { useProduct } from "../productContext/ProductState";
import { Loading } from "../config/loading";

const AddProduct = (props) => {
  const [loading, setloading] = useState(false);
  const {
    isLoading,
    isError,
    creatNewProduct,
    addProduct,
    errorMessage,
    clearError
  } = useProduct();

  // useEffect(() => {
  //   clearError();
  //eslint-disable-next-line
  // }, []);

  useEffect(() => {
    if (creatNewProduct && !isLoading && !isError) {
      setloading(false);
      props.history.push("/newProduct");
    }
    if (isError && errorMessage) {
      setloading(false);
      notification("error", errorMessage);
      clearError();
    }
    //eslint-disable-next-line
  }, [creatNewProduct, isLoading, isError]);

  const [state, setstate] = useState({
    title: "",
    discription: "",
    price: ""
  });
  const [file, setfile] = useState("");
  const [inputValid, setinputValid] = useState({
    titleCheck: "",
    imageCheck: "",
    discriptionCheck: "",
    priceCheck: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setstate((state) => {
      return { ...state, [name]: value };
    });
  };
  const validation = () => {
    let titleCheck = "";
    let imageCheck = "";
    let discriptionCheck = "";
    let priceCheck = "";

    if (!state.title) {
      titleCheck = "Please fill up title field";
    }

    if (!file) {
      imageCheck = "Please fill up image field";
    }
    if (!state.discription) {
      discriptionCheck = "Please fill up discripation field";
    }
    if (!state.price) {
      priceCheck = "Please fill up discripation field";
    }
    if (titleCheck || imageCheck || discriptionCheck || priceCheck) {
      setinputValid((pre) => {
        return {
          ...pre,
          titleCheck,
          imageCheck,
          discriptionCheck,
          priceCheck
        };
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", state.title);
    formData.append("discription", state.discription);
    formData.append("price", state.price);

    if (validation()) {
      addProduct(formData);
      setloading(true);
    } else {
      notification("error", "please enter all firld");
    }
  };

  return (
    <section className="signup ">
      <div className="signup-container">
        {loading && <Loading loading={loading} size={100} />}
        <h1>Add Product</h1>
        <div className="underline"></div>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={state.title}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>
              {inputValid.titleCheck && inputValid.titleCheck}
            </p>
          </div>

          <div>
            <label htmlFor="discription">Discription</label>
            <input
              type="text"
              name="discription"
              value={state.discription}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>
              {inputValid.discriptionCheck && inputValid.discriptionCheck}
            </p>
          </div>
          <div>
            <label htmlFor="price">price</label>
            <input
              type="number"
              name="price"
              value={state.price}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>
              {inputValid.priceCheck && inputValid.priceCheck}
            </p>
          </div>
          <div>
            <label htmlFor="image">Uplode Image</label>
            <input type="file" onChange={(e) => setfile(e.target.files[0])} />
            <p style={{ color: "red" }}>
              {inputValid.imageCheck && inputValid.imageCheck}
            </p>
          </div>
          <div>
            <button className="btn">Create Moment</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
