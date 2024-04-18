import { fireEvent, render } from "@testing-library/react";
import { expect, test } from "vitest";
import BeachSearcher from "../presentation/components/beachSearcher/BeachSearcher";

test("el buscador encuentra las playas al escrinir su nombre", () => {
  
    const mockOnSearch = jest.fn();

    const {getByPlaceholderText} = render(<BeachSearcher onSearch={mockOnSearch} />);

    const input = getByPlaceholderText("Buscar...");

    fireEvent.change(input, {target: {value: "playa"}});

    expect(mockOnSearch).toHaveBeenCalledWith("playa");

});