import React, { useEffect } from "react";
import Footer from "../../components/footer"; // Importe o Footer

const Home = () => {
  useEffect(() => {
    const items = document.querySelectorAll('[data-carousel-item]');
    const prevButton = document.querySelector('[data-carousel-prev]');
    const nextButton = document.querySelector('[data-carousel-next]');
    let currentItem = 0;

    const showNextItem = () => {
      items[currentItem].classList.add("hidden");
      currentItem = (currentItem + 1) % items.length;
      items[currentItem].classList.remove("hidden");
    };

    const showPrevItem = () => {
      items[currentItem].classList.add("hidden");
      currentItem = (currentItem - 1 + items.length) % items.length; 
      items[currentItem].classList.remove("hidden");
    };

    if (prevButton) prevButton.addEventListener('click', showPrevItem);
    if (nextButton) nextButton.addEventListener('click', showNextItem);

    items[currentItem].classList.remove("hidden");

    return () => {
      if (prevButton) prevButton.removeEventListener('click', showPrevItem);
      if (nextButton) nextButton.removeEventListener('click', showNextItem);
    };
  }, []);

  return (
    <div>
      <div id="animation-carousel" className="relative w-full fixed top-0 left-0 z-100" data-carousel="static">
        <div className="relative h-56 overflow-hidden md:h-96">
          {/* Item 1 */}
          <div className="hidden duration-200 ease-in-out transform transition-all" data-carousel-item>
            <img
              src="/images/img1.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Imagem 1"
            />
          </div>
          {/* Item 2 */}
          <div className="hidden duration-200 ease-linear" data-carousel-item>
            <img
              src="/images/img2.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Imagem 2"
            />
          </div>
          {/* Item 3 */}
          <div className="hidden duration-200 ease-linear" data-carousel-item>
            <img
              src="/images/img3.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Imagem 3"
            />
          </div>
        </div>

        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 bg-white-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-100/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-100 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 white:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-100/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-100 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
