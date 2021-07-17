import { useEffect, useState } from "react";

export default function Message() {
  useEffect(() => {
    console.log("USser has logged in");
    return () => {
      console.log("Bye!");
    };
  }, []);

  return <h1>User is logged in</h1>;
}
