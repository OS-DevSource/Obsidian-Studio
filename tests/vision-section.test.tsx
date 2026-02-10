import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { VisionSection } from "@/components/vision-section";

describe("VisionSection", () => {
  it("renders section title and default case signal", () => {
    render(<VisionSection />);

    expect(
      screen.getByRole("heading", { name: "Sell the vision before you ask for the form" })
    ).toBeInTheDocument();
    expect(screen.getByText("Ada Martinez")).toBeInTheDocument();
  });

  it("supports selecting a vision point", async () => {
    const user = userEvent.setup();
    render(<VisionSection />);

    const point = screen.getByRole("button", { name: /Proof must be felt, not buried/i });
    await user.click(point);

    expect(point).toHaveClass("border-primary/55");
  });
});
