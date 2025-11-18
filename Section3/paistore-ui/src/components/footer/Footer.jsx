import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "/home/pai/Documents/Java Fullstack Course/Section3/paistore-ui/src/components/footer/footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      Made with
      <FontAwesomeIcon
        icon={faHeart}
        className="footer-icon"
        aria-hidden="true"
      />
      by
      <a href="github.com/PrajwalPai21/" target="_blank" rel="noreferrer">
        Prajwal Pai
      </a>
    </footer>
  );
};

export default Footer;
