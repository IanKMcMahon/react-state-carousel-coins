import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";


it("works when you click on the arrows", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

    // move backward in the carousel
    const leftArrow = container.querySelector(".bi-arrow-left-circle");
    fireEvent.click(leftArrow);
   // expect the first image to show, but not the second
   expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

});

it("hides the left arrow when on the first image", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // When on the first image, the left arrow should not be visible
  expect(container.querySelector(".bi-arrow-left-circle")).not.toBeInTheDocument();
});

it("hides the right arrow when on the last image", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // When on the last image, the right arrow should not be visible
  // Move to the last image
  fireEvent.click(container.querySelector(".bi-arrow-right-circle"));
  fireEvent.click(container.querySelector(".bi-arrow-right-circle"));
  expect(container.querySelector(".bi-arrow-right-circle")).not.toBeInTheDocument();
});

// Smoke Test
it("renders without crashing", function() {
    render(<Carousel photos={TEST_IMAGES} title="test"/>);
});

//Snapshot Test

it("matches snapshot", function() {
  const {asFragment} = render(<Carousel photos={TEST_IMAGES} title="test" />);
  expect(asFragment()).toMatchSnapshot();
});