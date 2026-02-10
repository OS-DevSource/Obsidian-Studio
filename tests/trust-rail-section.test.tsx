import { render, screen } from "@testing-library/react";
import { TrustRailSection } from "@/components/trust-rail-section";

describe("TrustRailSection", () => {
  it("renders trust headline and placeholder logos", () => {
    render(<TrustRailSection />);

    expect(screen.getByText("Built for growth-focused local teams")).toBeInTheDocument();
    expect(screen.getByText("Northwind HVAC")).toBeInTheDocument();
    expect(screen.getByText("Atlas Build")).toBeInTheDocument();
  });
});
