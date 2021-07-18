import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <>
      <div className="flex md:shadow-md  bg-red-300 px-10 py-3 w-full justify-center lg:justify-between items-center">
        <div className="flex myHeader ">
          <Link href="/" className="drop-shadow">Paper and Stains</Link>

        </div>
        <div className="text-white place-self-end p-9">
          <a href="https://www.instagram.com/paper_and_stains/">
            <FontAwesomeIcon
              icon={faInstagram}
              className="ml-4 px-1 hover:text-red-500"
              size="3x"
            />
          </a>
          <button>
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="ml-4 px-1 hover:text-red-500"
              size="3x"
            />
          </button>

        </div>
      </div>
    </>
  );
}

export default Header;