"use client";
import { signOut } from "next-auth/react";
const Logout = () => {
    const logout = () => {
        signOut({ callbackUrl: 'http://localhost:3000/login' });
    }

    return (
        <a className="cursor-pointer text-red-500" onClick={logout}>Logout</a>
    );
}
export default Logout;