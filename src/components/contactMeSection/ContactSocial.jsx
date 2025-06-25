import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/dipanjali-sahoo/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/DipanjaliSahoo77" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/dipanjali_sahoo77/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;