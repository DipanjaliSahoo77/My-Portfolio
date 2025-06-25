import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_d9906i2", "template_7camjis", form.current, {
        publicKey: "LLAQVbnEcEMltCeBs",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
        toast.success(
  <div>
    <h4 style={{ margin: 0, color: "#2196f3" }}>Success!</h4>
    <p style={{ margin: 0 }}>Your message has been sent. Thank you!</p>
  </div>,
  {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    style: {
      background: "cyan",     
      color: "black",          
      border: "1px solid",
      borderRadius: "30px",
      boxShadow: "0 2px 10px",
      fontFamily: "inherit",
      minWidth: "300px",
    },
    icon: "✅",
  }
);
        },
        (error) => {
          toast.error("Failed to send message.", {
            position: "top-center",
            autoClose: 3000,
          });
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className="rounded-lg bg-lightBrown p-2"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;