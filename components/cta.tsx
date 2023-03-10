import React from "react";
import Container from "./container";

import CustomerSupport from "./icons/CustomerSupport";

export default function Cta() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ante cualquier tipo de consulta llama
          </h2>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="tel:+5491151653820"
            target="_blank"
            rel="noreferrer noopener"
            className="flex flex-row py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            <span className="flex w-7 h-7">
              <CustomerSupport />
            </span>
            +54 9 11 5165-3820
          </a>
        </div>
      </div>
    </Container>
  );
}
