import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/esm/Button";
import "./tabsnew.css";
const TabsNew = () => {
  const [key, setKey] = useState("engagments");
  const [indKey, setIndKey] = useState(0);
  return (
    <>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        activeKey={key}
        onSelect={(k) => {
          setKey(k);
          switch (k) {
            case "engagments":
              setIndKey(0);
              break;
            case "trainings":
              setIndKey(1);
              break;
            case "tasks":
              setIndKey(2);
              break;
            case "bundels":
              setIndKey(3);
              break;
            default:
              break;
          }
        }}
        className="mb-3"
      >
        <Tab eventKey="engagments" title="Enagagments">
          <div className="content">
            Enagagments
            <Button variant="primary">Button #1</Button>
          </div>
        </Tab>
        <Tab eventKey="trainings" title="Trainings">
          <div className="content">Trainings</div>
        </Tab>
        <Tab eventKey="tasks" title="Tasks">
          <div className="content">Tasks</div>
        </Tab>
        <Tab eventKey="bundels" title="Bundles">
          <div className="content">Bundles</div>
        </Tab>
      </Tabs>
      <div className="tab-indicator">
        <div
          style={{ left: `calc(25% * ${indKey})` }}
          className="indicator"
        ></div>
      </div>
    </>
  );
};

export default TabsNew;
