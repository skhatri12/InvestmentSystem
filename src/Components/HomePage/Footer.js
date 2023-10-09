import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const copyrightSymbol = '\u00A9';
  return (
    <div>
      <div className='bg-zinc-800 text-white mt-2 text-center text-xl ' >
        <footer className='flex-shrink-0'>{copyrightSymbol} {currentYear} Investment Plan System. All rights reserved.</footer>
      </div>
    </div>
  )
}

export default Footer
