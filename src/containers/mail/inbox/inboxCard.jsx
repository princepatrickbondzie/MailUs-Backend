import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const InboxCard = ({ inbox }) => {
  const [raed, setRead] = useState("false");

  const handleClick = (e) => {
    setRead("true");
  };

  return (
    <div>
      {inbox.read === "false" ? (
        <Link to={`/${inbox._id}`} onClick={handleClick}>
          <section id="inbox-tab">
            <h4 style={{ width: "20vw" }}>{inbox.title}</h4>
            <p
              style={{
                width: "57vw",
                paddingLeft: "10px",
              }}
            >
              {inbox.body}
            </p>
          </section>
        </Link>
      ) : (
        <Link to={`/${inbox._id}`}>
          <section id="inbox-read" className="inbox-tab">
            <h4 style={{ width: "20vw" }}>{inbox.title}</h4>
            <p
              style={{
                width: "57vw",
                paddingLeft: "10px",
              }}
            >
              {inbox.body}
            </p>
          </section>
        </Link>
      )}
    </div>
  );
};

export default InboxCard;
