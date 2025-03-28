import React from "react";
const TimelineEntry = ({ date, imageName, message }) => {
  return (
    <div style={stylesTimeLine.entry}>
      <p style={stylesTimeLine.date}>{date}</p>
      <img src={""} alt={imageName} />;
      <p style={stylesTimeLine.message}>{message}</p>
    </div>
  );
};

const stylesTimeLine = {
  entry: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderBottom: "2px solid #ddd",
    maxWidth: "400px",
    margin: "auto",
    textAlign: "center",
  },
  date: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#555",
  },
  image: {
    width: "100%",
    maxWidth: "300px",
    borderRadius: "10px",
    margin: "10px 0",
  },
  message: {
    fontSize: "16px",
    color: "#333",
  },
};

export default TimelineEntry;
