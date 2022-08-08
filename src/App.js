import { useEffect, useState } from "react";
import { Nav, Button } from "react-bootstrap";
import axios from "axios";

import CustomModal from "./components/CustomModal";
import Content from "./components/Content";

import "./App.css";
import TrancheInfo from "./components/TrancheInfo";
import { fetchData } from "./axios/queries";

// const SAMPLE_DATA = [
//   {
//     id: "253",
//     title: "A3 Creating for T1 (cloned from 192)",
//     facilityAmount: 930000000,
//     facilityType: "TLF",
//     maturityDate: new Date(Date.now()).toLocaleDateString(),
//     margin: "LIBOR 0.0% p.a.",
//   },
//   {
//     id: "354",
//     title: "ST - Syndication something here",
//     facilityAmount: 930000000,
//     facilityType: "TLF",
//     maturityDate: new Date(Date.now()).toLocaleDateString(),
//     margin: "LIBOR 0.0% p.a.",
//   },
// ];

function App() {
  const [showTabbedModal, setShowModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sampleData, setSampleData] = useState([]);

  useEffect(() => {
    async function getData() {
      setSampleData(await fetchData());
    }

    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Privex Homework</p>
        <Button onClick={() => setShowModal(true)}>Homework 1</Button>
        <Button
          onClick={() => setShowFormModal(true)}
          className="mt-2"
          variant="secondary"
        >
          Homework 2
        </Button>
      </header>

      <CustomModal
        showModal={showTabbedModal}
        onHide={() => setShowModal(false)}
      >
        <div className="w-100 h-100">
          <Nav
            variant="tabs"
            defaultActiveKey="0"
            onSelect={(selectedKey) => setSelectedIndex(selectedKey)}
          >
            {sampleData.length &&
              sampleData.map((data, i) => {
                const { id, title } = data;
                return (
                  <Nav.Item>
                    <Nav.Link eventKey={i}>
                      <h6 className="text-truncate fw-semibold">
                        {id} - {title}
                      </h6>
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
          </Nav>
          <Content data={sampleData ? sampleData[selectedIndex] : {}} />
        </div>
      </CustomModal>

      <CustomModal
        showModal={showFormModal}
        onHide={() => setShowFormModal(false)}
        className="bg-secondary"
      >
        <TrancheInfo />
      </CustomModal>
    </div>
  );
}

export default App;
