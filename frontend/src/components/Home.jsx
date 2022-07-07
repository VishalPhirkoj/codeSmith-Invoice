import React from "react";
import { useState } from "react";

const Home = () => {
 
  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" id="exampleModalLabel">
                New Customer
              </h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid ">
                <div className="form  p-3">
                  <div className="row mb-3">
                    <div className="col">
                      <label htmlFor="customerName" className="form-label">
                        Customer Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="customerName"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="customerPhone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="customerPhone"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <label htmlFor="customerAddr" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="customerAddr"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 ">
                    <div className="my-2 d-flex">
                      <div className="btn btn-primary btn-sm me-2">Add</div>
                      <div className="btn btn-sm me-2">Clear</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
      {/* Modal */}
      <div className="container bg-gradient">
        <div className="row">
          <div className="col-sm-12">
            <form className="form mt-2">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-4   mb-3">
                    <label htmlFor="invoiceNo" className="form-label">
                      Invoice No
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="invoiceNo"
                    />
                  </div>
                  <div className="col-sm-12 col-md-4   mb-3">
                    <label htmlFor="invoiceDate" className="form-label">
                      Invoice Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="invoiceDate"
                    />
                  </div>
                  <div className="col-sm-12 col-md-4   mb-3">
                    <label htmlFor="invoiceDate" className="form-label">
                      Invoice Date
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        name="customer"
                        id="customer"
                        className="form-control"
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="btnCustomer"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Customer
                      </button>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4   mb-3">
                    <label htmlFor="deliveryType" className="form-label">
                      Delivery Type
                    </label>
                    <select
                      id="deliveryType"
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="1">Hand to Hand</option>
                      <option value="2">Home</option>
                    </select>
                  </div>
                  <div className="col-sm-12 col-md-4   mb-3">
                    <label htmlFor="invoiceDate" className="form-label">
                      Product Name or code
                    </label>
                    <input
                      type="search"
                      className="form-control"
                      id="invoiceDate"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* product table */}
        <div className="row">
          <div className="col-sm-12">
            <div className="container">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Price</th>
                    <th scope="col">Sub Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">x</th>
                    <td>
                      <label htmlFor="">ProductName</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="txtQty"
                        id="txtQty"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="txtPice"
                        id="txtPice"
                        disabled
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="txtSubTotal"
                        id="txtSubTota"
                        disabled
                      />
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan="4">Total</th>
                    <th colSpan="5">
                      <input
                        type="text"
                        className="form-control"
                        name="txtTotal"
                        id="txtTotal"
                        disabled
                      />
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
        {/* product table */}
      </div>
    </>
  );
};

export default Home;
