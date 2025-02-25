import React from "react";
import { studentObj } from "../Data/students";

export default function StudentsItem() {
  return(
    <table className="students__tabel">
      <thead className="students__thead">
        <tr className="students__tr">
          <th className="students__th"><button className="students__thbtn" id="namebtn"># </button></th>
          <th className="students__th"><button className="students__thbtn" id="mailbtn">Ismi</button></th>
          <th className="students__th"><button className="students__thbtn" id="numbtn">Guruh </button></th>
          <th className="students__th"><button className="students__thbtn" id="depabtn">Telefon Raqam</button></th>
          <th className="students__th"><button className="students__thbtn">Guruhlar </button></th>
          <th className="students__th"><button className="students__thbtn">Vaqt </button></th>
          <th className="students__th"><button className="students__thbtn">holati </button></th>
          <th className="students__th"><button className="students__thbtn">Hisob holati </button></th>
          <th className="students__th"><button className="students__thbtn"></button></th>
        </tr>
      </thead>
      <tbody className="students__body" id="tbody">
        {
          studentObj.map((item, key) => {
            return(
              <tr key={key+782} className="students__tr">
                <td className="students__td">{item.id}</td>
                <td className="students__td">
                  <div className="d-flex align-items-center">
                    <div className="students__avabox">
                      <img className="students__ava" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY7NvxS8KHkHlLCkE-fGBMRgiXrSjgrNHWj5gxrOAVQ41-ZwwQ3Gu3n8z0hNiqAyfUbA8&usqp=CAU" alt="user" />
                    </div>
                    <h3 className="students__names">{item.name}</h3>
                  </div>
                  </td>
                <td className="students__td">Guruh #{item.groupNum}</td>
                <td className="students__td">{item.number}</td>
                <td className="students__td">{item.group.length} ta</td>
                <td className="students__td">Yanvar 26, 2020</td>
                <td className="students__td">Muzlatilgan</td>
                <td className="students__td">UZS 100,000</td>

                <td className="students__td">
                  <button className="students__error"><i class='bx bxs-error-circle'></i></button>
                  <button className="students__edit"><i className="bx bxs-pencil" /></button>
                  <button className="students__xbtn"><i className="bx bx-x" /></button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}