
import Link from "next/link"
import { auth } from "../../auth"
import Logout from "./auth/Logout"

const Navbar = async ({ displayNavItems }) => {
  const session = await auth()
  return (
    <nav>
      <Link href="/">
        <p className="text-primary font-bold text-3xl capitalize">stay Swift</p>
      </Link>
      {
        displayNavItems && (
          <ul >
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="#">Contact us</Link>
            </li>
            <li>
              <Link href="/hotels">Explore Hotels</Link>
            </li>
            <li>
              <Link href="/bookings">Bookings</Link>
            </li>
            {
              session?.user ? (
                <li>
                  <span>{session?.user?.name}</span>
                  <span className="mx-2">|</span>
                  <Logout />
                </li>
              ) :
                (
                  <li>
                    <Link href="/login" class="login bg-primary">Login</Link>
                  </li>
                )
            }

          </ul>
        )
      }
    </nav>
  )
}

export default Navbar