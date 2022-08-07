import React, { useEffect } from "react";

const SecondPage: React.FC = () => {
  useEffect(() => {
    alert("abcdef");
  });

  return <>2ページ目です。</>;
};

export default SecondPage;
