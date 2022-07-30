import React, { useEffect, useState } from "react";
import Alphabet from "./alphabet.json";

type Text = string;
type DotCount = number;

const MainApp = () => {
  const [text, setText] = useState<Text>("");
  const [dotCount, setDotCount] = useState<DotCount>(0);

  useEffect((): void => {
    let count = 0;
    text.split(" ").map((item) => {
      for (let i = 0; i < item.length; i++) {
        const char = item[i];
        const charInAlphabet = Alphabet[char];
        if (char === "ی") {
          if (i === 0 || i !== item.length - 1) {
            count += 2;
            continue;
          }
        }
        count += charInAlphabet?.dotCount || 0;
      }
    });
    setDotCount(count);
  }, [text]);

  return (
    <div className={"flex justify-center items-center h-full bg-gray-100"}>
      <div
        className={
          "flex justify-center items-center flex-col space-y-2 w-96 h-52 shadow-sm rounded-md bg-gray-400"
        }
      >
        <div>
          <input
            className={"p-2 rounded-md text-right"}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          {dotCount ? (
            <span>تعداد نقطه ها {dotCount}</span>
          ) : (
            <span>بدون نقطه</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainApp;
