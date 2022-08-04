import { NegotiationLog } from "./NegotiationLog";
import { TradeOffer } from "./TradeOffer";
import accounting from "accounting";

function Content({ data }) {
  const {
    title,
    facilityAmount,
    facilityType,
    maturityDate,
    margin,
    isPermitted,
    minimumSell,
    thereafter,
    sellAmount,
    offerPrice,
  } = data;
  const SUMMARY = [
    {
      label: "Borrower / Guarantor",
      value: title,
    },
    {
      label: "Facility Amount",
      value: accounting.formatMoney(facilityAmount, "USD"),
    },
    {
      label: "Facility Type",
      value: facilityType,
    },
    {
      label: "Maturity Date",
      value: maturityDate,
    },
    {
      label: "Margin",
      value: margin,
    },
  ];

  const SUMMARY2 = [
    {
      label: "Partial Sale Permitted",
      value: isPermitted ? "Yes" : "No",
    },
    {
      label: "Minimum Amount to Sell",
      value: accounting.formatMoney(minimumSell, "USD"),
    },
    {
      label: "Multiple Thereafter",
      value: accounting.formatMoney(thereafter, "USD"),
    },
    {
      label: "Amount to Sell",
      value: accounting.formatMoney(sellAmount, "USD"),
    },
    {
      label: "Offer Price",
      value: `${offerPrice}%`,
    },
  ];

  return (
    <div className="w-100 h-100 d-sm-flex">
      <div className="w-sm-50 p-4">
        <TradeOffer details={SUMMARY} numbers={SUMMARY2} />
      </div>

      <div className="w-sm-50 p-4">
        <NegotiationLog />
      </div>
    </div>
  );
}

export default Content;
