import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container-x py-8 mx-auto flex flex-wrap justify-between space-y-8 md:space-y-0">

                <div className="w-full md:w-1/4">
                    <h2 className="text-2xl font-bold text-white mb-4">Dream<span className="text-primary">HUB</span></h2>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit porta, tempus eros mollis facilisis vestibulum.
                    </p>
                    <div className="flex space-x-2">
                        <a href="#" className="text-white hover:text-white bg-gray-800 p-1 rounded"><FaFacebookF /></a>
                        <a href="#" className="text-white hover:text-white bg-gray-800 p-1 rounded"><FaLinkedinIn /></a>
                        <a href="#" className="text-white hover:text-white bg-gray-800 p-1 rounded"><FaTwitter /></a>
                    </div>
                </div>

                <div className="w-full md:w-1/4">
                    <h3 className="text-xl font-semibold text-white mb-4">Explore</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">About</a></li>
                        <li><a href="#" className="hover:underline">Pages</a></li>
                        <li><a href="#" className="hover:underline">Features</a></li>
                        <li><a href="#" className="hover:underline">Blog</a></li>
                    </ul>
                </div>

                <div className="w-full md:w-1/4">
                    <h3 className="text-xl font-semibold text-white mb-4">Our Service</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Financial Planning</a></li>
                        <li><a href="#" className="hover:underline">Investment Management</a></li>
                        <li><a href="#" className="hover:underline">Retirement Planning</a></li>
                        <li><a href="#" className="hover:underline">Investment Analysis</a></li>
                    </ul>
                </div>

                <div className="w-full md:w-1/4">
                    <h3 className="text-xl font-semibold text-white mb-4">Lets Talk!</h3>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit hac facilisis vestibulum.
                    </p>
                    <a href="#" className="inline-block bg-transparent border border-gray-300 text-gray-300 py-2 px-4 rounded hover:bg-gray-800 hover:text-white">Contact Us →</a>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center container-x">
                <p>&copy; 2023 - <a href="#" className="text-primary hover:underline">DreamHUB</a> - All Rights Reserved by DRTheme</p>
                <div className="space-x-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms & Services</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
