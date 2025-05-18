const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Anbu Sivam B. All rights reserved.
        </p>
        <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
          PCB Designer & Full Stack Developer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
