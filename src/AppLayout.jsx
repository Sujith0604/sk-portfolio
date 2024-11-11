import Footer from "./Compnents/Footer";
import Header from "./Compnents/Header";
import AboutSection from "./Sections/AboutSection";
import ContactSection from "./Sections/ContactSection";
import Herosection from "./Sections/Herosection";
import Quotes from "./Sections/Quotes";
import SkillsSection from "./Sections/SkillsSection";
import WorkSection from "./Sections/WorkSection";

const AppLayout = () => {
  return (
    <div className=" flex flex-col gap-5 md:mx-[50px]  px-2">
      {/* <Header /> */}
      <Herosection />
      <div className=" border p-4 rounded-3xl bg-gradient-to-t from-gray-700 via-gray-900 to-black">
        <AboutSection />
        <Quotes />
        <SkillsSection />
      </div>
      <WorkSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default AppLayout;
