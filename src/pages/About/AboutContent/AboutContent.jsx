import React from "react";
import "./AboutContent.css";

function AboutContent() {
   return (
      <div className="about-container">
         <img
            src="/images/about.svg"
            alt="Main Visual"
            className="main-image"
         />
         <div className="content-wrapper">
            <p className="description">
               Founded in 2023, our studio is the culmination of several years
               of collaborative work and freelance experiences of our founders.
               Drawing upon our extensive expertise gained from working with
               various design firms, we have come together to establish a
               dedicated bureau where we can embody our core values and
               principles.
               <br /> At our studio, we are committed to pushing the boundaries
               of creativity and innovation. We strive to provide our clients
               with the highest quality visualizations that not only showcase
               their designs but also evoke emotion and captivate viewers.
               Through a meticulous attention to detail and a keen understanding
               of design principles, we ensure that every visualization we
               create is a true reflection of our clients' visions.
               <br />
               Collaboration is at the heart of our approach. We value open
               communication and close partnerships with our clients, working
               hand in hand to bring their ideas to life. We believe in
               fostering a creative and collaborative environment where ideas
               can flourish and innovative solutions can be realized.
               <br />
               As a forward-thinking studio, we stay up to date with the latest
               advancements in technology and visualization techniques. This
               enables us to deliver cutting-edge visualizations that push the
               boundaries of what is possible. We pride ourselves on our ability
               to adapt to evolving industry trends while maintaining our
               commitment to delivering exceptional quality.
               <br />
               We invite you to explore our portfolio and see the transformative
               power of our visualizations. If you're ready to embark on a
               journey of creativity and innovation, we are excited to
               collaborate with you. Contact us today to discuss your project
               and let us leverage our years of experience to turn your visions
               into stunning visual realities.
            </p>
            <div className="team-images">
               <img
                  src="/images/team_member_1.svg"
                  alt="Team Member 1"
                  className="team-image"
               />
               <img
                  src="/images/team_member_2.svg"
                  alt="Team Member 2"
                  className="team-image"
               />
            </div>
         </div>
      </div>
   );
}

export default AboutContent;
