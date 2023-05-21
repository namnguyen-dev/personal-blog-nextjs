import { ImLinkedin, ImHome, ImTwitter } from 'react-icons/im';

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto sm:flex sm:justify-center py-12">
        <div className="py-5">
          <div className="flex justify-center">
            <a
              href="https://twitter.com/NamNguyen_Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6"
            >
              <ImTwitter color="#888888" />
            </a>
            <a
              href="https://www.linkedin.com/in/nam-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6"
            >
              <ImLinkedin color="#888888" />
            </a>
            <a
              href="https://namdeveloper.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6"
            >
              <ImHome color="#888888" />
            </a>
          </div>
          <p className="text-center py-5 text-gray-400 break-words ">
            {
              "Copyright ©2023 All rights reserved | Nam's Journey to learn coding"
            }
          </p>
        </div>
      </div>
    </footer>
  );
}
