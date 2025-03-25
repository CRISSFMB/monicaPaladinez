
import Link from 'next/link'
import Style from './navbar.module.css'

const NavBar = () => {
    return (
        <nav className={Style.backgroundNav}>
            <div className={`container ${Style.nav}`}>
                <Link href={"/"} className={Style.logo}>Monica Paladinez</Link>
                <ul className={Style.navLinks}>
                    <li>
                        <Link className={Style.link} href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link className={Style.link} href={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link className={Style.link} href={"/service"}>services</Link>
                    </li>
                    <li>
                        <Link className={Style.link} href={"/contact"}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav >
    )
}

export default NavBar
