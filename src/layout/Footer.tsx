
const Footer = () => {
  return (
        <footer className="bg-gray-900 text-gray-300 p-4 mt-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
        <span>© 2025 Your Name. All rights reserved.</span>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a href="https://github.com/simranabb" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/simranabbasov/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="tel:+994504671794" className="hover:text-white transition-colors">  +994 50 467 17 94</a>        
      </div>
      </div>
    </footer>
  )
}

export default Footer