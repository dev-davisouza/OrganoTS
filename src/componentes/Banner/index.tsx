import "./banner.css";
import React from "react";

interface BannerProps {
  src: string;
  alt?: string /* Optional */;
}

const Banner = ({ src, alt }: BannerProps) => {
  return (
    <header className="cabecalho">
      <img src={src} alt={alt} />
    </header>
  );
};

export default Banner;
