import Link from 'next/link';

function Navbar() {
    return(
        <>
        <nav>
            <ul>
                <li ><Link  href="/about" >about </Link></li>
                <li ><Link  href="/" >Home </Link></li>
            </ul>
        </nav>
        <style jsx>
            {`
            li {
                color:red;
                text-transform:uppercase;
            }`}
        </style>
        </>
    ) 
}

export default Navbar;