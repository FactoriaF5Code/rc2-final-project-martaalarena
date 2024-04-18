import "./SaveReviewButton.css"

// eslint-disable-next-line react/prop-types
export default function SaveReviewButton({handleReview}) {
  return (
    <button className="botonGuardarReserva" onClick={handleReview}>Publicar</button>
  )
}
