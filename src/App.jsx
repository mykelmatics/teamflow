import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Features from "./components/Feature/Features";
import WhatYouCanDo from "./components/WhatYouCanDo/WhatYouCanDo";

import FeatureIcon from "../src/components/icons/Feature";

import VisualizeViewIcon from "../src/components/icons/VisualizeView";


import Support from "./components/Support/Support";
import Footer from "./components/Footer/Footer";
import ExistingTool from "./components/ExistingTools/ExistingTool";
import Trusted from "./components/Trusted/Trusted";

import "./App.css";
import Testimonial from "./components/Testimonial/Testimonial";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  return (
    <div className="app">
      <HeroSection/>
      <Trusted />
      <WhatYouCanDo />
      <Features
        IconComponent={FeatureIcon}
        rightContentHeader="Manage everything in one workspace"
        rightContentText="Planning, tracking and delivering your team’s best work has never
      been easier. An integrated workspace that’s simple to use, TeamFlow
      lets you spend less time managing your work and more time actually
      doing it."
        isFeatures={true}
        isCustomerCare={false}
        isRowReversed={false}
      />
      <Features
        rightContentHeader="Set up in minutes "
        rightContentText="Get started fast with hundreds of visual and customizable templates
      - or create your own. Use our free online template maker to create
      beautiful template in minutes. Choose from hundreds of pre-made
      templates and tell stories with data with our easy drag-and-drop
      infographic creator."
        // IconComponent={UserIcon}
        imageUrl="/src/assets/images/image1.png"
        isFeatures={false}
        isCustomerCare={false}
        isRowReversed={true}
        isImage={true}
      />
      <ExistingTool />
      <Features
      imageUrl="/src/assets/images/image2.png"
        // IconComponent={AutomationUserIcon}
        rightContentHeader="Save time with Automations"
        rightContentText="Automate the repetitive work in seconds so you can avoid human error and focus on what matters. It gives the impression of software that its highly automated which implies that it is good for client for who want to save time and manage team members easily."
        isFeatures={false}
        isCustomerCare={false}
        isRowReversed={false}
        isImage={true}
      />

      <Features
        IconComponent={VisualizeViewIcon}
        rightContentHeader="Visualize work with Views"
        rightContentText="View data as a map, calendar, timeline, kanban, and more
        The easy-to-use, visual interface lets any team member jump in and get started, no training required.."
        isFeatures={false}
        isCustomerCare={false}
        isRowReversed={true}
      />
         <Features
        imageUrl="/src/assets/images/image3.png"
        rightContentHeader="24/7 Customer Support"
        rightContentText="Our team is here to give you personalized support within the hour available 24/7. In accordance with our commitment to providing superior and professional service. Join daily live webinars, watch our tutorials, or browse through our knowledge 
        base"
        isFeatures={false}
        isCustomerCare={true}
        isRowReversed={false}
        isImage={true}
      />
      <Testimonial />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
