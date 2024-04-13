import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FormReview.css";
import SaveReviewButton from "../saveReviewButton/SaveReviewButton";
import { useDataContext } from "../../../middleware/context/DataContext";
import { useState } from "react";

export default function FormReview() {
  const { postReview } = useDataContext();
  const [formData, setFormData] = useState(initialFormData);

  const initialFormData = {
    name: "",
    url_img: "",
    parking: "",
    description: "",
    amount_of_people: "",
    dificulty: "",
    wave_cuality: "",
    accessibility: "",
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleReview = (e) => {
    e.preventDefault();
    postReview(formData);
    setFormData(initialFormData);
  };

  return (
    <>
      <main className="containerAddReviewForm">
        <form action="">
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
              name="url"
              value={formData.url_img}
              placeholder="http://imgfz.com/i/ng2kJVm.jpeg"
            />
          </div>
          <h2>Del 10 al 100 rellena estos campos de menos a más</h2>
          <h3>Por ejemplo hay demasiada gente en la playa: 80 </h3>
          <article>
            <div>
              <p>Cantidad de gente</p>
              <Form.Select
                size="sm"
                value={formData.amount_of_people}
                style={{
                  width: "6vw",
                  fontSize: "3rem",
                  borderRadius: "1rem",
                  color: "#A1A1A1",
                }}
                onChange={handleChange}
              >
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
                <option>50</option>
                <option>60</option>
                <option>70</option>
                <option>80</option>
                <option>90</option>
                <option>100</option>
              </Form.Select>
            </div>
            <div>
              <p>Aparcamiento</p>
              <Form.Select
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
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
                <option>50</option>
                <option>60</option>
                <option>70</option>
                <option>80</option>
                <option>90</option>
                <option>100</option>
              </Form.Select>
            </div>
            <div>
              <p>Dificultad</p>
              <Form.Select
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
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
                <option>50</option>
                <option>60</option>
                <option>70</option>
                <option>80</option>
                <option>90</option>
                <option>100</option>
              </Form.Select>
            </div>
            <div>
              <p>Calidad de ola</p>
              <Form.Select
                size="sm"
                value={formData.wave_cuality}
                style={{
                  width: "6vw",
                  fontSize: "3rem",
                  borderRadius: "1rem",
                  color: "#A1A1A1",
                }}
                onChange={handleChange}
              >
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
                <option>50</option>
                <option>60</option>
                <option>70</option>
                <option>80</option>
                <option>90</option>
                <option>100</option>
              </Form.Select>
            </div>
            <div>
              <p>Accesibilidad</p>
              <Form.Select
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
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
                <option>50</option>
                <option>60</option>
                <option>70</option>
                <option>80</option>
                <option>90</option>
                <option>100</option>
              </Form.Select>
            </div>
          </article>
          <div>
            <label htmlFor="url">Descripción</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              placeholder="Playa tranquila, con preciosas vistas..."
              onChange={handleChange}
            />
          </div>
        </form>
        <SaveReviewButton handleReview={handleReview}/>
      </main>
    </>
  );
}
