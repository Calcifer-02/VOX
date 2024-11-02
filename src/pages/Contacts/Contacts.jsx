import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ContactsContent from "./ContactsContent/ContactsContent";
function Contacts() {
   return (
      <div>
         <Header />
         <ContactsContent />
         <Footer />
      </div>
   );
}

export default Contacts;
