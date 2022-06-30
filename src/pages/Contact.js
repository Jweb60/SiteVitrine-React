import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import ContactForm from "../components/ContactForm";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetworks from "../components/SocialNetworks";
import Buttons from "../components/Buttons";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opcity: 0,
      x: 200,
    },
  };

  return (
    <main>
      <Mouse />
      <motion.div
        initial="out"
        animate="in"
        variants={pageTransition}
        transition = {{duration: 0.4}}
        className="contact"
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adresse</h4>
              <p>24 Rue du Commandant Guilbaud</p>
              <p>75016 Paris</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <CopyToClipboard text="0627965588" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Téléphone copié!")}
                >
                  06.06.06.06.06
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard text="fsagency@gmail.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("email copié!")}
                >
                  fsagency@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetworks />
          <div className="credits">Jean-Yves B. - 2022</div>
        </div>
        <Buttons left="/projet-4" />
      </motion.div>
    </main>
  );
};

export default Contact;
