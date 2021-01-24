import React, { useState } from "react";
import { GrNext } from "react-icons/gr";
import axiosConfig from "../../config/axiosConfig";
import { notification } from "../../config/notification";
//GrFormNext
const MailList = () => {
  const [mail, setmail] = useState({ email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setmail(() => {
      return { ...mail, [name]: value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "/mail/addEmail";
    if (mail.email === "") {
      notification("error", "Please enter an email");
    } else {
      try {
        const res = await axiosConfig.post(url, mail);
        if (res.data.message) {
          setmail({ email: "" });
          notification("info", res.data.message);
        }
      } catch (error) {
        notification("error", error.response.data.message);
      }
    }
  };
  return (
    <div className="mail-wraper">
      <div className="mail-container">
        <div>
          <p>Join our mailing list</p>
        </div>
        <div>
          <form action="#" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              id="email"
              value={mail.email}
              placeholder="Enter your email"
              onChange={handleChange}
            />
            <button>
              <GrNext size="1rem" className="icon" />
            </button>
          </form>
        </div>
        <div>
          <p>Sign up & get 15% off your first purchase</p>
        </div>
      </div>
    </div>
  );
};

export default MailList;
