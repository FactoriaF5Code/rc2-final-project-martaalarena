import Header from "../../components/header/Header";
import SingleReview from "../../components/singleReview/SingleReview";
import { useParams } from "react-router-dom";

export default function review() {

  let { id } = useParams();
  return (
    <>
      <Header />
      <SingleReview id={id}/>
    </>
  );
}
