"use client"

import react from "react";


const TextComponet = () => {
  react.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        // body: JSON.stringify({
        //   mail: "alice@example.com",//change pannu nanba kalila
        //   password: "password123",//idum change pananum
        // }),
        body: JSON.stringify({
          to : "naveenrajanm9@gmail.com"
        }),
      });
        console.log(res)
    };
      fetchData();
  }, []);
};

export default TextComponet;
