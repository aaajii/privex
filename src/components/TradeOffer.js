import React from "react";
import { Formik } from "formik";
import { Button, Card } from "react-bootstrap";
import Currency from "./Forms/Currency";
import Dropdown from "./Forms/Dropdown";

export function TradeOffer({ details, numbers }) {
  return (
    <>
      <h6 className="fw-bolder">TRADE OFFER</h6>
      <Card body>
        <div className="row">
          <p className="col-sm-4 my-auto mb-2 fw-bold">Participant Principal</p>
          <div className="col-sm-8">
            <Dropdown
              options={[
                { value: 1, label: "One" },
                { value: 2, label: "Two" },
                { value: 3, label: "Three" },
              ]}
              defaultOption={{ value: null, label: "Select Principal" }}
            />
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
          {details.map(({ label, value }, i) => (
            <div className="row my-2" key={i}>
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
        <Formik>
          <>
            <div className="row my-2">
              <p className="col-sm-4 fw-semibold my-auto">Amount to Buy</p>
              <div className="col-sm-8">
                <Currency unit="USD" className="form-control" />
              </div>
            </div>
            <div className="row my-2">
              <p className="col-sm-4 fw-semibold my-auto">Bid Price</p>

              <div className={"d-flex col-sm-6 align-items-baseline"}>
                <div className="w-25">
                  <input type="number" className="form-control col-sm-8" />
                </div>
                <p className="fw-bolder">•</p>
                <div className="w-25">
                  <input type="number" className="form-control col-sm-8" />
                </div>
              </div>
            </div>
            <div className="row my-2">
              <p className="col-sm-4 fw-semibold my-auto">Remarks</p>
              <div className="col-sm-8">
                <Dropdown
                  options={[
                    { value: "A", label: "Option A" },
                    { value: "B", label: "Option B" },
                    { value: "C", label: "Option C" },
                  ]}
                  defaultOption={{ value: null, label: "" }}
                />
              </div>
            </div>
          </>
        </Formik>

        <Button variant="secondary" className="w-100 mt-3 fw-bold">
          Place Order
        </Button>
      </Card>
    </>
  );
}
