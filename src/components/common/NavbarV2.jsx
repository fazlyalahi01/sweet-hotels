'use client'
import { siteConfig } from "@/config/site";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const NavbarV2 = ({ userSeesion }) => {
    const pathname = usePathname();

    return (
        <nav className={` flex justify-between items-center py-4 transition-all ease-in-out duration-300`}>
            <div className="flex justify-between items-center  w-full md:w-auto">
                <Link href={"/"}>
                    <Image src={"/logo-sweet-hotels.png"} height={70} width={100} alt="logo" />
                </Link>
                <div className="block md:hidden z-50 mr-2 mt-1">
                    <Popover>
                        <PopoverTrigger>
                            <RxHamburgerMenu  color={"#696969"} className="cursor-pointer" />                           
                        </PopoverTrigger>
                        <PopoverContent>
                            <ul className="flex flex-col bg-white">
                                {siteConfig.navItems.map((item, index) => (
                                    <li key={index} className="cursor-pointer text-gray-500 text-sm hover:text-secondary duration-500 p-2  border-b">
                                        <Link href={item.href}>{item.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>

            <ul className="hidden md:flex ">
                {siteConfig.navItems.map((item, index) => (
                    <li key={index} className={`cursor-pointer text-gray-500 hover:text-secondary duration-500 flex-grow ${pathname === item.href ? " text-primary" : ""}`}>
                        <Link href={item.href}>{item.label}</Link>
                    </li>
                ))}
            </ul>

            {
                userSeesion?.user ? (
                    <Popover>
                        <PopoverTrigger>
                            <div className="flex items-center gap-3 border rounded-full p-1 shadow-sm">
                                <div className="  max-h-[30px] max-w-[30px] rounded-full h-[30px] w-[30px] bg-orange-600   text-gray-500 md:grid place-items-center object-fit">
                                    {
                                        userSeesion?.user?.image ? (
                                            <Image src={userSeesion?.user?.image} alt={userSeesion?.user?.name} height={30} width={30} className="rounded-full h-[30px] w-[30px] border-primary border-2" />
                                        ) : (
                                            <h1>{userSeesion?.user?.name?.charAt(0).toUpperCase()} </h1>
                                        )

                                    }
                                </div>
                                <IoIosArrowDown color={"#D3D3D3"} />
                            </div>

                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="flex items-center gap-3 border-b pb-2">
                                <div className="hidden  max-h-[30px] max-w-[30px] rounded-full h-[30px] w-[30px] bg-primary   text-white md:grid place-items-center">
                                    {
                                        userSeesion?.user?.image ? (
                                            <Image src={userSeesion?.user?.image} alt={userSeesion?.user?.name} height={100} width={100} className="rounded-full" />
                                        ) : (
                                            <h1>{userSeesion?.user?.name?.charAt(0).toUpperCase()} </h1>
                                        )

                                    }
                                </div>
                                <p className="text-gray-500 text-sm">{userSeesion?.user?.email}</p>
                            </div>
                            <div className="pt-2 space-y-2 text-gray-500 text-sm">
                                <Link href="/bookings">My Bookings</Link>
                                <p className="cursor-pointer" onClick={() => signOut()}>Sign Out</p>
                            </div>
                        </PopoverContent>
                    </Popover>
                ) : (
                    <Link href="/login" className="text-primary px-4 py-2 rounded-md ">Login</Link>
                )
            }


        </nav >
    );
};

export default NavbarV2;
