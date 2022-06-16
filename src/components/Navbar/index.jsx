import React from "react";
import Category from "./Category";

export default function Navbar() {
  return(
    <section className="navbarr flex-column">
      <div className="navbarr__header">
        <h1 className="navbarr__title">Fajj Education</h1>
      </div>
      <ul className="navbarr__list">
        <Category />
      </ul>
    </section>
  )
}