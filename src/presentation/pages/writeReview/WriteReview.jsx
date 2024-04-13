import Header from "../../components/header/Header";
import FormReview from "../../components/formReview/FormReview";

export default function WriteReview() {
  return (
    <>
      <section style={{ backgroundColor: "#627C85" }}>
        <Header />
        <article style={{ paddingTop: "11rem", minHeight: "100vh" }}>
          <FormReview />
        </article>
      </section>
    </>
  );
}
