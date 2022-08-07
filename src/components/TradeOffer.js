import React from "react";
import { Button, Card, Form } from "react-bootstrap";
export function TradeOffer({ details, numbers }) {
  return (
    <>
      <h6 className="fw-bolder">TRADE OFFER</h6>
      <Card body>
        <div className="row">
          <p className="col-sm-4 my-auto mb-2 fw-bold">Participant Principal</p>
          <div className="col-sm-8">
            <Form.Select aria-label="Default select example" className="col">
              <option>Select Principal</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
        </div>
      </Card>

      <Card className="my-2">
        <Card.Header>
          <h6 className="fw-bolder text-center mb-0">DIRECT SETTLEMENT</h6>
        </Card.Header>
        <Card.Body>
          <ul>
            <li>
              Identities of the seller and buyer will be revealed AFTER a Price
              Match / Price Consensus
            </li>
            <li>
              Transfer of the loan and payment settlement will be managed
              DIRECTLY between Seller and Buyer
            </li>
          </ul>
        </Card.Body>
      </Card>

      <Card className="my-2" body>
        <div className="mb-4">
          {details.map(({ label, value }) => (
            <div className="row my-2" key={value}>
              <p className="col-sm-4 my-auto fw-semibold">{label}</p>
              <p className="col-sm-8 my-auto">{value}</p>
            </div>
          ))}
        </div>

        {numbers.map(({ label, value }, i) => (
          <div className="row my-2" key={i}>
            <p
              className={`col-sm-4 my-auto fw-semibold ${
                i === 1 || i === 2 ? "ps-sm-4" : null
              }`}
            >
              {label}
            </p>
            <p className="col-sm-8 my-auto">{value}</p>
          </div>
        ))}
      </Card>
      <Card className="my-2" body>
        <div className="row my-2">
          <p className="col-sm-4 fw-semibold my-auto">Amount to Buy</p>
          <p className="col-sm-2 my-auto">USD</p>
          <div className="col-sm-6">
            <input
              type="number"
              className="form-control col-sm-8"
              placeholder=""
            />
          </div>
        </div>
        <div className="row my-2">
          <p className="col-sm-4 fw-semibold my-auto">Bid Price</p>
          <div className="d-flex col-sm-6 align-items-baseline">
            <div className="">
              <input
                type="number"
                className="form-control col-sm-8"
                placeholder=""
              />
            </div>
            <p className="fw-bolder">.</p>
            <div className="">
              <input
                type="number"
                className="form-control col-sm-8"
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row my-2">
          <p className="col-sm-4 fw-semibold my-auto">Remarks</p>
          <div className="col-sm-8">
            <Form.Select aria-label="Default select example" className="col">
              <option>Response Text</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
        </div>

        <Button variant="secondary" className="w-100 mt-3 fw-bold">
          Place Order
        </Button>
      </Card>
    </>
  );
}
