// import "./App.css";
import { AiOutlineContacts } from "react-icons/fa";
import LanguageIcon from "@mui/icons-material/Language";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
function App() {
  return (
    <div className="App">
      <div className="header">
        <h2>AMAN FERTILIZERS</h2>
        <button className="btnn">Contact Us</button>
      </div>

      <div className="nav">
        <h1>About Us</h1>
        <p>
          "Aman fertiliser is basically Islamabad base company which has
          expertise in making organic fertiliser from waste food. Our main aim
          is to provide such fertilzer to our farmers which is multi-nutrition
          and it’s doesn’t have any negative impact or either corp nor the
          farmers."
        </p>
      </div>
      <div className="home-screen">
        <div className="list-item">
          <h1>What is so different in Aman fertilizer?</h1>
          <ol>
            <li>Making fertilizers from the wasted food.</li>
            <li>Non-Acidic fertilizer to give proper neutrition to crops.</li>
            <li>We recycle left over-food.</li>
            <li>To make world organic.</li>
          </ol>
        </div>

        <div className="side-image">
          <img
            src="https://www.sgsgroup.pk/-/media/global/images/structural-website-images/hero-images/hero-agri-fertilizers.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="cards">
        <div className="card-one">
          <img
            src="https://www.planetnatural.com/wp-content/uploads/2012/12/fertilizer-products-1.jpg"
            alt=""
          />
          <h1>Pesticide</h1>
          <a
            className="link"
            href="https://www.niehs.nih.gov/health/topics/agents/pesticides/index.cfm"
          >
            View More
          </a>
        </div>

        <div className="card-one">
          <img
            src="https://rjlive.co.in/wp-content/uploads/2019/06/33.jpg"
            alt=""
          />
          <h1>Insecticide</h1>
          <a
            className="link"
            href="https://www.britannica.com/technology/insecticide"
          >
            View More
          </a>
        </div>

        <div className="card-one">
          <img
            src="https://feragotrade.com/wp-content/uploads/2020/07/crop-img-1-05302018.jpg"
            alt=""
          />
          <h1>Herbicide</h1>
          <a
            className="link"
            href="https://www.britannica.com/science/herbicide"
          >
            View More
          </a>
        </div>
      </div>

      <div className="vision">
        <h1>Whats Our vision?</h1>
        <p>
          We are passonate about transforming the world into the organic with
          the formost aims of providing eco-friendly products.
        </p>
      </div>

      <div className="footer">
        <h1>Contact for more info</h1>
        <div className="contact-list">
          <div className="icon-k">
            <CallIcon />
            <p className="text">+123-4567-789</p>
          </div>

          <div className="icon-k">
            <LocationOnIcon />
            <p className="text">islamabad</p>
          </div>

          <div className="icon-k">
            <EmailIcon />
            <p className="text">amanfertilizer@gmail.COM</p>
          </div>

          <div className="icon-k">
            <LanguageIcon />
            <p className="text">WWW.AFER.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
