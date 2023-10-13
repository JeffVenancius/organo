import "./footer.css";

interface FooterProps {
  facebook: string;
  twitter: string;
  instagram: string;
}

const Footer = ({ facebook, twitter, instagram }: FooterProps) => {
  return (
    <section className="end_footer">
      <div>
        <a href={facebook} target="_blank" rel="noreferrer">
          <img src="/images/footer/fb.png" alt="Facebook" />
        </a>
        <a href={twitter} target="_blank" rel="noreferrer">
          <img src="/images/footer/tw.png" alt="Twitter" />
        </a>
        <a href={instagram} target="_blank" rel="noreferrer">
          <img src="/images/footer/ig.png" alt="Instagram" />
        </a>
      </div>
      <img src="/images/footer/logo.png" alt="Logo da Organo" />
      <h1>Desenvolvido por Alura.</h1>
    </section>
  );
};

export default Footer;
