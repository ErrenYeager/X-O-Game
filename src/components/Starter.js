import react from "react";
import customer1 from "../img/customers/customer-1.jpg";
import customer2 from "../img/customers/customer-2.jpg";
import customer3 from "../img/customers/customer-3.jpg";
import customer4 from "../img/customers/customer-4.jpg";
import customer5 from "../img/customers/customer-5.jpg";
import customer6 from "../img/customers/customer-6.jpg";
import hero from "../img/hero.png";

class Starter extends react.Component {
  render() {
    return (
      <div>
        <section className="hero-section">
          <div className="hero-box">
            <div className="hero-left-side">
              <div className="hero-text">
                <h1 className="hero-header">
                  A healthy meal delivered to your door, every single day
                </h1>
                <p className="hero-summery">
                  The smart 365-days-per-year food subscription that will make
                  you eat healthy again. Tailored to your personal tastes and
                  nutritional needs.
                </p>
              </div>
              <div className="hero-btns">
                <a href="/" className="btn">
                  Start eating well
                </a>
                <a href="/" className="btn light-btn">
                  Learn more &darr;
                </a>
              </div>
              <div className="delivery">
                <div>
                  <img src={customer1} alt="Customer pic" />
                  <img src={customer2} alt="Customer pic" />
                  <img src={customer3} alt="Customer pic" />
                  <img src={customer4} alt="Customer pic" />
                  <img src={customer5} alt="Customer pic" />
                  <img src={customer6} alt="Customer pic" />
                </div>
                <span className="delivery-text">
                  <strong>250,000+</strong> meals delivered last year!
                </span>
              </div>
            </div>
            <img
              src={hero}
              alt="woman enjoying food, bowl of food"
              className="hero-img"
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Starter;
