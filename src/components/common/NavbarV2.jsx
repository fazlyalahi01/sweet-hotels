'use client'
import { siteConfig } from "@/config/site";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useAuth } from "@/contexts/authProvider/AuthProvider";

const NavbarV2 = ({ userSeesion }) => {
    const pathname = usePathname();
    const { userInfo, logout, isLogin } = useAuth();
    console.log(userInfo)

    return (
        <nav className={` flex justify-between items-center py-4 transition-all ease-in-out duration-300 border-b`}>
            <div className="flex justify-between items-center  w-full md:w-auto">
                <Link href={"/"}>
                    <Image src={"/logo-sweet-hotels.png"} height={70} width={100} alt="logo" />
                </Link>
                <div className="block md:hidden z-50 mr-2 mt-1">
                    <Popover>
                        <PopoverTrigger>
                            <RxHamburgerMenu color={"#696969"} className="cursor-pointer" />
                        </PopoverTrigger>
                        <PopoverContent>
                            <ul className="flex flex-col bg-white">
                                {siteConfig.navItems.map((item, index) => (
                                    <li key={index} className="cursor-pointer  text-sm hover:text-secondary duration-500 p-2  border-b">
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
                    <li key={index} className={`cursor-pointer  hover:text-secondary duration-500 flex-grow hover:text-black ${pathname === item.href ? " text-primary " : ""}`}>
                        <Link href={item.href}>{item.label}</Link>
                    </li>
                ))}
            </ul>

            {
               isLogin ? (
                    <Popover>
                        <PopoverTrigger>
                            <div className="flex items-center gap-3 border rounded-full p-1 shadow-sm">
                                <div className="  max-h-[30px] max-w-[30px] rounded-full h-[30px] w-[30px] bg-orange-600    md:grid place-items-center object-fit">
                                    <p className="text-white">{userInfo?.user?.first_name?.charAt(0).toUpperCase()} </p>
                                </div>
                                <IoIosArrowDown color={"#D3D3D3"} />
                            </div>

                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="flex items-center gap-3 border-b pb-2">
                                <div className="hidden  max-h-[30px] max-w-[30px] rounded-full h-[30px] w-[30px] bg-primary   text-white md:grid place-items-center">
                                    <h1>{userInfo?.user?.first_name?.charAt(0).toUpperCase()}</h1>
                                </div>
                                <p className=" text-sm">{userInfo?.user?.email}</p>
                            </div>
                            <div className="pt-2 space-y-2  text-sm">
                                <Link href="/bookings" className="text-grayLight hover:text-black">My Bookings</Link>
                                <p className="cursor-pointer hover:text-black" onClick={() => logout()}>Sign Out</p>
                            </div>
                        </PopoverContent>
                    </Popover>
                ) : (
                    <Link href="/login" className="text-primary px-4 py-2 border rounded-full border-primary">Login</Link>
                )
            }
        </nav >
    );
};

export default NavbarV2;
