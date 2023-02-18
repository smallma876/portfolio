import React, { ElementType, FC, useEffect, useRef, useState } from "react";
import { TypingEffectStyle } from "./TypingEffect.style";

interface TypingEffectProps {
  component: ElementType;
  variant: "h1" | "h2" | "h3";
  text: string;
}

const TypingEffect: FC<TypingEffectProps> = ({
  component: Component,
  variant,
  text,
}: TypingEffectProps) => {
  const [splitText, setSplitText] = useState("");
  const sizeLetter = useRef(0);

  useEffect(() => {
    /* istanbul ignore next */
    const addLetter = () => {
      let nexLetter = text.substring(
        sizeLetter.current,
        sizeLetter.current + 1
      );
      sizeLetter.current = sizeLetter.current + 1;
      setSplitText((previousState) => {
        return previousState.concat(nexLetter);
      });
    };
    /* istanbul ignore else */
    if (splitText.length < text.length) {
      setTimeout(addLetter, 500);
    } else {
      sizeLetter.current = 0;
      setTimeout(() => setSplitText(""), 500);
    }
  }, [splitText, text]);

  return (
    <TypingEffectStyle.Wrapper>
      <Component>{splitText}</Component>
    </TypingEffectStyle.Wrapper>
  );
};

export default TypingEffect;
