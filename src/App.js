import { useState } from "react";
import { Nav, Button } from "react-bootstrap";

import CustomModal from "./components/CustomModal";
import Content from "./components/Content";

import "./App.css";

const SAMPLE_DATA = [
  {
    id: "253",
    title: "A3 Creating for T1 (cloned from 192)",
    facilityAmount: 930000000,
    facilityType: "TLF",
    maturityDate: new Date(Date.now()).toLocaleDateString(),
    margin: "LIBOR 0.0% p.a.",
  },
  {
    id: "354",
    title: "ST - Syndication something here",
    facilityAmount: 930000000,
    facilityType: "TLF",
    maturityDate: new Date(Date.now()).toLocaleDateString(),
    margin: "LIBOR 0.0% p.a.",
  },
];

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <p>Privex Homework</p>
        <Button onClick={() => setShowModal(true)}>Homework 1</Button>
      </header>

      <CustomModal showModal={showModal} onHide={() => setShowModal(false)}>
        <div className="w-100 h-100">
          <Nav
            variant="tabs"
            defaultActiveKey="0"
            onSelect={(selectedKey) => setSelectedIndex(selectedKey)}
          >
            {SAMPLE_DATA.map((data, i) => {
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
          <Content data={SAMPLE_DATA[selectedIndex]} />
        </div>
      </CustomModal>
    </div>
  );
}

export default App;
