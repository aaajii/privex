import React from "react";
import { Alert, Table } from "react-bootstrap";
export function NegotiationLog() {
  return (
    <>
      <h6 className="fw-bolder">NEGOTIATION LOG</h6>
      <Alert variant="primary">
        Current negotiations that are still open and require your further review
        and action
      </Alert>

      <Table striped bordered hover>
        <thead className="table-primary text-center">
          <tr>
            <th className="align-middle">clock_icon</th>
            <th className="align-middle">Time</th>
            <th className="align-middle">Bid</th>
            <th className="align-middle">Offer</th>
            <th className="align-middle">Purchase Amt</th>
            <th className="align-middle">
              Remarks / Indicative Application Date
            </th>
          </tr>
        </thead>
        <tbody>
          {/* LOOP */}
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
