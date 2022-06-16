import React from "react";

export default function Header(){
  return(
    <section className="header d-flex justify-content-between align-items-center">

      <form className="header__form d-flex" action="">
        <input className="header__input" placeholder="Search transactions, insvoices or help" type="text" />
        <i className='header__seaicon bx bx-search'></i>
      </form>

      <div className="d-flex justify-content-between align-items-center">
        <button className="header__btnbell"><i className='bx bxs-bell' ></i></button>
        <div className="header__box d-flex justify-content-between align-items-center">
          <p className="header__name">User Name  <i className='header__icondw bx bxs-chevron-down'></i></p>
        </div>
        <div className="header__avabox">
          <img className="header__ava" src="https://picsum.photos/id/48/70" alt="user" />
        </div>
      </div>
    </section>
  )
}