import React from "react";

import { Divider } from "@material-ui/core";
import Styles from "../assets/styles/contact.module.scss";

const Contact = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.top}>
        <Divider />
        <div className={Styles.top_content}>
          <h2>Get in Touch</h2>
          <div>
            <p>
              I’d love to hear about what you’re working on and how I could
              help. I’m currently looking for a new role and am open to a wide
              range of opportunities. My preference would be to find a position
              in a company in London. But I’m also happy to hear about
              opportunites that don’t fit that description. I’m a hard-working
              and positive person who will always approach each task with a
              sense of purpose and attention to detail. Please do feel free to
              check out my online profiles below and get in touch using the
              form.
            </p>
          </div>
        </div>
        <Divider />
        <div className={Styles.top_content}>
          <h2>Contact Me</h2>
          <div>
            <form>
              <div>
                <label>Name</label>
                <input type="text" placeholder="Jane Appleseed" name="" />
              </div>
              <div>
                <label>Email Address</label>
                <input type="text" placeholder="email@example.com" name="" />
              </div>
              <div>
                <label>Message</label>
                <textarea type="text" placeholder="How can I help?" name="" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
