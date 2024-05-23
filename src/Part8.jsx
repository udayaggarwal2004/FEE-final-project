
import Fb from "./images/fb-icon.png"
import Footer from "./images/footer-logo.png"

import InstaIcon from "./images/instagram-icon.png"
import Linkedin from "./images/linkedin-icon.png"
import Twitter from "./images/twitter-icon.png"

const Part8 = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-lg-3 col-sm-6">
        <div className="fooer_logo">
          <img src={Footer} />
        </div>
        <h1 className="customer_text">CUSTOMER SERVICE</h1>
        <p className="footer_lorem_text">
          There are many variat ions of passages of L orem Ipsum available
          , but the majority h ave suffered altera tion in some form, by{" "}
        </p>
      </div>
      <div className="col-lg-3 col-sm-6">
        <h1 className="customer_text">LET US HELP YOU</h1>
        <p className="footer_lorem_text">
          There are many variat ions of passages of L orem Ipsum available
          , but the majority h ave suffered altera tion in some form, by{" "}
        </p>
      </div>
      <div className="col-lg-3 col-sm-6">
        <h1 className="customer_text">INFORMATION</h1>
        <p className="footer_lorem_text1">
          About Us
          <br />
          Careers
          <br />
          Sell on shopee
          <br />
          Press & News
          <br />
          Competitions
          <br />
          Terms & Conditions
        </p>
      </div>
      <div className="col-lg-3 col-sm-6">
        <h1 className="customer_text">OUR SHOP</h1>
        <p className="footer_lorem_text">
          There are many variat ions of passages of L orem Ipsum available
          , but the majority h ave suffered altera tion in some form, by{" "}
        </p>
        <div className="social_icon">
          <ul>
            <li>
              <a href="#">
                <img src={Fb} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Twitter} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={InstaIcon} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Linkedin} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Part8
