import { v4 as uuid } from "uuid";
import { useState } from "react";
function randomEmoji() {
  const choices = ["😉", "😎", "😭", "😀", "😍", "🤑"];
  return choices[Math.floor(Math.random() * choices.length)];
}
export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }]);
  const addEmoji = () => {
    setEmojis((oldEmojis) => [
      ...oldEmojis,
      { id: uuid(), emoji: randomEmoji() },
    ]);
  };
  const deleteEmoji = (id) => {
    setEmojis((prevEmojis) => {
      return prevEmojis.filter((e) => e.id !== id);
    });
  };
  const makeSick = () => {
    setEmojis((prevEmojis) => {
      return prevEmojis.map((e) => {
        return { ...e, emoji: "🤮" };
      });
    });
  };
  return (
    <div>
      {emojis.map((e) => (
        // Need to use an inline function here, not just deleteEmoji(e.id) because that would execute the function immediately
        <span
          key={e.id}
          onClick={() => deleteEmoji(e.id)}
          style={{ fontSize: "4rem", cursor: "pointer" }}>
          {e.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
      <button onClick={makeSick}>Make them all sick</button>
    </div>
  );
}
