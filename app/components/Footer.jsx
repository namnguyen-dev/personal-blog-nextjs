import { ImLinkedin, ImHome, ImTwitter } from 'react-icons/im';

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto sm:flex sm:justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <a
              href="https://twitter.com/NamNguyen_Dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImTwitter color="#888888" />
            </a>
            <a
              href="https://www.linkedin.com/in/nam-dev/"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImLinkedin color="#888888" />
            </a>
            <a
              href="https://namdeveloper.netlify.app/"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
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
