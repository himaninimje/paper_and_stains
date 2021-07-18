import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
      <div className="flex md:shadow-md  bg-red-300 px-15 md:py-3 items-center justify-between ">
        <div className="flex justify-items-start items-center ">
          <div className="flex ml-1 px-1 hover:text-red-500 text-white text-6xl">
            <Link href="/" >
              <a >
                <Image src="/Logo.png" width={90} height={120} alt="Paper and Stains" />
              </a>
            </Link>
          </div>
          <div className="hidden lg:flex myHeader ml-1 px-1 hover:text-red-500 text-white text-8xl">
            <Link href="/">Paper and Stains</Link>
          </div>
        </div>
        <div className="text-white place-self-end justify-items-end items-end md:px-6 py-9 mt-4 mr-4">
          <a href="https://www.instagram.com/paper_and_stains/">
            <FontAwesomeIcon
              icon={faInstagram}
              className="ml-4 hover:text-red-500"
              size="2x"
            />
          </a>
          <a href="https://www.facebook.com/paperandstains">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="ml-4 hover:text-red-500"
              size="2x"
            />
          </a>
          <a href="mailto:paperandstains@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="ml-4 hover:text-red-500"
              size="2x"
            />
          </a>

        </div>
      </div>
    </>
  );
}

export default Header;