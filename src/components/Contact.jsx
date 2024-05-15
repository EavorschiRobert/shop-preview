/* eslint-disable no-undef */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";
import { faEnvelope, faPhone, faLocationDot } from "../utils/icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { CircularProgress, TextField } from "@mui/material";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useInView, motion } from "framer-motion";
const Contact = () => {
  const image = useRef();
  const isInView = useInView(image);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const notifySuccess = () =>
    toast.success("Thank you, we will contact you soon");
  const notifyError = () =>
    toast.error("Oops something went wrong. Please try again");
  const handleChange = (value, type) => {
    setForm((prevState) => {
      return {
        ...prevState,
        [type]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICEID,
        import.meta.env.VITE_EMAILJS_TEMPLATEID,
        {
          from_name: form.name,
          to_name: "Robert",
          from_email: form.email,
          to_email: "Dimitratvd@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLICKEY
      )
      .then(() => {
        setIsLoading(false);
        notifySuccess();
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        notifyError();
      });
  };
  return (
    <>
      <div className="bg-primary w-full h-full flex items-center justify-between pt-20">
        <div className="flex flex-col px-4 justify-center w-1/2 h-full items-center">
          <h1 className="font-bold text-3xl">Contact Us</h1>
          <h3>
            Feel free to contact us any time. We will get back to you as sooon
            as we can!
          </h3>
          <div className="w-full flex justify-center">
            <form className="w-3/4 flex flex-col gap-3">
              <TextField
                id="name"
                label="Name"
                variant="standard"
                value={form.name}
                onChange={(e) => handleChange(e.target.value, "name")}
              />
              <TextField
                id="email"
                label="Email"
                variant="standard"
                value={form.email}
                onChange={(e) => handleChange(e.target.value, "email")}
              />
              <TextField
                id="message"
                label="Message"
                variant="standard"
                value={form.message}
                onChange={(e) => handleChange(e.target.value, "message")}
              />
              {isLoading ? (
                <div className="bg-action w-1/2 p-2 rounded-2xl flex justify-center">
                  <CircularProgress className="" />
                </div>
              ) : (
                <button
                  className="bg-action w-1/2 p-2 rounded-2xl text-primary hover:bg-tertiary hover:text-action"
                  onClick={handleSubmit}
                >
                  SEND
                </button>
              )}
            </form>
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-end">
          <div className="text-primary absolute z-10 right-[0 top-[30%] h-1/2 w-1/2 bg-action rounded-l-2xl px-4 py-4">
            <div className="flex flex-col h-full gap-4 justify-center">
              <h1 className="font-bold">INFO</h1>
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faEnvelope} />
                <p>Dimitratvd@gmail.com</p>
              </div>
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faPhone} />
                <p>+30 2754 041580</p>
              </div>
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faLocationDot} />
                <p className="">
                  Epar.Od. Ermionis - Galatas, Thermisia 210 51, Grecia
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faClock} />
                <p className="">09:00-18:00</p>
              </div>
            </div>
          </div>
          <div className=" bg-secondary w-1/2 h-full"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
