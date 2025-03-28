import React from "react";
import Timeline from "./TimeLine";

import crazy from "./assets/crazy.jpeg";
import crazy2 from "./assets/crazyy2.jpeg";
import jackcuddling from "./assets/jackcuddling.jpeg";
import meeting from "./assets/meeting.jpeg";
import meeting2 from "./assets/meeting2.jpeg";
import moresilly from "./assets/moresilly.jpeg";
import moresilly2 from "./assets/moresilly2.jpeg";
import nationalbf from "./assets/nationalbf.jpeg";
import imissit from "./assets/imissit.jpeg";
import insecure from "./assets/insecure.jpeg";
import roblox from "./assets/roblox.jpeg";
import sad from "./assets/sad.jpeg";
import scary from "./assets/scary.jpeg";
import silly from "./assets/silly.jpeg";
import silly2 from "./assets/silly2.jpeg";
import silly3 from "./assets/silly3.jpeg";
import silly4 from "./assets/silly4.jpeg";
import silly6 from "./assets/silly6.jpeg";
import sillymore4 from "./assets/sillymore4.jpeg";
import strawberry from "./assets/strawberry.jpeg";
import susie from "./assets/susie.jpeg";
import today from "./assets/today.jpeg";
import young from "./assets/young.jpeg";
import TimelineEntry from "./TimelineEntry";

