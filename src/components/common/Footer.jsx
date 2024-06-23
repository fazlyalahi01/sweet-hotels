import { siteConfig } from '@/config/site';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="border-t text-gray-300 md:py-12 ps-4">
            <div className="container-x py-8 mx-auto flex flex-wrap justify-between space-y-8 md:space-y-0 ">

                <div className="w-full md:w-1/4 pr-8">
                    <Link href={"/"}>
                        <Image src={"/logo-sweet-hotels.png"} height={70} width={100} alt="logo" />
                    </Link>
                    <p className="mb-4">
                        Your onestop hotel booking platform. Find all the best hotel deals in one place
                    </p>
                    <div className="flex space-x-2">
                        <a href="#" className="text-white hover:text-white bg-gray-800 p-1 rounded"><FaFacebookF /></a>
                        <a href="#" className="text-white hover:text-white bg-gray-800 p-1 rounded"><FaLinkedinIn /></a>
                        <a href="#" className="text-white hover:text-white bg-gray-800 p-1 rounded"><FaTwitter /></a>
                    </div>
                </div>

                <div className="w-full md:w-1/4 pr-8">
                    <h3 className="text-xl font-semibold  mb-4">Our Location</h3>
                    <p > Rangs Pearl Tower, 4th Floor,
                        House no. 76, Road 12, Block E, Banani,
                        Dhaka 1213, Bangladesh</p>
                </div>

                <div className="w-full md:w-1/4">
                    <h3 className="text-xl font-semibold  mb-4">Our Service</h3>
                    <ul className="space-y-2">
                        {
                            siteConfig.navItems.map((item, index) => (
                                <li key={index} className="hover:underline">
                                    <Link href={item.href}>{item.label}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="w-full md:w-1/4">
                    <h3 className="text-xl font-semibold  mb-4">Lets Talk!</h3>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit hac facilisis vestibulum.
                    </p>
                    <a href="#" className="inline-block bg-transparent border border-grayLight hover:border-primary text-grayLight py-2 px-4 rounded hover:bg-primary hover:text-white">Contact Us →</a>
                </div>
            </div>
            <div className="border-t  mt-8 pt-8 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center container-x">
                <p>&copy; 2023 - <a href="#" className="text-primary hover:underline">Sweet Hotels</a> - All Rights Reserved by Fazly</p>
                <div className="space-x-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms & Services</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
