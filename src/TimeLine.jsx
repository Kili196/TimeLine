import React from "react";
import TimelineEntry from "./TimelineEntry";

const Timeline = ({ entries }) => {
  return (
    <div style={styles.timeline}>
      <h2 style={styles.title}>Our Journey Together</h2>
      {entries.map((entry, index) => (
        <TimelineEntry
          key={index}
          date={entry.date}
          image={entry.image}
          message={entry.message}
        />
      ))}
    </div>
  );
};

const styles = {
  timeline: {
    padding: "20px",
    backgroundColor: "#fce4ec",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
    color: "#d81b60",
  },
};

export default Timeline;
