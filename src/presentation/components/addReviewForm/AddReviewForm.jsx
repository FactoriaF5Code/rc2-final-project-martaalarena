import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddReviewForm.css";
import SaveReviewButton from "../saveReviewButton/SaveReviewButton";
import { useDataContext } from "../../../middleware/context/DataContext";
import { useState } from "react";

export default function AddReviewForm() {
  const { postReview, myReviews, setMyReviews } = useDataContext();

  const initialFormData = {
    name: "",
    urlImg: "",
    location: "",
    valoration: "",
    parking: "",
    description: "",
    amountOfPeople: "",
    dificulty: "",
    waveCuality: "",
    accessibility: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleReview = (e) => {
    e.preventDefault();
    const formDataNew = { ...formData, isNew: true }
    postReview(formDataNew);
    setFormData(initialFormData);
    setMyReviews([
      ...myReviews,
      {
        name: formData.name,
        urlImg: formData.urlImg,
        location: formData.location,
        valoration: formData.valoration,
        parking: formData.parking,
        description: formData.description,
        amountOfPeople: formData.amountOfPeople,
        dificulty: formData.dificulty,
        waveCuality: formData.waveCuality,
        accessibility: formData.accessibility,
        isNew: true,
      },
    ])
    alert("publicación realizada con éxito");
  };

  return (
    <>
      <main className="containerAddReviewForm">
        <form>
          <div>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Playa de los Quebrantos"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="url">Url imagen</label>
            <input
              type="text"
              name="urlImg"
              value={formData.urlImg}
              placeholder="http://..."
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="location">Ubicación</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              placeholder="Calle..."
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Número de estrellas</p>
            <Form.Select
              name="valoration"
              size="sm"
              value={formData.valoration}
              style={{
                width: "6vw",
                fontSize: "3rem",
                borderRadius: "1rem",
                color: "#A1A1A1",
              }}
              onChange={handleChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>
          </div>

          <h2>Del 10 al 100 rellena estos campos de menos a más</h2>
          <h3>Por ejemplo hay demasiada gente en la playa: 80 </h3>
          <article>
            <div>
              <p>Cantidad de gente</p>
              <Form.Select
                name="amountOfPeople"
                size="sm"
                value={formData.amountOfPeople}
                style={{
                  width: "6vw",
                  fontSize: "3rem",
                  borderRadius: "1rem",
                  color: "#A1A1A1",
                }}
                onChange={handleChange}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
                <option value="100">100</option>
              </Form.Select>
            </div>
            <div>
              <p>Aparcamiento</p>
              <Form.Select
                name="parking"
                size="sm"
                value={formData.parking}
                style={{
                  width: "6vw",
                  fontSize: "3rem",
                  borderRadius: "1rem",
                  color: "#A1A1A1",
                }}
                onChange={handleChange}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
                <option value="100">100</option>
              </Form.Select>
            </div>
            <div>
              <p>Dificultad</p>
              <Form.Select
                name="dificulty"
                size="sm"
                value={formData.dificulty}
                style={{
                  width: "6vw",
                  fontSize: "3rem",
                  borderRadius: "1rem",
                  color: "#A1A1A1",
                }}
                onChange={handleChange}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
                <option value="100">100</option>
              </Form.Select>
            </div>
            <div>
              <p>Calidad de ola</p>
              <Form.Select
                name="waveCuality"
                size="sm"
                value={formData.waveCuality}
                style={{
                  width: "6vw",
                  fontSize: "3rem",
                  borderRadius: "1rem",
                  color: "#A1A1A1",
                }}
                onChange={handleChange}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
                <option value="100">100</option>
              </Form.Select>
            </div>
            <div>
              <p>Accesibilidad</p>
              <Form.Select
                name="accessibility"
                size="sm"
                value={formData.accessibility}
                style={{
                  width: "6vw",
                  fontSize: "3rem",
                  borderRadius: "1rem",
                  color: "#A1A1A1",
                }}
                onChange={handleChange}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
                <option value="100">100</option>
              </Form.Select>
            </div>
          </article>
          <div>
            <label htmlFor="description">Descripción</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              placeholder="Playa tranquila, con preciosas vistas..."
              onChange={handleChange}
            />
          </div>
        </form>
        <SaveReviewButton handleReview={handleReview} />
      </main>
    </>
  );
}
