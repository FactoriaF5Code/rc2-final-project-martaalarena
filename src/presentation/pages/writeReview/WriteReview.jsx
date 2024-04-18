import AddReviewForm from "../../components/addReviewForm/AddReviewForm";
import Header from "../../components/header/Header";


export default function WriteReview() {
  return (
    <>
      <section style={{ backgroundColor: "#627C85" }}>
        <Header />
        <article style={{ paddingTop: "11rem", minHeight: "100vh" }}>
          <AddReviewForm/>
        </article>
      </section>
    </>
  );
}
