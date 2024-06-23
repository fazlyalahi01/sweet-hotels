
import Image from "next/image"
import Link from "next/link"

const Navbar = async () => {
  return (
    <nav className="border-b">
      <Link href={"/"}>
        <Image src={"/logo-sweet-hotels.png"} height={70} width={100} alt="logo" />
      </Link>

    </nav>
  )
}

export default Navbar