import "./Banner.css";

interface BannerProps {
  imgAdress: string;
  imgAlt?: string;
}

function Banner({ imgAdress, imgAlt }: BannerProps) {
  return (
    <header className="banner">
      <img src={imgAdress} alt={imgAlt} />
    </header>
  );
}

export default Banner;
