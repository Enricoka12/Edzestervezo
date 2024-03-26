import React from "react";


 function Footer() {
  return (
    <div>
    <footer className="w-full py-6 md:py-8 lg:py-12 bg-gray-900 text-white">
      <div className="container px-4 md:px-6 lg:flex lg:justify-between">
        <div className="flex gap-10">
          <div className="flex flex-col items-center">
          
            <p className="mt-2 text-center">Scan to download our app</p>
          </div>
          <div className="flex flex-col items-center">
           
            <p className="mt-2 text-center">Scan to follow us on Instagram</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-10 lg:mt-0 lg:flex-row lg:justify-end">
         
        </div>
      </div>
    
    </footer>
    </div>
  )
}


export default Footer;
