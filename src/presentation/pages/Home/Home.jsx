import Header from "../../components/header/Header";
import PageContainer from "../../components/pageContainer/PageContainer";
import Slider from "../../components/slider/Slider";

export default function Home() {
  return (
    <>
    <section style={{ backgroundColor: "#627C85", height: "100vh" }} >
    <Header/>
    <Slider/>
    <PageContainer/>

    </section>
    </>
  )
}
