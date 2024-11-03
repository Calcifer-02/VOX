import React from "react";
import "./ContactsContent.css";

function ContactsContent() {
   return (
      <main className="contacts-container">
         <div className="contacts-info">
            <h2>FOR INQUIRIES</h2>
            <p>
               We are always ready to answer your questions, discuss project
               details, or offer our collaboration.
               <br />
               If you have any inquiries regarding the cost of our services or
               would like to receive a customized proposal, please feel free to
               get in touch with us.
            </p>
            <div>
               Additionally, you can reach us using the following contact
               details:
               <ul>
                  <li>Phone: [your phone number]</li>
                  <li>Email: [your email address]</li>
               </ul>
            </div>

            <div className="social-icons">
               <img src="./images/telegram.png" alt="Telegram" />
               <img src="./images/behance.png" alt="Behance" />
            </div>
            <p>
               Feel free to contact us through any of the provided methods. We
               are eager to discuss your requirements and initiate
               collaboration.
            </p>
         </div>
         <form className="contact-form">
            <label>
               Your Name (required)
               <input type="text" name="name" required />
            </label>
            <label>
               Your Email (required)
               <input type="email" name="email" required />
            </label>
            <label>
               Subject
               <input type="text" name="subject" />
            </label>
            <label>
               Your Message
               <textarea name="message" />
            </label>
            <button type="submit">Send</button>
         </form>
      </main>
   );
}

export default ContactsContent;
