import Link from 'next/link'
import Image from 'next/image'
import img from '../public/logo.png'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar  has-background-danger-light mb-4" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link href="/">
                        <a className="navbar-item">
                            <Image src={img} placeholder="blur" alt="fabglass" />
                        </a>
                    </Link>
                </div>
                <div className="navbar-end is-hidden-mobile">
                    <Link href="/about">
                        <a className="navbar-item title is-5"> <span className="is-size-7 mt-1">made with </span> NEXT.JS</a>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
