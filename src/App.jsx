
import { useRef } from "react"
import "./css/style.css"
import Part1 from "./Part1"
import Part2 from "./Part2"
import Part3 from "./Part3"
import Part4 from "./Part4"
import Part5 from "./Part5"
import Part6 from "./Part6"
import Part7 from "./Part7"
import Part8 from "./Part8"




function App() {

  const HeadRef = useRef(null);
  const AboutRef = useRef(null);
  const ProductRef = useRef(null);
  const ContactRef = useRef(null);
  const ClientRef = useRef(null);
  const SubRef = useRef(null);
  const FooterRef = useRef(null);


  return (
    <>
      <div ref = {HeadRef} className="header_section">
        <Part1 refs = {{HeadRef, AboutRef, ProductRef, ContactRef, ClientRef, SubRef, FooterRef}}/>

        <Part2/>
      </div>
      <div ref = {AboutRef} className="about_section layout_padding">
       <Part3/>
      </div>
      <div ref = {ProductRef} className="product_section layout_padding">
       <Part4/>
      </div>
      <div ref = {ContactRef} className="contact_section layout_padding">
       <Part5/>
      </div>
      <div className="client_section layout_padding" ref = {ClientRef}>
       <Part6/>
      </div>
      <div className="subscribe_section layout_padding" ref = {SubRef}>
        <Part7/>
      </div>
      <div className="footer_section layout_padding" ref = {FooterRef}>
        <Part8/>
      </div>
      <div className="copyright_section">
        <div className="container">
          <div className="border"></div>
          <p className="copyright_text">
            2020 All Rights Reserved. Design by{" "}
            <a href="https://html.design">Free html Templates</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
