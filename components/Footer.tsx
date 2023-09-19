import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className='flex flex-col text-black-100 border-t border-gray-100'>
    <div className='flex justify-between items-center flex-wrap sm:px-16 px-6 py-10'>
      <Link href='/' className='flex justify-center items-center'>
        <Image src='/logo.svg' alt='logo' width={118} height={18} className='object-contain' />
      </Link>
      <p>@2023 Star Wars. All rights reserved</p>
    </div>
  </footer>
);

export default Footer;
