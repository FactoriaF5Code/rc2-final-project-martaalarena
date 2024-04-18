import { render, fireEvent } from "@testing-library/react";
import { test, expect, vitest } from "vitest";
import AddReviewForm from "../presentation/components/addReviewForm/AddReviewForm";

vitest.mock("../../src/middleware/context/DataContext.jsx", () => ({
  useDataContext: vitest.fn(() => ({
    postReview: vitest.fn(),
    myReviews: [],
    setMyReviews: vitest.fn(),
  })),
}));

test("los inputs dejan escribir en ellos", () => {
  const { getByLabelText } = render(<AddReviewForm />);

  // Encuentra los elementos de input por sus etiquetas
  const nameInput = getByLabelText("Nombre");
  

  // Simula la escritura en los inputs
  fireEvent.change(nameInput, { target: { value: "Playa de los Quebrantos" } });
  // Verifica que los valores ingresados coincidan con los esperados
  expect(nameInput.value).toBe("Playa de los Quebrantos");
});