function App() {
  const memories = [
    {
      date: "July 29th 2023",
      message:
        "Thats when we met, when we added each other for the first time. Whcih felt so amazing and was so magical",
    },
    {
      date: "September 22th 2023",
      message:
        "Thats when we became girlfriend and boyfriend and the best time of my life started, which still lasts because you are still in my life",
    },
    {
      date: "October 4th 2023",
      image: "",
      message: "Some many many silly moments",
    },
  ];

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

  return (
    <div>
      <div style={styles.timeline}>
        <h2 style={styles.title}>Our Journey Together</h2>
        <div style={stylesTimeLine.entry}>
          <p style={stylesTimeLine.date}>{"July 28th 2023"}</p>

          <p style={stylesTimeLine.message}>
            {
              "Thats when we met, when we added each other for the first time. Whcih felt so amazing and was so magical"
            }
          </p>
        </div>

        <div style={stylesTimeLine.entry}>
          <p style={stylesTimeLine.date}>{"September 22th 2023"}</p>

          <p style={stylesTimeLine.message}>
            {
              "Thats when we met, when we added each other for the first time. Whcih felt so amazing and was so magical. You have helped me so much. YOu have helped me out of my mental health issues and safed and change my life"
            }
          </p>
        </div>

        <div style={stylesTimeLine.entry}>
          <p style={stylesTimeLine.date}>{"October 4th 2023"}</p>

          <p style={stylesTimeLine.message}>{"Many many silly moments."}</p>
          <img src={silly} width={150} />
          <img src={crazy} width={150} />
          <img src={silly2} width={150} />
        </div>
        <div style={stylesTimeLine.entry}>
          <p style={stylesTimeLine.date}>{"Summer 2024"}</p>

          <p style={stylesTimeLine.message}>
            {
              "We have been so silly with your helmet. That was one of our favourite moments"
            }
          </p>
          <img src={silly4} width={150} />
        </div>
        <div style={stylesTimeLine.entry}>
          <p style={stylesTimeLine.date}>{"Summer 2024"}</p>

          <p style={stylesTimeLine.message}>
            {
              "It was a very very hard summer for me. I lost my cats, my parents broke up I was a disaster. You were there and helped me through it. You supported me I will be forever grateful. That was my last picture I took with susie i sent it to you. She died 3 days later."
            }
          </p>
          <img src={susie} width={150} />
        </div>
        <div style={stylesTimeLine.entry}>
          <p style={stylesTimeLine.date}>{"Summer 2023"}</p>

          <p style={stylesTimeLine.message}>
            {
              "We both have been really insecure so we started sending selfies with the strawberrie filter and it became our thing"
            }
          </p>
          <img src={strawberry} width={150} />
        </div>
        <div style={stylesTimeLine.entry}>
          <p style={stylesTimeLine.date}>{"Christmas 2023"}</p>

          <p style={stylesTimeLine.message}>
            {
              "I have been a weirdo but I have still changed and aged a little bit... lol"
            }
          </p>
          <img src={young} width={150} />
        </div>
        <div style={stylesTimeLine.entry}>
          <p style={stylesTimeLine.date}>{"Summer 2024"}</p>

          <p style={stylesTimeLine.message}>
            {
              "We have been calling and you took a picture of me cuddling with Jack"
            }
          </p>
          <img src={jackcuddling} width={150} />
        </div>

        <div style={stylesTimeLine.entry}>
          <p style={stylesTimeLine.date}>{"Summer 2025"}</p>

          <p style={stylesTimeLine.message}>
            {
              "We have been togetehr for over one year and it was amazing. Many many more silly moments emerged and I have been the happiest I have ever been. Little did you know I wanted to impress you and wanted to make you laiugh thats why you I did it and painted me like that."
            }
          </p>
          <img src={silly6} width={150} />
          <img src={silly3} width={150} />
        </div>

        <div style={stylesTimeLine.entry}>
          <p style={stylesTimeLine.date}>{"Summer 2025, 27th Septmer"}</p>

          <p style={stylesTimeLine.message}>
            {
              "After one year we proved everyone and ourselves wrong. We did it and we met. It has been amazing. I enjoyed this moment so much and I am working my ass off to make it happen again"
            }
          </p>
          <img src={meeting} width={150} />
          <img src={meeting2} width={150} />
        </div>

        <div style={stylesTimeLine.entry}>
          <p style={stylesTimeLine.date}>
            {"You have been so scared of me but I loved it so much"}
          </p>

          <img src={scary} width={150} />
        </div>
        <div style={stylesTimeLine.entry}>
          <p style={stylesTimeLine.date}>
            {"Our lovely snaps and I just wanna go back in time (I safed them)"}
          </p>

          <img src={imissit} width={150} />
          <img src={nationalbf} width={150} />
        </div>
        <div style={stylesTimeLine.entry}>
          <p style={stylesTimeLine.date}>
            {"Today I made a roblox skin for you it looks so shit"}
          </p>

          <img src={roblox} width={400} />
        </div>
        <div style={stylesTimeLine.entry}>
          <p style={stylesTimeLine.date}>{"Summer 2025"}</p>

          <p style={stylesTimeLine.message}>
            {"More and more unforgetable silly moments"}
          </p>
          <img src={moresilly} width={150} />
          <img src={moresilly2} width={150} />
        </div>

        <div style={stylesTimeLine.entry}>
          <p style={stylesTimeLine.date}>{"Summer 2023 (not real one)"}</p>

          <p style={stylesTimeLine.message}>
            {"I was scared showing myself so i made this unforgetable snap..."}
          </p>
          <img src={insecure} width={150} />
        </div>
        <div style={stylesTimeLine.entry}>
          <p style={stylesTimeLine.date}>{"Party Zozo is still here"}</p>

          <p style={stylesTimeLine.message}></p>
          <img src={sillymore4} width={150} />
        </div>
        <div style={stylesTimeLine.entry}>
          <p style={stylesTimeLine.date}>{"28th March 4am"}</p>

          <p style={stylesTimeLine.message}>
            That is me rn. MAking this website without sleep at 4am and crying
            his soul out while wearing your sexy thong. Begging for you to not
            give up on us and give us one last shot at this. I really want us. I
            love you so so much. I hope you liked this website. It took me quite
            awhile
          </p>
          <img src={today} width={150} />
        </div>
      </div>
    </div>
  );
}

export default App;
