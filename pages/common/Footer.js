import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="py-7 flex-center text-white text-center font-sans bg-red-300 space-y-5">
      <div >
        <a href="mailto:paperandstains@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="ml-4 hover:text-red-500"
            size="2x"
          />
        </a>
        <div >
          paperandstains@gmail.com
        </div>
      </div>
      <hr className="shodow ml-10 mr-10" />
      <div >
        Copyright © 2021 - Paper and Stains
      </div>
    </div>


  );
}

export default Footer;