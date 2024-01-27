import Banner from "@/components/Banner";
import NavBar from "@/components/NavBar";
import Section2 from "@/components/Section-2";
import Section3 from "@/components/Section3";
import  "../app/assets/custom.css";
import "../app/assets/responsive.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Section2 />
      <Section3 />
    </div>
  );
}