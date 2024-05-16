import Header from "./components/Header";
import Banner from "./components/Banner";
import Gallary from "./components/Gallary";
import Footer from "./components/Footer";
import Section from "./components/Section";

function App() {
  const header = {
    title: "UrbanBite",
    navs: [
      { text: "Menu", link: "#menu" },
      { text: "Order", link: "#order" },
      { text: "Logout", link: "#" }
    ]
  };
  const banner = {
    title: "Delivered Fresh",
    text: "Bringing Culinary Delights to Your Doorstep",
  };
  const gallery = {
    section: {
      id: "menu",
      classes: "menu",
      title: "Menu",
      tagline: "Taste the Journey, Dish by Dish.",
      content: <div></div>
    },
    items: [
      {
        title: "Fit",
        text: `Lean Protein (Chicken Breast, Tofu) 
        - Essential for muscle repair and growth, lean proteins are key for those focusing on fitness.`,
        image: "./assets/img/card-1.jpg"
      },
      {
        title: "Nutri",
        text: `Berries (Blueberries, Strawberries) 
        - High in antioxidants and vitamins, berries are great for an energy boost and overall nutrition.`,
        image: "./assets/img/card-2.jpg"
      },
      {
        title: "Vital",
        text: `Quinoa - 
        A complete protein with all nine essential amino acids, perfect for nourishing your body's vital functions.`,
        image: "./assets/img/card-3.jpg"
      },
      {
        title: "Wellness",
        text: `Leafy Greens (Spinach, Kale) 
        - Packed with vitamins, minerals, and fiber, these greens support overall wellness and health.`,
        image: "./assets/img/card-4.jpg"
      }
    ]
  };
  const map = {
    section: {
      id: "order",
      classes: "order",
      title: "Order",
      tagline: "UrbanBite's Delivery Route Tracker: Navigate Your Order's Journey",
      content: <div id='map'><img src="./assets/img/map.png" alt="map" /></div>
    }
  };
  const footer = {
    socials: [
      { faicon: "fa-twitter", link: "#", text: "twitter" },
      { faicon: "fa-instagram", link: "#", text: "instagram" },
      { faicon: "fa-facebook", link: "#", text: "facebook" }
    ]
  };
  return (
    <>
      <Header {...header} />
      <main>
        <Banner {...banner} />
        <Gallary key={gallery.section.id} {...gallery} />
        <Section key={map.section.id} {...map.section} />
      </main>
      <Footer {...footer} />
    </>
  );
}

export default App;
