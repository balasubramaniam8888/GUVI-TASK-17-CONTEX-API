/** @format */

import React, { useState } from "react";
import { useContext } from "react";
import { DataContex } from "./contexdata";

function Section() {
  const [Price1, SetPrice1] = useState(0);
  const [Price2, SetPrice2] = useState(0);
  const [Price3, SetPrice3] = useState(0);
  const [Price4, SetPrice4] = useState(0);
  const [Price5, SetPrice5] = useState(0);

  let state = useContext(DataContex);
  console.log(state);

  return (
    <div className="container ">
      <div className="row  ">
        {/* CONTAINER 1 */}

        <div className="col col-md col-sm col-lg border mt-5 d-flex justify-content-evenly gap-2 bg-secondary-subtle">
          {/*(1)CARD-1 */}

          <div
            className="card mt-3 mb-3 p-3"
            style={{ width: "30rem", height: "43rem" }}
          >
            <img
              src={state.Data[0].thumbnail}
              className="border border-black card-img-top"
              alt="img-iphone9"
              style={{ height: "250px" }}
            />
            <hr />
            <span className="cardtitle">
              <b>{state.Data[0].title}</b>
            </span>
            <br />
            <span>
              <b>Description:</b>
              <br />
              {state.Data[0].description}
            </span>
            <br />
            <span>
              <b>Stock:</b> {state.Data[0].stock} nos
            </span>

            <hr />

            {/* CARD PRICE STOCK SECTION */}
            <div className="cardtext d-flex justify-content-between ">
              <div className="p-2">Price:${state.Data[0].price}</div>
              <div className="p-2">
                <label>Quantity: </label>
                <select
                  // onChange function for assign setting states //
                  onChange={(e) => {
                    let quantity1 = e.target.value;
                    let value1 = state.Data[0].price;
                    SetPrice1(quantity1 * value1);
                  }}
                  name="selectbutton"
                  id="selectbutton"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <hr />
            {/* total shipping deatils section */}
            <div className=" card-text">
              <div className=" d-flex justify-content-between">
                <span>SUBTOTAL</span>
                <span>${state.Data[0].price}</span>
              </div>
              <div className=" d-flex justify-content-between">
                <span>SHIPPING</span>
                <span>FREE</span>
              </div>
            </div>
            <hr />
            {/* Total Section */}
            <div className="cardfooter d-flex justify-content-between">
              <span>TOTAL</span>
              <span>${Price1}</span>
            </div>
          </div>

          {/* CARD-1 */}
          {/*(1)CARD 2  */}
          <div
            className="card mt-3 mb-3 p-3"
            style={{ width: "30rem", height: "43rem" }}
          >
            <img
              src={state.Data[1].thumbnail}
              className="border border-black card-img-top"
              alt="img-iPhone X"
              style={{ height: "250px" }}
            />
            <hr />
            <span className="cardtitle">
              <b>{state.Data[1].title}</b>
            </span>
            <br />
            <span>
              <b>Description:</b>
              <br />
              {state.Data[1].description}
            </span>
            <br />
            <span>
              <b>Stock:</b> {state.Data[1].stock} nos
            </span>
            <hr />
            {/* CARD PRICE STOCK SECTION */}
            <div className="cardtext d-flex justify-content-between">
              <div className="p-2">Price:${state.Data[1].price}</div>
              <div className="p-2">
                <label htmlFor="">Quantity: </label>
                <select
                  // onChange function for assign setting states //
                  onChange={(e) => {
                    let quantity2 = e.target.value;
                    let value2 = state.Data[1].price;

                    SetPrice2(quantity2 * value2);
                  }}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <hr />
            {/* total shipping deatils section */}
            <div className=" card-text">
              <div className=" d-flex justify-content-between">
                <span>SUBTOTAL</span>
                <span>${state.Data[1].price}</span>
              </div>
              <div className=" d-flex justify-content-between">
                <span>SHIPPING</span>
                <span>FREE</span>
              </div>
            </div>
            <hr />
            {/* Total Section */}
            <div className="cardfooter d-flex justify-content-between">
              <span>TOTAL</span>
              <span>${Price2}</span>
            </div>
          </div>
        </div>

        {/* CONTAINER 1 */}

        {/* CONTAINER 2 */}
        {/*(2)CARD-1  */}

        <div className="col border mt-2 d-flex justify-content-evenly gap-2  bg-primary-subtle">
          <div
            className="card mt-3 p-3"
            style={{ width: "30rem", height: "43rem" }}
          >
            <img
              src={state.Data[2].thumbnail}
              className="border border-black card-img-top"
              alt="img-Samsung Universe 9"
              style={{ height: "250px" }}
            />
            <hr />
            <span className="cardtitle">
              <b>{state.Data[2].title}</b>
            </span>
            <br />
            <span>
              <b>Description:</b>
              <br />
              {state.Data[2].description}
            </span>
            <br />
            <span>
              <b>Stock:</b> {state.Data[2].stock} nos
            </span>
            <hr />
            {/* CARD PRICE STOCK SECTION */}
            <div className="cardtext d-flex justify-content-between">
              <div className="p-2">Price:${state.Data[2].price}</div>
              <div className="p-2">
                <label>Quantity:</label>
                <select
                  // onChange function for assign setting states //
                  onChange={(e) => {
                    let quantity3 = e.target.value;
                    let value3 = state.Data[2].price;
                    SetPrice3(quantity3 * value3);
                  }}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <hr />
            {/* total shipping deatils section */}
            <div className=" card-text">
              <div className=" d-flex justify-content-between">
                <span>SUBTOTAL</span>
                <span>${state.Data[2].price}</span>
              </div>
              <div className=" d-flex justify-content-between">
                <span>SHIPPING</span>
                <span>FREE</span>
              </div>
            </div>
            <hr />
            {/* Total Section */}
            <div className="cardfooter d-flex justify-content-between ">
              <span>TOTAL</span>
              <span>${Price3}</span>
            </div>
          </div>
          {/* (2)CARD-2 */}
          <div
            className="card mt-3 mb-3 p-3"
            style={{ width: "30rem", height: "43rem" }}
          >
            <img
              src={state.Data[3].thumbnail}
              className=" card-img-top border border-black"
              alt="img-OPPOF19"
              style={{ height: "250px" }}
            />
            <hr />
            <span className="cardtitle">
              <b>{state.Data[3].title}</b>
            </span>
            <br />
            <span>
              <b>Description:</b>
              <br />
              {state.Data[3].description}
            </span>
            <br />
            <span>
              <b>Stock:</b> {state.Data[3].stock} nos
            </span>
            <hr />
            {/* CARD PRICE STOCK SECTION */}
            <div className="cardtext d-flex justify-content-between">
              <div className="p-2">Price:${state.Data[3].price}</div>
              <div className="p-2">
                <label>Quantity:</label>
                <select
                  // onChange function for assign setting states //
                  onChange={(e) => {
                    let quantity4 = e.target.value;
                    let value4 = state.Data[3].price;

                    SetPrice4(quantity4 * value4);
                  }}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <hr />
            {/* total shipping deatils section */}
            <div className=" card-text">
              <div className=" d-flex justify-content-between">
                <span>SUBTOTAL</span>
                <span>${state.Data[3].price}</span>
              </div>
              <div className=" d-flex justify-content-between">
                <span>SHIPPING</span>
                <span>FREE</span>
              </div>
            </div>
            <hr />
            {/* Total Section */}
            <div className="cardfooter d-flex justify-content-between ">
              <span>TOTAL</span>
              <span>${Price4}</span>
            </div>
          </div>
        </div>
        {/* CONTAINER 2 */}

        {/* CONTAINER 3 */}
        {/* (3) CARD 1 */}

        <div className="col border mt-2 d-flex justify-content-center bg-danger-subtle">
          <div
            className="card mt-3 mb-2 p-3  m-5"
            style={{ width: "30rem", height: "45rem" }}
          >
            <img
              src={state.Data[4].thumbnail}
              className="card-img-top border border-black"
              alt="img-Huawei P30"
              style={{ height: "250px" }}
            />
            <hr />
            <span className="cardtitle">
              <b>{state.Data[4].title}</b>
            </span>
            <br />
            <span>
              <b>Description:</b>
              <br />
              {state.Data[4].description}
            </span>
            <br />
            <span>
              <b>Stock:</b> {state.Data[4].stock} nos
            </span>
            <hr />
            {/* CARD PRICE STOCK SECTION */}
            <div className="cardtext d-flex justify-content-between">
              <div className="p-2">Price:${state.Data[4].price}</div>
              <div className="p-2 ">
                <label htmlFor="">Quantity:</label>
                <select
                  // onChange function for assign setting states //
                  onChange={(e) => {
                    let quantity5 = e.target.value;
                    let value5 = state.Data[4].price;
                    SetPrice5(quantity5 * value5);
                  }}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <hr />
            {/* total shipping deatils section */}
            <div className=" card-text">
              <div className=" d-flex justify-content-between">
                <span>SUBTOTAL</span>
                <span>${state.Data[4].price}</span>
              </div>
              <div className=" d-flex justify-content-between">
                <span>SHIPPING</span>
                <span>FREE</span>
              </div>
            </div>
            <hr />
            {/* Total Section */}
            <div className="cardfooter d-flex justify-content-between">
              <span>TOTAL</span>
              <span>${Price5}</span>
            </div>
          </div>
        </div>
        {/* CONTAINER 3 */}
      </div>
    </div>
  );
}

export default Section;
